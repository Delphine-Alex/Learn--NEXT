import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TitlePage from '../../components/TitlePage';

const Index = () => {
    const [inputs, setInputs] = useState({});

    const submitRegister = (e) => {
        e.preventDefault();
        console.log(inputs)
    }

    return (
        <div>
            <TitlePage title="Register" />
            <div className="page__register">
                <form className="form" onSubmit={(e) => submitRegister(e)}>
                    <Input
                        label="Prénom"
                        name="firstname"
                        id="firstname"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre prénom"
                        handleChange={(e) => setInputs({ ...inputs, firstname: e.target.value })}
                    />
                    <Input
                        label="Nom"
                        name="lastame"
                        id="lastname"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre nom de famille"
                        handleChange={(e) => setInputs({ ...inputs, lastname: e.target.value })}
                    />
                    <Input
                        label="Email"
                        name="email"
                        id="email"
                        type="email"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre e-mail"
                        handleChange={(e) => setInputs({ ...inputs, email: e.target.value })}
                    />
                    <Input
                        label="Password"
                        name="pasword"
                        id="password"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre mot de passe"
                        handleChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                    <Button title="envoyer" classes="btn btn__color-black" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Index;
