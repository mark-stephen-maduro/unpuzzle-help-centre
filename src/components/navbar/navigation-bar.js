import React from 'react'
import Button from '../globals/button'
import logo from '../../assets/images/logo.svg'

const NavBar = () => {
    React.useEffect(() => {
        console.log('[navigation-bar: test log]');
    }, []);

    return (
        <header className="nav-container container">
            <div className="nav-contents">
                <img className="logo" src={logo} alt="unpuzzle logo" tabIndex={0} onClick={ () => window.location.href = '/' }/>
                <Button>Ask a Question</Button>
            </div>
        </header>
    )
}

export default NavBar;