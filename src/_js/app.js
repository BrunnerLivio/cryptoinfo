import 'reset-css/reset.css';
import 'flexboxgrid/dist/flexboxgrid.css';
import '../_scss/2018/main.scss';
import { ready } from './helper';
import { Cryptocurrency } from './cryptocurrency';

ready(() => {
  new Cryptocurrency().onInit();
});