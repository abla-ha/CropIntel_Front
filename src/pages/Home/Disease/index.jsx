import { useState } from 'react';
import './index.css';
import CIButton from '../../../components/CIButton';
import { useDispatch, useSelector } from 'react-redux';
import { toggleNav } from '../../../slices/navbarSlice';
import { setDiseaseData } from '../../../slices/diseaseSlice'; 
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import axios from 'axios';
import { config } from "../../../config";
import { Link } from 'react-router-dom';

export default function Disease() {
    const navOn = useSelector((state) => state.nav.navOn);
    const dispatch = useDispatch();
    const [selectedImage, setSelectedImage] = useState(null);
    const [diseaseClass, setDiseaseClass] = useState(null);
    const [confidence, setConfidence] = useState(null);
    const [hideContent, setHideContent] = useState(false); 

    // This function handles the file input change event
    const handleImageChange = (event) => {
        const file = event.target.files[0];
        if (file) {
            setSelectedImage(URL.createObjectURL(file)); 
            uploadImage(file); 
        }
    };

    async function uploadImage(file) {
        const formData = new FormData();
        formData.append('file', file); 
    
        try {
            const response = await axios.post(`${config.host}/api/v1/pest_disease/predict`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });
            console.log('Response:', response.data);
            
           
            const detectedClass = response.data.class_name;
            const detectedConfidence = response.data.confidence;

            setDiseaseClass(detectedClass);
            setConfidence(detectedConfidence);

            // Dispatch the data to Redux store
            dispatch(setDiseaseData({
                diseaseClass: detectedClass,
                confidence: detectedConfidence,
            }));

            // Hide the button, text, and other elements once the image is uploaded
            setHideContent(true);
        } catch (error) {
            console.error('Error uploading image:', error.response ? error.response.data : error.message);
        }
    }

    // Function to trigger the hidden file input when button is clicked
    const handleClick = () => {
        document.getElementById('image-upload').click(); 
    };

    return (
        <div id="crops">
            <div className="header">
                <h1>Plant Disease Detection</h1>
                {!navOn ? (
                    <MenuIcon className="nav-burger" onClick={() => dispatch(toggleNav())} />
                ) : (
                    <CloseIcon className="nav-burger" onClick={() => dispatch(toggleNav())} />
                )}
            </div>

            <div className="recommendation-container">
                <br />
                
              
                {!hideContent && (
                    <>
                        <div>We can help you understand what type of disease has affected your crops!</div>
                        
                        {/* Hidden file input */}
                        <input
                            type="file"
                            accept="image/*"
                            onChange={handleImageChange}
                            style={{ display: 'none' }}
                            id="image-upload"
                        />

                        {/* Button to trigger the file input */}
                        <CIButton className="get-started-btn" onClick={handleClick}>
                            Upload Image
                        </CIButton>
                    </>
                )}

                {/* Image preview */}
                {selectedImage && (
                    <div>
                        <img className='image' src={selectedImage} alt="Selected" style={{ maxWidth: '100%', marginTop: '20px' }} />
                    </div>
                )}

                {diseaseClass && confidence && (
                    <div className="disease-result">
                        <p>Disease Detected: <strong>{diseaseClass}</strong></p>
                        <p>Confidence: <strong>{(confidence * 100).toFixed(2)}%</strong></p>

                    
                        <Link to="/home/DiseaseExplanation"> 
                            <CIButton className="explain-btn">
                                Explain
                            </CIButton>
                        </Link>
                    </div>
                )}
            </div>
        </div>
    );
}
