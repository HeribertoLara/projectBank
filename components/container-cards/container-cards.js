import { html, LitElement } from "lit";
import '../card/card'

class Container extends LitElement{
    static get properties(){
        return {
            info:{type: Array}
        }
    }
    constructor(){
        super()
        this.info = []
        this.resData()
/* hacer una validadcion  algo */
        this.data=[
            {name:'Itzel segura', type:'tarjeta de', number:'4083 4212 7630 3421', calidad:'premium', vencimiento: '08/27'},
            {name:'Itzel segura', type:'targeta de debito', number:'4083 4212 7630 3421', calidad:'oro', vencimiento: '08/27'},
            {name:'Itzel segura', type:'targeta de debito', number:'4083 4212 7630 3421', calidad:'black', vencimiento: '08/27'}
        ]
        
    }
         
    resData () {
                fetch("https://api-bank-gft-trainees-mx.herokuapp.com/api/accounts",{
                    method:'get',
                    headers: {
                        'Content-Type':'application/json',
                        'x-access-token':'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxYWU2OWQ2ZGIwOGI2MDAxNjBjNmFkNSIsImVtYWlsIjoib3NjYXIub3J0aXozQGdmdC5jb20iLCJmaXJzdG5hbWUiOiJPc2NhcjIiLCJsYXN0bmFtZSI6Ik9ydGl6MiIsImlhdCI6MTY2NjgyNTc0OSwiZXhwIjoxNjY4MTIxNzQ5fQ.A2zzDaiPDK5LD6Npwt1mh38mkLaRFe-Wk5hTtb_XKRA'
                    }
                })
                .then(cards =>cards.json())
                .then(filterCards=>{
                        let hash = {}
                        this.info = filterCards.response.filter(card =>  hash[card.name]? false : hash[card.name] = true && card.name == "Tarjeta Premium" || card.name == "Tarjeta gold" || card.name == "Tarjeta Black") 
                }) 
                return this.info
            }
         
        render(){
            return this.info.length == 0
            ? html`<p>cargando</p>`
            : html `<div class="main__targets" >
                ${
                    this.info.map((card)=>
                    html`
                        <gft-card   index="${card._id}" .info="${card}"></gft-card>
                    `
                )
            }
                <section class="main__target main__target--add">
                    <a href="#">+</a>
                    <h2>Solicitar nueva tarjeta</h2>
                </section>

            </div>
            <link rel="stylesheet" href="./components/container-cards/container.css">
            ` 

            /* return html`<gft-card></gft-card>` */
    }
/* renderizar cada card en el container poner un loading  mientrtas el array tiene un length igual a 0
*/
}
customElements.define("gft-container", Container);