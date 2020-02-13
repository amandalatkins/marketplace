import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../utils/UserState";
import API from "../utils/API";
import isLoggedIn from "../utils/isLoggedIn";

function LogIn(props) {

    const [user, setUser] = useUserContext();

    if (user.isLoggedIn) {
        props.history.push('/');
    }

    const [formState,setFormState] = useState({});
    const [message, setMessage] = useState({ type: "", message: ""});

    function handleLogin(e) {
        e.preventDefault();
        API.userLogin(formState)
        .then(results => {
            setMessage({ ...message, type: "success", message: "Success! You've been registered. Redirecting you now..." });
            isLoggedIn.storeLogin({ 
                id: results.data.user._id,
                email: results.data.user._id
            },
            results.data.token);

            setUser({
                type: "logIn",
                user: {
                    id: results.data.user._id,
                    email: results.data.user._id
                },
                token: results.data.token
            });

            props.history.push('/');
        })
        .catch(err => console.log(err));
    }

    function handleRegister(e) {
        e.preventDefault();
        API.userRegister(formState)
        .then(_ => { 
            setMessage({ ...message, type: "success", message: "Success! You've been registered. Redirecting you now..." });
        })
        .catch(_ => {
            setMessage({ type: "danger", message: "Couldn't register you :(" });
        });
    }

    function handleChange(e) {
        const { name, value } = e.target;
        setFormState({ ...formState, [name]: value });
    }

    return (
        <div className="container py-5">
            <div className="row">
                <div className="col-xs-12 col-lg-3">&nbsp;</div>
                <div className="col-xs-12 col-lg-6">

                    {message.type !== "" ? <div className={`alert alert-${message.type}`} role="alert">{message.message}</div> : ""}

                    <form>
                        <div className="form-group">
                            <input type="email" placeholder="Email" name="email" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="form-group">
                            <input type="password" placeholder="Password" name="password" className="form-control" onChange={handleChange}/>
                        </div>
                        <div className="form-group text-center">
                            <button className="btn btn-secondary mr-3" onClick={handleLogin}>Login</button>
                            <button className="btn btn-success" onClick={handleRegister}>Register</button>
                        </div>
                    </form>
                </div>
                <div className="col-xs-12 col-lg-3">&nbsp;</div>
            </div>
        </div>
    );
}

export default LogIn;