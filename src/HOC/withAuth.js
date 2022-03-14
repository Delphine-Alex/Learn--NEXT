import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';

const withAuth = (WrappedComponent) => {

    return (props) => {
        const Router = useRouter();
        const [authVerified, setAuthVarified] = useState(false);

        useEffect(() => {
            const token = localStorage.getItem('token');
            if (!token) {
                Router.push('/login')
            }
            else {
                setAuthVarified(true)
            }
        }, [Router]);

        if (authVerified) {
            return <WrappedComponent {...props} />
        }
    }
}

export default withAuth;
