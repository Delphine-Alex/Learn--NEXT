import React, { useState } from 'react';

import { useRouter } from 'next/router'

import Button from '../../components/Button';
import Input from '../../components/Input';
import TitlePage from '../../components/TitlePage';

import Modal from '../../components/Modal';
import userService from '../../services/user.service';

const Index = () => {
    const [inputs, setInputs] = useState({});
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const submitLogin = (e) => {
        e.preventDefault();
        console.log(inputs);
        userService.login(inputs)
            .then((data) => {
                console.log(data)
                if (data.error) {
                    setShowModal(true);
                } else {
                    // Sinon mon utilisateur est inscrit
                    //localStorage.setItem('jwt', data.jwt)
                    localStorage.setItem('token', data.jwt)
                    router.push('/profil')
                }
            })
            .catch((err) => {
                setShowModal(true);
                console.log(err)
            });
    }

    return (
        <div>
            <TitlePage title="Login" />
            <div className="page__register">
                <Modal title="Erreur" isActive={showModal} type="information"
                    closeFunction={() => setShowModal(!showModal)}
                >
                    <p>Veuillez resaisir votre mot de passe ou votre username.</p>
                </Modal>
                <form className="form" onSubmit={(e) => submitLogin(e)}>
                    <Input
                        label="Email"
                        name="email"
                        id="email"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre email"
                        handleChange={(e) => setInputs({ ...inputs, identifier: e.target.value })}
                    />
                    <Input
                        label="Password"
                        name="password"
                        id="password"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre mot de passe"
                        handleChange={(e) => setInputs({ ...inputs, password: e.target.value })}
                    />
                    <Button title="Envoyer" classes="btn btn__color-black" type="submit" />
                </form>
            </div>
        </div>
    );
}

export default Index;
