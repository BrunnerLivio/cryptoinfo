import request from 'browser-request';
import numeral from 'numeral';

export class Cryptocurrency {
    onInit() {
        this.elements = document.querySelectorAll('.crypto-price');
        this.elements.forEach(element => this.getPrice(element));
    }
    getPrice(element) {
      const currency = element.getAttribute('data-currency').toUpperCase();
      request(`https://coincap.io/page/${currency}`, (err, response, body) => {
        const result = JSON.parse(body);
        element.innerHTML = 
`
<span>${numeral(result.price_usd).format('0,0[.]00')}</span><span class="weaken">$</span>
`
      })
    }
}