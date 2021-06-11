import ReactDOM from 'react-dom';
import React from 'react';
import './Landing.scss'
import Header from '../../components/Header/Header';
import Introduction from '../../components/Introduction/Introduction';

const Landing = () => {

    return (
        <div className="landing">
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;500;700&display=swap" rel="stylesheet"></link>
            <Header/>
        </div>
    )

}

ReactDOM.render(
    <Landing />,
    document.getElementById('root')
);

export default Landing