import './index.css'
import Panel from '../Panel'
import CIInput from '../CIInput';
import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

export default function CIChat({
    className='',
    messages=[],
    onSend,
    loading
}) {

    const chatBoxRef = useRef(null);

    useEffect(() => {
        chatBoxRef.current.scrollTop = chatBoxRef.current.scrollHeight;
    }, [messages]);

    return (
        <Panel className={"cichat " + className}>
            <div ref={chatBoxRef} className='message-container'>
                {
                    messages.map((message, index) => {
                        return (
                            <motion.div 
                                key={JSON.stringify(message, (k, val) => k =='embeds' ? undefined : val)+index} 
                                className={`${message.user} message`}
                                initial={{
                                    opacity: 0,
                                    y: 15
                                }}

                                animate={{
                                    opacity: 1,
                                    y: 0
                                }}
                            >
                                <div className='user-logo'>
                                    <img src={message.logo} />
                                </div>
                                <div className='user-message'>
                                    <div dangerouslySetInnerHTML={{__html: message.text}}></div>
                                    { message.embeds }
                                </div>
                            </motion.div>
                        );
                    })
                }
            </div>

            <CIInput
                placeholder='Message CropChat'
                type='message'
                className='message-input'
                onSend={onSend}
                loading={loading}
            />
        </Panel>
    );
}