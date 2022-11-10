import { html, LitElement } from "lit";
import '../container-cards/container-cards'

class Main extends LitElement{
    constructor(){
        super()
    }

    render(){
        return html`
            <main class="main">
                <article>
                    <h2 class="main__title">Mis tarjetas</h2>
                    
                        <gft-container></gft-container>
                        
                  
                    <a class="button" href="/tarjetas.html">¡Quiero mi tarjeta!</a>
                </article>
        
        </main>
    <!-- <link rel="stylesheet" href="./components/main/main.css"> -->
        
        `
    }
}
customElements.define('gft-main', Main)