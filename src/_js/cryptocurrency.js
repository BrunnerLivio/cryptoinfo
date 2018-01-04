import numeral from 'numeral';
import request from 'browser-request';

export class Cryptocurrency {
    constructor() {
        this.data = {};
    }
    onInit() {
        document.querySelectorAll('.crypto-price').forEach(element => this.getPrice(element));
        document.querySelectorAll('.crypto-change').forEach(element => this.getChange(element));
    }
    loadData(shortForm) {
        return new Promise((resolve, reject) => {
            if (!this.data[shortForm]) {
                request(`https://coincap.io/page/${shortForm}`, (err, response, body) => {
                    this.data[shortForm] = JSON.parse(body);
                    resolve(this.data[shortForm]);
                })
            } else {
                resolve(this.data[shortForm]);
            }
        });
    }
    getPrice(element) {
        const currency = element.getAttribute('data-currency').toUpperCase();
        this.loadData(currency)
            .then(result => {
                element.innerHTML =
`
<span>${numeral(result.price_usd).format('0,0[.]00')}</span><span class="weaken"> $</span>
`
            });
    }
    
    getChange(element) {
        const currency = element.getAttribute('data-currency').toUpperCase();
        this.loadData(currency)
            .then(result => {
                element.innerHTML =
`
<span>${numeral(result.cap24hrChange).format('0[.]00')}</span><span class="weaken"> %</span>
`
            });
    }
}