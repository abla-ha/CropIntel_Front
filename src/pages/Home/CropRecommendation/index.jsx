import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DateCalendar } from '@mui/x-date-pickers/DateCalendar';
import Markdown from 'react-markdown'
import CIChat from '../../../components/CIChat';
import './index.css'
import { useEffect, useState } from 'react';
import { useChat } from '../../../hooks/chatHook';

export default function CropRecommendation() {

    const { sendToBot, loading } = useChat();

    const [context, setContext] = useState({
        "address": "",
        "select-field": "",
        "date-answer": ""
    });

    let localStepNum = 0;
    const [stepNum, setStepNum] = useState(0);

    const [messages, setMessages] = useState([]);

    const [fields, setFields] = useState([
        {
            title: "Corn field",
            image: "/images/dummies/corn.png",
            size: "17ha",
            text: "Harvest on July 15th"
        },
        {
            title: "Wheat field",
            image: "/images/dummies/wheat.png",
            size: "17ha",
            text: "Harvest on June 26th"
        }
    ]);


    async function onSend(message) {
        setMessages(messages => [...messages, {
            user: 'user',
            logo: '/images/logo-black.svg',
            text: `<b>${message.text}</b>`,
            embeds: null
        }]);

        if(stepNum < steps.length-1) {
            if(['date-answer', 'select-field'].includes(message.type)) 
                setContext({...context, [message.type]: message.text});
            else
                setContext({...context, 'address': message.text});
            
            localStepNum++;
            setStepNum(num => num + 1);
            return;
        }

        console.log(context);

        const preprompt = `I want you to answer my request while keeping in mind that I'm on a ${context["select-field"]} on the date: ${context['date-answer']} at the location: ${context['address']}:`
        console.log(preprompt);
        const res = await sendToBot(`${preprompt}\n${message.text}`);
        if(res.length == 0) return;
        setMessages(messages => [...messages, {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: ``,
            embeds: [
                <Markdown>{res}</Markdown>
            ]
        }]);
    }

    const steps = [
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>I am here to assist you with crop recommendations. First, I need some details from you. <br/><br/> When do you plan to harvest your crop? select from the  calender</b>`,
            embeds: [
                <LocalizationProvider key={'em-d-0'} dateAdapter={AdapterDayjs}>
                    <DateCalendar 
                        showDaysOutsideCurrentMonth 
                        fixedWeekNumber={6} 
                        disabled={stepNum !== 0}
                        onChange={(v) => {
                            if(localStepNum !== 0) return;
                            onSend({
                                type: 'date-answer',
                                text: v.$d
                            });
                        }}
                    />
                </LocalizationProvider>
            ]
        },
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>Write down your address (or at least region)</b>`,
            embeds: []
        },
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>Now select which field?</b>`,
            embeds: [
                (() => {
                    return (
                        <div
                            style={{
                                width: '100%',
                                overflowX: 'auto',
                                display: 'flex',
                                paddingTop: '15px',
                                gap: 15
                            }}
                        >
                            {
                                fields.map((field, index) => {
                                    return (
                                        <button 
                                            key={JSON.stringify(field) + index}
                                            onClick={e => {
                                                onSend({
                                                    type: 'select-field',
                                                    text: field.title
                                                })
                                            }}

                                            style={{
                                                padding: '15px',
                                                border: 'solid black 1px',
                                                cursor: 'pointer',
                                            }}
                                        >
                                            {field.title}
                                        </button>
                                    );
                                })
                            }
                        </div>
                    )
                })()
            ]
        },
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>Perfect! now ask me anything.</b>`,
            embeds: []
        }
    ];

    useEffect(() => {
        if(stepNum < steps.length) {
            setMessages((messages) => [...messages, steps[stepNum]]);
        }
    }, [stepNum]);

    return (
        <div id="croprecommendation">
            <h1>Crops Recommendation</h1>
            
            <br />

            <CIChat
                messages={messages}
                className='chatbot'
                onSend={onSend}
                loading={loading}
            />
            
            <br />
        </div>
    );
}