import React from 'react';

const Index = () => {
    return (
        <div>
            <form encType="multipart/form-data" method="post" autoComplete="off">
                <p>Name:</p>
                <input placeholder="Enter a name" />
                <p>Password:</p>
                <input placeholder="Enter a password" />
            </form>
        </div>
    );
}

export default Index;
