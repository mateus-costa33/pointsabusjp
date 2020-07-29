import React, { Component } from 'react';
import logo from '../../assets/logo-nova.png';
import './styles.css';



class Container extends Component{
    render(){
        return(
            <div className="container mask">
                <div className="text-center">
                    <img src={logo} className="logo-nova" />
                </div>
                <h2 className="text-center title">Olá, segue os pontos do Roteiro Geoturistico do Centro Histórico de João Pessoa!</h2>
            </div>
        )
    }
}


export default Container;