import React from 'react'
import Button from '../globals/button'
import logo from '../../assets/images/logo.svg'

const NavBar = () => {
    React.useEffect(() => {
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
        <header className="nav-container nav animate__animated animate__fadeInDown animate__faster">
            <div className="nav-contents">
                <a href="/unpuzzle-help-centre/">
                    <img className="logo" src={logo} alt="unpuzzle logo" />
                </a>
                <Button>Ask a Question</Button>
            </div>
        </header>
    )
}

export default NavBar;