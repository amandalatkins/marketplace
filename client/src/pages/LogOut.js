import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useUserContext } from "../utils/UserState";
import API from "../utils/API";
import isLoggedIn from "../utils/isLoggedIn";

function LogIn(props) {

    const [user, setUser] = useUserContext();

    // isLoggedIn.removeLogin();

    useEffect(() => {
        logOutUser();
    }, []);

    function logOutUser() {
        setUser({ type: "logOut" });
        props.history.push('/login');
    }

    

    return null;
}

export default LogIn;