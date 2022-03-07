import React, { useState } from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TitlePage from '../../components/TitlePage';

import userService from '../../services/user.service';

const Index = () => {
    const [inputs, setInputs] = useState({});

    const submitRegister = async (e) => {
        e.preventDefault();
        console.log(inputs);
        userService.register(inputs).then(data => console.log(data)).catch(err => console.log(err));
    }

    return (
        <div>
            <TitlePage title="Login" />
            <div className="page__register">
                <form className="form" onSubmit={(e) => submitRegister(e)}>
                    <Input
                        label="Username"
                        name="username"
                        id="username"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre login"
                        handleChange={(e) => setInputs({ ...inputs, fusername: e.target.value })}
                    />
                    <Input
                        label="Password"
                        name="password"
                        id="password"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre mot de passe"
                        handleChange={(e) => setInputs({ ...inputs, firstname: e.target.value })}
                    />
                    <Button title="Envoyer" classes="btn btn__color-black" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Index;
