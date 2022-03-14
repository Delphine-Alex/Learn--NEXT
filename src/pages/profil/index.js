import React, { useState, useEffect } from 'react';

import TitlePage from '../../components/TitlePage';

import userService from '../../services/user.service';
import withAuth from '../../HOC/withAuth';

const Index = () => {
    const [profil, setProfil] = useState([])
    console.log(profil)

    useEffect(() => {
        userService.getMe(localStorage.getItem('token'))
            .then((data) => {
                setProfil(data);
                console.log(data);
            })
            .catch(err => console.log(err))
    }, []);

    return (
        <>
            <TitlePage title="Profil" />
            <p>{profil.username}</p>
            <p>{profil.name}</p>
            <p>{profil.email}</p>
        </>
    );
}

export default withAuth(Index);
