import './index.css'
import LoadingAnimation from '../../assets/infinite-spinner.svg';

export default function CIButton({
    children,
    className='',
    style={},
    onClick=() => null,
    type='button',
    loading=false,
    spinnerColor='FFFFFF'
}) {
    return (
        <button 
            style={style} 
            className={"cibutton " + className}
            onClick={onClick}    
        >
            { 
                !loading ?
                    children 
                :
                    <img className='loader' src={LoadingAnimation}/>
            }
        </button>
    );
}