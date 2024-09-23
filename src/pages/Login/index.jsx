import './index.css'
import LogoSvg from '../../assets/logo.svg';
import AppleLogo from '../../assets/apple.svg';
import GoogleLogo from '../../assets/google.svg';

import CIInput from '../../components/CIInput';
import CIButton from '../../components/CIButton';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';
import EmailOutlinedIcon from '@mui/icons-material/EmailOutlined';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { Link } from 'react-router-dom';
import { useLogin } from '../../hooks/authHook';

export default function Login() {
    const { sendLogin, loading } = useLogin();

    async function handleSubmit(e) {
        e.preventDefault();
        const data = {};
        for(const element of e.target.elements) {
            console.log(element);
            if(element.name) {
                data[element.name] = element.value;
            }
          

        }

        console.log(data);
        const result = await sendLogin(data);
        if(result.status == 'success') {
            location.href = '/';
        }
    }

    return (
        <div id="login">
            <div className='left-side'>
                <h1>
                    Crop<span>Intel</span>
                </h1>
                <br />
                <h2>
                    Welcome back!
                </h2>

                <form onSubmit={handleSubmit}>

                    <CIInput 
                        MuiIcon={EmailOutlinedIcon}
                        placeholder='Email'
                        type='email'
                        name={'username'}
                    />

                    <CIInput 
                        MuiIcon={LockOutlinedIcon}
                        placeholder='Password'
                        type='password'
                        name={'password'}
                    />

                    <br />
                    <span>Or</span>

                    <div className='external-providers'>
                        <button>
                            <img src={GoogleLogo} alt="The logo of google" />
                        </button>

                        <button>
                            <img src={AppleLogo} alt="The logo of apple" />
                        </button>
                    </div>

                    <br />
                    <CIButton 
                        className='sign-btn' 
                        type='submit'
                        loading={loading}
                    >
                        Log in
                    </CIButton>
                    <p>
                        You don't have an account? <Link to={'/register'}>Sign up</Link>
                    </p>
                </form>
            </div>

            <div className='right-side'>
                <div className='overlay'>
                    <img src={LogoSvg} alt="The logo of CropIntel" />
                </div>
            </div>
        </div>
    );
}