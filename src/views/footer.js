import facebook from '../assets/facebook.png';
import instagram from '../assets/instagram.png';
import twitter from '../assets/twitter.png';
import whatsapp from '../assets/whatsapp.png';

const footer = () => `
<footer class="mt-5">
<div class="card text-center">
<div class="card-header"> 
EVENT MAKER COMPANY
</div>
  <div class="card-body">
    <h5 class="card-title"></h5>
    <p class="card-text m-1">@Company-SA 2015</p>
    <img src="${facebook}" alt="Facebook" id="socialnetwork">
    <img src="${instagram}" alt="Twitter" id="socialnetwork">
    <img src="${twitter}" alt="Instagram" id="socialnetwork">
    <img src="${whatsapp}" alt="Whatsapp" id="socialnetwork">
  </div>
  <div class="card-footer text-body-secondary">
    Created by Leonardo in Vinci for the sake of people who wants to gather and make associations
  </div>
</div>
</footer
`;

export default footer;
