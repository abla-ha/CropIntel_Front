import { useState } from "react";
import axios from 'redaxios';
import { config } from "../config";

export function useChat() {
    const [loading, setLoading] = useState(false);

    async function sendToBot(message) {
        setLoading(true);
        let response = "";
        try {
            const res = await axios.post(`${config.host}/llm-chat/chat`, {
                userInput: message
            });
            response = res.data.response;
        } catch(err) {
            console.log(err);
        } finally {
            setLoading(false);
        }
        return response;
    }

    // Function to handle automatic question generation based on disease detection
    async function generateQuestions(diseaseClass) {
        const questions = [
            "What crop variety are you growing?",
            "When did the symptoms first appear?",
            "What symptoms are you observing on the plants?",
            "Are the symptoms widespread or limited to specific areas?",
            "What is your irrigation method and frequency?",
            "Have you noticed any pest activity?",
            "What is the current weather condition?",
            "Have you applied any chemicals recently?",
            "Have you practiced crop rotation?",
            "Has this disease occurred before?",
            "Have you tested the soil recently?"
        ];

        let botMessages = `The detected disease class is: ${diseaseClass}. I need more information to assist further:`;
        questions.forEach((question, index) => {
            botMessages += `\n${index + 1}. ${question}`;
        });

        return botMessages;
    }

    return {
        loading,
        sendToBot,
        generateQuestions
    };
}
