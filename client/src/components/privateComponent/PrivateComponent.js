import React, { useEffect, useState } from 'react'
import { Routes, Route, useNavigate } from 'react-router-dom';
import axios from 'axios';
import Cookies from 'js-cookie';
import FromData from 'form-data';

import ClientLists from '../../pages/clientLists/ClientLists';
import ProjectDocumentation from '../../pages/ProjectDocumentation/ProjectDocumentation';
import Register from '../../pages/login_register/Register';
import Login from '../../pages/login_register/Login';


export default function PrivateComponent({ isLogin, setIsLogin }) {
    const navigate = useNavigate();

    useEffect(() => {
        check_Auth_Token();
    }, []);

    const check_Auth_Token = async () => {
        const token = Cookies.get("auth_token");
        if (token) {
            let fromData = new FromData();
            fromData.append("token", token);
            const result = await axios.post("http://localhost:5000/getToken", fromData,);
            if (result.data.message) {
                setIsLogin(true);
                navigate('/');
            } else {
                Cookies.remove("auth_token");
                setIsLogin(false);
                navigate('/register');
            }
        } else {
            setIsLogin(false);
            navigate('/register');
        }
    }



    return (
        <Routes>
            {
                isLogin ?
                    <>
                        <Route path='/' element={<ProjectDocumentation />} />
                        <Route path='/clientLists' element={<ClientLists />} />
                    </>
                    :
                    <>
                        <Route path='/login' element={<Login setIsLogin={setIsLogin} />} />
                        <Route path='/register' element={<Register />} />
                    </>
            }
        </Routes>
    )

}
