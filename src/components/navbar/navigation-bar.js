import Button from '../button'
import logo from '../../assets/images/logo.svg'

const NavBar = () => {
    return (
        <header className="nav-container">
            <div className="nav-contents">
                <img class="logo" src={logo} alt="" tabIndex={0} onClick={ () => window.location.href = '/' }/>
                <Button>Ask a Question</Button>
            </div>
        </header>
    )
}

export default NavBar;