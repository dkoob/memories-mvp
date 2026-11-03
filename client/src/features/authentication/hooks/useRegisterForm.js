import {useEffect, useState} from "react";
import { register } from "../services/authServices.js";

const USER_REGEX = /^[A-z][A-z0-9-_]{3,23}$/;
const PWD_REGEX = /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%]).{8,24}$/;
const EMAIL_REGEX = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export default function useRegisterForm() {
    const [username, setUsername] = useState("");
    const [validUsername, setValidUsername] = useState(false);
    const [userFocus, setUserFocus] = useState(false);

    const [password, setPassword] = useState("");
    const [validPassword, setValidPassword] = useState(false);
    const [passwordFocus, setPasswordFocus] = useState(false);

    const [matchPassword, setMatchPassword] = useState("");
    const [validMatch, setValidMatch] = useState(false);
    const [matchFocus, setMatchFocus] = useState(false);

    const [errorMessage, setErrorMessage] = useState('');
    const [success, setSuccess] = useState(false);

    const [email, setEmail] = useState("");
    const [validEmail, setValidEmail] = useState(false);
    const [emailFocus, setEmailFocus] = useState(false);

    const [showPassword, setShowPassword] = useState(false);
    const [showMatch, setShowMatch] = useState(false);

    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");

    const [displaySecondPage, setDisplaySecondPage] = useState(false);

    useEffect(() => {
        setValidUsername(USER_REGEX.test(username));
    }, [username])

    useEffect(() => {
        setValidPassword(PWD_REGEX.test(password));
        setValidMatch(password === matchPassword);
    }, [password, matchPassword]);

    useEffect(() => {
        setValidEmail(EMAIL_REGEX.test(email));
    }, [email])

    useEffect(() => {
        setErrorMessage('');
    }, [username, password, matchPassword]);

    const handleRegister = async (e) => {
        e.preventDefault();

        const user = USER_REGEX.test(username);
        const pass = PWD_REGEX.test(password);

        if (!user || !pass) {
            setErrorMessage('Invalid Entry');
            return;
        }

        try {
            await register({
                firstName,
                lastName,
                username,
                email,
                password
            });

            setSuccess(true);

            setUsername('');
            setPassword('');
            setMatchPassword('');
            setEmail('');
            setFirstName('');
            setLastName('');

            setErrorMessage('');
        } catch (err) {
            if (!err?.response) {
                setErrorMessage('No Server Response');
            } else if (err.response?.status === 409) {
                switch (err.response?.data?.error) {
                    case "USERNAME_TAKEN":
                        setErrorMessage('Username Taken');
                        break;

                    case "EMAIL_TAKEN":
                        setErrorMessage('An account with that email already exists');
                        break;

                    default:
                        setErrorMessage("Registration Failed");
                }
            } else {
                setErrorMessage('Registration Failed');
            }
        }
    }

    return {
        username,
        setUsername,
        validUsername,
        userFocus,
        setUserFocus,

        password,
        setPassword,
        validPassword,
        passwordFocus,
        setPasswordFocus,

        matchPassword,
        setMatchPassword,
        validMatch,
        matchFocus,
        setMatchFocus,

        errorMessage,
        success,

        email,
        setEmail,
        validEmail,
        emailFocus,
        setEmailFocus,

        showPassword,
        setShowPassword,
        showMatch,
        setShowMatch,

        firstName,
        setFirstName,
        lastName,
        setLastName,

        displaySecondPage,
        setDisplaySecondPage,
    }
}