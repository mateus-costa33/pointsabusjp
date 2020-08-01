import React from 'react';  
import { IconContext } from 'react-icons';
import { FaBusAlt } from 'react-icons/fa';


import Container from './container';
import Locais from './locais';
import Footer from './footer';



const Header = () => {
    const [darkMode, setDarkMode] = React.useState(getInitialMode());
    
    React.useEffect(() => {
        localStorage.setItem("dark", JSON.stringify(darkMode));
    }, [darkMode]);

    function getInitialMode() {
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        return savedMode || false;
    }

    return(
        <div className={darkMode ? "dark-mode" : "light-mode"}>
            <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
            <a className="navbar-brand">
                <IconContext.Provider value={{ className: "icon" }}>
                        <div>
                            <FaBusAlt />
                        </div>
                </IconContext.Provider>            
            </a>
            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    <ul className="navbar-nav">
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Locais de Interesse</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Nosso Intinerário</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="#">Pegue um Busão!</a>
                    </li>
                    <li className="nav-item active">
                         <button className="btn text-right" onClick={() => setDarkMode(prevMode => !prevMode)}>Toogle Navigation</button>

                    </li>
                    </ul>
                </div>
            </nav>
        <Container />
        <Locais />
        <Footer />
        </div>
    );
}

export default Header;