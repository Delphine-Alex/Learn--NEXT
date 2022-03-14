import React, { useState } from 'react';

import { useRouter } from 'next/router'

import Button from '../../components/Button';
import Input from '../../components/Input';
import TitlePage from '../../components/TitlePage';

import userService from '../../services/user.service';
import Modal from '../../components/Modal';

const Index = () => {
    const [inputs, setInputs] = useState({});
    const [showModal, setShowModal] = useState(false);
    const router = useRouter();

    const submitRegister = async (e) => {
        // Pour éviter que la page se recharge avec l'envoi du formulaire
        e.preventDefault();
        //console.log(inputs);

        userService.register(inputs)
            .then(
                (data) => {
                    console.log(data);
                    // Si la réponse contient des erreurs, j'affiche mon modal
                    if (data.error) {
                        setShowModal(true);
                    } else {
                        // Sinon mon utilisateur est inscrit
                        localStorage.setItem('jwt', data.jwt)
                        router.push('/profil')
                    }
                }
            )
            // Dans le cas où il y aurait des erreurs de type serveur
            .catch((err) => {
                setShowModal(true);
                console.log(err)
            });
    }

    return (
        <div>
            <TitlePage title="Register" />
            <div className="page__register">
                <Modal title="Erreur" isActive={showModal} type="information"
                    closeFunction={() => setShowModal(!showModal)}
                >
                    <p>Une erreur est survenue, veillez contacter le service client.</p>
                </Modal>

                <form className="form" onSubmit={(e) => submitRegister(e)}>

                    <Input
                        label="Username"
                        name="username"
                        id="username"
                        type="text"
                        classes="form__input"
                        required={true}
                        placeholder="Veuillez saisir votre username"
                        handleChange={(e) => setInputs({ ...inputs, username: e.target.value })}
                    />
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
                    <Button title="Envoyer" classes="btn btn__color-black" type="submit" />

                </form>
            </div>
        </div>
    );
}

export default Index;
