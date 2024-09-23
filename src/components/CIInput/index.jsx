import { useRef, useState } from 'react';
import './index.css'
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import SendOutlinedIcon from '@mui/icons-material/SendOutlined';

export default function CIInput({
    name,
    loading=false,
    MuiIcon=null,
    type="text",
    placeholder='',
    iconStyles={},
    inputStyle={},
    className='',
    onSend = () => null,
    onChange = () => null
}) {
    
    const [appearText, setAppearText] = useState(false);

    const ref = useRef(0);

    function setType() {
        if(type === 'password') return appearText ? 'text' : 'password';
        if(type === 'message') return 'text'
        
        return type;
    }

    function handleSend() {
        if(loading) return;
        onSend({
            text: ref.current.value,
            type
        });
        
        ref.current.value = '';
    }
    
    return (
        <div className={"ciinput " + className} onClick={e => ref.current.focus()}>
            {
                MuiIcon ?
                <MuiIcon style={iconStyles} className='icon' />
                :
                null
            }

            <input 
                style={inputStyle}
                type={setType()} 
                placeholder={placeholder}
                onChange={onChange}
                ref={ref}
                name={name}
                disabled={loading}
                onKeyDown={e => {
                    if(e.key == 'Enter') {
                        handleSend();
                    }
                }}
            />

            {
                type === 'password' ?
                    <div className='visibility-icon'>
                        {
                            appearText ?
                                <VisibilityOutlinedIcon style={iconStyles} onClick={e => setAppearText(false)}/>
                            :
                                <VisibilityOffOutlinedIcon style={iconStyles} onClick={e => setAppearText(true)}/>
                        }
                    </div>
                :
                null
            }

            {
                type === 'message' ?
                    loading ?
                    <img src="/images/chat-loading.svg" alt="message loading spinner" />
                    :
                    <div className='visibility-icon'>
                        <SendOutlinedIcon onClick={e => handleSend()} />
                    </div>
                :
                null
            }
        </div>
    );
}