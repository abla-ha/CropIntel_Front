import { useState } from "react";
import { useDispatch } from "react-redux";
import { login } from '../slices/userSlice';
import { config } from "../config";

export function useLogin() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    async function sendLogin({ username, password }) { 
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            let status = "";
            try {
                const response = await fetch(`${config.host}/login/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/x-www-form-urlencoded',
                    },
                    body: new URLSearchParams({
                        username, 
                        password
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                const token = data.access_token;
                dispatch(login(token));
                status = "success";
            } catch (err) {
                console.error("Login error:", err.message);
                status = "error";
            } finally {
                setLoading(false);
                resolve({ status });
            }
        });
    }

    return {
        loading,
        sendLogin
    }
}

export function useRegister() {
    const [loading, setLoading] = useState(false);
    const dispatch = useDispatch();

    async function sendRegister({username, email, password}) {
        return new Promise(async (resolve, reject) => {
            setLoading(true);
            let status = "";
            try {
                const response = await fetch(`${config.host}/register/`, {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        username,
                        email,
                        password
                    })
                });

                if (!response.ok) {
                    throw new Error('Network response was not ok');
                }

                const data = await response.json();
                console.log(data);
                const token = data.access_token;
                dispatch(login(token));
                status = "success";
            } catch(err) {
                console.log(err);
                status = "error";
            } finally {
                setLoading(false);
                resolve({
                    status
                }) 
            }
        });
    }

    return {
        loading,
        sendRegister
    }
}
