import 'reset-css/reset.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import '../_scss/2018/main.scss';
import 'simple-jekyll-search/dest/simple-jekyll-search';

import { Cryptocurrency } from './cryptocurrency';
import { ready } from './helper';

ready(() => {
  new Cryptocurrency().onInit();
  window.SimpleJekyllSearch({
    searchInput: document.getElementById('search-input'),
    resultsContainer: document.getElementById('results-container'),
    json: '/search.json'
  })
});