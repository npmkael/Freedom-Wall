import React from "react";
import Form from "../components/Form";
import Burger from "../components/Burger";
import "../index.css";
import ErrorModal from "../components/ErrorModal";

export default function Login() {
    return (
        <div className="flex w-full h-screen">
            <ErrorModal />
            <div className="w-full flex items-center justify-center lg:w-1/2 py-28">
                <Form type="login" />
            </div>
            <div className="hidden relative lg:flex h-full w-1/2 items-center justify-center bg-gray-200">
                <Burger />
                <div className="w-60 h-60 bg-gradient-to-tr from-blue-500 to-blue-300 rounded-full animate-bounce"></div>
                <div className="w-full h-1/2 absolute bg-white/10 backdrop-blur-lg bottom-0"></div>
            </div>
        </div>
    );
}
