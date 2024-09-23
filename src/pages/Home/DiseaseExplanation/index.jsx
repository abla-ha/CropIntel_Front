import Markdown from 'react-markdown';
import CIChat from '../../../components/CIChat';
import './index.css';
import { useEffect, useState } from 'react';
import { useChat } from '../../../hooks/chatHook';
import { useSelector } from 'react-redux'; 
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable'; 
import userimg from '../../../assets/avatar.png'


export default function DiseaseExplanation() {
    const { sendToBot, loading } = useChat();
    const diseaseData = useSelector((state) => state.disease);
    const [diseaseResult, setDiseaseResult] = useState({
        disease: diseaseData.diseaseClass || "Unknown",
        confidence: diseaseData.confidence ? `${(diseaseData.confidence * 100).toFixed(2)}%` : "Unknown"
    });

    const [context, setContext] = useState({
        "plant-type": "",
        "symptoms": "",
        "watering": "",
        "pests": ""
    });

    const [stepNum, setStepNum] = useState(0);
    const [messages, setMessages] = useState([]);

    async function onSend(message) {
        setMessages(messages => [...messages, {
            user: 'user',
            text: `<b>${message.text}</b> <img src="${userimg}" style="width: 50px; height: 50px;" alt="User Image"/>`, 
            embeds: null
        }]);

        if (stepNum < steps.length - 1) {
            setContext(prevContext => ({ ...prevContext, [steps[stepNum].type]: message.text }));
            setStepNum(num => num + 1);
            return;
        }

        const preprompt = `You are an AI assistant specialized in plant diseases. 
        I have a ${context["plant-type"] || "plant"} with the following symptoms: ${context['symptoms'] || "not specified"}, 
        watering habits: ${context['watering'] || "not specified"}, and pests seen: ${context['pests'] || "not specified"}. 
        The detected disease is ${diseaseResult.disease} with a confidence of ${diseaseResult.confidence}. 
        Please provide a detailed report on this plant disease, its cause, and possible solutions.`;

        const res = await sendToBot(preprompt);

        if (res.length === 0) return;

        setMessages(messages => [...messages, {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: ``,
            embeds: [<Markdown>{res}</Markdown>]
        }]);

        // Generate PDF after receiving response
        generatePDF(diseaseResult.disease, res);
    }

    function generatePDF(diseaseName, report) {
        const doc = new jsPDF();
        
        // Add a title
        doc.setFontSize(16);
        doc.text('Plant Disease Report', 10, 10);

        // Add a table with disease info and report
        autoTable(doc, {
            head: [['Section', 'Details']],
            body: [
                ['Disease', diseaseName],
                ['Confidence', diseaseResult.confidence],
                ['Report', report],
            ],
            startY: 20,
            theme: 'grid',
            headStyles: { fillColor: [0, 100, 200] },
            styles: { cellPadding: 5, fontSize: 12 },
        });

        // Save the PDF
        doc.save('plant_disease_report.pdf');
    }

    // Steps of questions
    const steps = [
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>Welcome! Please tell me what type of plant you're growing.</b>`,
            type: "plant-type"
        },
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>What symptoms are you seeing on your plant?</b>`,
            type: "symptoms"
        },
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>How often do you water your plant?</b>`,
            type: "watering"
        },
        {
            user: 'bot',
            logo: '/images/logo-black.svg',
            text: `<b>Have you noticed any pests (insects or animals) on the plant?</b>`,
            type: "pests"
        },
    ];

    // Load the steps one by one as the user interacts
    useEffect(() => {
        if (stepNum < steps.length) {
            setMessages((messages) => [...messages, steps[stepNum]]);
        }
    }, [stepNum]);

    return (
        <div id="diseasedetection">
            <h1>Disease Detection</h1>
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
