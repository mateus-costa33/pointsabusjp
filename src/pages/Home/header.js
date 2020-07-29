import React from 'react';
import { FaBusAlt } from "react-icons/fa";


const Header = () => {
    return(
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <FaBusAlt className="icon" />
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav">
                        <li className="nav-item active">
                            <a className="nav-link" href="/">Locais de Interesse</a>
                        </li>
                        <li className="nav-item active">
                            <a className="nav-link" href="/Pointsbus">Nosso Intinerário</a>
                        </li>
                        <li className="nav-item active">
                        <a className="nav-link" href="https://www.jampabus.com.br">Pegue um Busão!</a>
                        </li>
                        </ul>
                    </div>
        </nav> 
    );
}

export default Header;