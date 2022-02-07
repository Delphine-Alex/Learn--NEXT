import React from 'react';

import Header from '../components/Header';
import Footer from '../components/Footer';

const Mainlayout = ({ children }) => {

    return (
        <div>
            <header>
                <Header title="Tsuki" />
            </header>
            <main>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    );
}

export default Mainlayout;
