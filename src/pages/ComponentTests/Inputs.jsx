import CIInput from "../../components/CIInput";
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import PersonOutlineOutlinedIcon from '@mui/icons-material/PersonOutlineOutlined';

export default function InputsTests() {
    return (
        <>
            <h1>Inputs </h1>
            <CIInput
                MuiIcon={LockOutlinedIcon}
                placeholder='Password'
                type='password'
            />

            <CIInput
                MuiIcon={PersonOutlineOutlinedIcon}
                placeholder='Input with Icon'
                type='text'
            />

            <CIInput
                placeholder='Input without icon'
                type='text'
            />

            <CIInput
                placeholder='Input with send button'
                type='message'
            />
        </>
    )
}