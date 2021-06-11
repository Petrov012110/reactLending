import ReactDOM from 'react-dom';
import React from 'react';
import Landing from '../../containers/Landing/Landing'
import './Layout.scss'

function Layout() {

    return (
        <div>
            <main>
                <Landing />
            </main>
        </div>
    )
}

ReactDOM.render(
    <Layout />,
    document.getElementById('root')
)

export default Layout