import React from 'react'
import Button from '../globals/button'
import logo from '../../assets/images/logo.svg'

const NavBar = () => {
    React.useEffect(() => {
        console.log('[navigation-bar: test log]');
        window.addEventListener('scroll', (e) => {
            const nav = document.querySelector('.nav');
            if (window.pageYOffset > 0) {
                nav.classList.add("shadow");
            } else {
                nav.classList.remove("shadow");
            }
        });
    }, []);

    return (
        <header className="nav-container nav">
            <div className="nav-contents">
                <a href="/">
                    <img className="logo" src={logo} alt="unpuzzle logo" tabIndex={0} />
                </a>
                <Button>Ask a Question</Button>
            </div>
        </header>
    )
}

export default NavBar;