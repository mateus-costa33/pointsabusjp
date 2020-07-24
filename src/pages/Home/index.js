import React from 'react';
import './styles.css';
import Header from './header';
import Container from './container';
import Locais from './locais';

const Home = () => {
    return(
        <div className="home">
            <Header />
            <Container />
            <Locais />
        </div>

                
    );
}


export default Home;