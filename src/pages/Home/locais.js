import React from 'react';
import './styles.css';


const Locais = () => {
    return(
    <div className="locais">
        <h4 className="title-locais">Nossos Pontos!</h4>
        <div className="container">
            <div className="card bg-dark maph text-white">
                <img className="card-img" src="https://roteiro-geoturistico-jp--ssantinho.repl.co/media/aereo.jpg" alt="Card image" />
                <div className="card-img-overlay">
                    <h5 className="card-title">Igreja São Francisco</h5>
                    <p className="card-text">Os ônibus adequados para chegar neste local: todos que vão para o Parque Solon de Lucena, a Lagoa. Quando chegar lá utilize o Google Maps para chegar no local mais rápido.</p>
                    <a href="https://www.google.com.br/maps/place/Centro+Cultural+S%C3%A3o+Francisco/@-7.1149074,-34.8855109,17z/data=!3m1!4b1!4m5!3m4!1s0x7acdd49465ec499:0xf01081ffe9350fa8!8m2!3d-7.1149127!4d-34.8833222"><p className="card-text linkmaph">Acesse aqui para ver a localização!</p></a>
                </div>
            </div>
        </div>
    </div>

    );
}


export default Locais;