import React from 'react';
import './styles.css';
import Header from './header';
import Container from './container';
import Locais from './locais';
import Footer from './footer';

const Home = () => {
    return(
        <div className="home">
            <Header />
            <Container />
            <Locais />
            <Footer />
        </div>

                
    );
}


export default Home;