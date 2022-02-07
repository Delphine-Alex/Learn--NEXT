import React from 'react';

const TitlePage = (props) => {
    return (
        <div className='title_page'>
            <h1>
                {props.title}
            </h1>
        </div>
    );
}

export default TitlePage;
