import ReactDOM from 'react-dom';
import React from 'react';
import './Landing.scss'

const Landing = () => {

        return (
            <div className="landing">
                <h1>Landing</h1>
            </div>
        )

}

ReactDOM.render(
    <Landing/>,
    document.getElementById('root')
);

export default Landing