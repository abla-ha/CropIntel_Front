import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../slices/userSlice';
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

    return {
        loading,
        sendToBot
    }
}