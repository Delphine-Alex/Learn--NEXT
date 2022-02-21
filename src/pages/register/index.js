import React from 'react';

import Button from '../../components/Button';
import Input from '../../components/Input';
import TitlePage from '../../components/TitlePage';

const Index = () => {
    return (
        <div>
            <TitlePage title="Register" />
            <Input type="text" title="Enter your firstname" />
            <Input type="text" title="Enter your lastname" />
            <Input type="mail" title="Enter your email" />
            <Input type="text" title="Enter your password" />
            <Button type="button" title="Submit" />
        </div>
    );
}

export default Index;
