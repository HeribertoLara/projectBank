import { LitElement, html } from "lit";

class Card extends LitElement{

    constructor(){
        super()
    }
    static get properties(){
        return{
            data:{type:Array},
            info:{type:Array}
        }
    }
    mostrar(){
        console.log('hiciste click')
    }
    render() {
        return html `
            <section class="main__target main__target--${ this.info.name=="Tarjeta Premium"
                    ?'premium':this.info.name=='Tarjeta gold'
                    ?'oro'
                    :'black'
                }"
                id="${
                    this.info.name=="Tarjeta Premium"
                    ?'premium':this.info.name=='Tarjeta gold'
                    ?'oro'
                    :'black'
                }">

                <div class="target-p1">
                    <h2>GFT ${
                        this.info.name=="Tarjeta Premium"
                        ?'Premium':this.info.name=='Tarjeta gold'
                        ?'Oro'
                        :'Black' }
                        </h2>
                    <p>${this.info.type=='TDC'? 'Tarjeta de credito':'Tarjeta de debito'}</p>
                </div>

                <p class="target-p2">9999 9999 9999 </p>

                <div class="target-p3">
                    <h2>Itzel Ventura </h2>
                    <p><small>Vencimiento</small> 08/27</p>
                </div>

                <img src="./assets/image/visa.png" alt="Logo Visa" />
            </section>

        <link rel="stylesheet" href="./components/card/card.css">
    `;
    }

}
customElements.define('gft-card', Card)