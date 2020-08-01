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
        const isReturnuser = "dark" in localStorage;
        const savedMode = JSON.parse(localStorage.getItem("dark"));
        const usePrefersDark = getPreferedMode();
        if(isReturnuser){
            return savedMode;
        } else if (usePrefersDark){
            return true
        } else{
            return false;
        }
        return savedMode || false;
    }

    function getPreferedMode() {
        if(!window.matchMedia) return;

        return window.matchMedia("(prefers-color-scheme: dark)").matches;
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
                        <a className="nav-link" href="/">Locais de Interesse</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="/Pointsabus">Nosso Intinerário</a>
                    </li>
                    <li className="nav-item active">
                        <a className="nav-link" href="http://www.jampabus.com.br">Pegue um Busão!</a>
                    </li>
                    <li className="nav-item direction">
                        <span style={{color: darkMode ? "#919190" : "#fcff45" , fontSize: 23, paddingRight: 5, fontWeight: "bold"}}>&#9788;</span>
                    <label className="switch">
                    <input
                        checked={darkMode}
                        onChange={() => setDarkMode(prevMode => !prevMode)}
                        type="checkbox"
                        className="checkbox"
                        id="checkbox"
                    />
                        <span className="slider round"></span>
                    </label>
                    <span style={{color: darkMode ? "#3d00c9" : "#919190" , fontSize: 25, paddingLeft: 6, paddingTop:15, fontWeight: "bold"}}>&#9790;</span>
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