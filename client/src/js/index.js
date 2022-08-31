import "./form.js";
import "./submit.js";

import { Tooltip, Toast, Popover } from 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import "../css/index.css";

//import Logo from '../images/logo.png';
import Bear from '../images/bear.png';
import Dog from '../images/dog.png';
import Bicycle from '../images/bicycle.png';

window.addEventListener('load', function () {
  //document.getElementById('logo').src = Logo;
  document.getElementById('bearThumbnail').src = Bear;
  document.getElementById('dogThumbnail').src = Dog;
  this.document.getElementById('logo').src = Bicycle;
});