import {LitElement, html, css} from 'lit';

import Fontawesome from 'lit-fontawesome';

class Menu extends LitElement {

    static get styles() {
        return [ Fontawesome ];
     }

    static get properties(){
        return{
            claseNav:{type: String},
            claseClose:{type: String}
        }
    }
    constructor()
    {
        
        super();
        this.claseNav='header__nav';
        this.claseClose='header__bar--close';
    }
    render() {
        return html `
        <link rel="stylesheet" href="components/gft-menu.css">
        <link rel="stylesheet" href="node_modules/lit-fontawesome/css/font.css">
        <header class="header">
        <img src="../assets/image/GFT_Logo_A2_RGB_web1.png" class="header__image" alt="logo de GFT">
        <nav class="${this.claseNav}">
            <img class="${this.claseClose}" src="../assets/image/xmark-solid.svg" alt="icono bar open" @click="${this.cierraMenu}">
            <h2 class="header__title--nav">¡Hola Itzel!</h2>
            <p class="header__email">itzel.segura@gft.com</p>
            <a href="tarjetas.html" class="header__nav--link"><i class="fas fa-credit-card"></i>Mis tarjetas</a>
            <a href="#solicitar" class="header__nav--link"><i class="fas fa-comments"></i>Solicitar tarjetas</a>
            <a href="#cerrar" class="header__nav--link"><i class="fas fa-sign-out-alt"></i>Cerrar sesión</a>
        </nav>

        <img class="header__bar--open" src="../assets/image/bars-solid.svg" alt="icono bar close" @click="${this.abreMenu}">

        <h2 class="header__title">¡Hola Itzel!</h2>
    </header>

    `;
    }
    cierraMenu()
    {
        this.claseNav='header__nav';
        this.claseClose='header__bar--close';
    }
    abreMenu()
    {
        this.claseNav='header__nav open';
        this.claseClose='header__bar--close open';
    }
    
}

customElements.define('gft-menu', Menu);