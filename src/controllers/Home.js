import nav from '../views/nav';
import footer from '../views/footer';
import gather from '../assets/gather.png';

const Home = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return (`
      <div class="container">
        <div class="row">
          <div class="col-12">${nav()}</div>
          <p class="text-uppercase text-center fs-3 fst-italic fw-bold mt-5 mb-5 fonttitle">Welcome to our homepage!</p>
          <main id="mainhome" class="container mb-2 shadow-sm">
            <div class="row col-12">
              <div class="col-6">
              <img src="${gather()}" alt="Logo" id="peopletwo"> </div>
              <div class="col-6">
                <div class="card bg-black" style="width: 30rem;" id="homecard">
                  <div class="card-body">
                    <h5 class="card-title text-light fw-bold fonttitle"><u>Vous souhaitez créer un événément mémorable?</u></h5></br>
                    <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                    <p class="card-text text-light fontbass"><em>En plusieurs étapes, choisissez un template à votre convenance en fonction de l'évenemnt quevous souhaitez organiser.</em> </p>
                  </div>
                  <div class="card bg-black" style="width: 30rem;" id="homecard">
                    <div class="card-body">
                      <h5 class="card-title text-light fw-bold fonttitle"><u>Inscrivez vous et organisez autant d'évenements que vous voulez!</u></h5><br>
                      <h6 class="card-subtitle mb-2 text-body-secondary"></h6>
                      <p class="card-text text-light fontbass"><em>C'est un site accessible et performant qui vous permettra de créer vos évenements sans difficultés! Choisissez nous, pour une expérience inoubliable.
                        Nous vous assurons une pleine et entière satisfaction sur le bon déroulement de vos évements. 
                        De plus vous pouvez nous contacter via notre page de contactes pour plus d'informations. 
                      </em></p></br>
                      <button type="button" class="btn btn-success">SIGN IN</button>
                      <button type="button" class="btn btn-success">SIGN UP</button>
                  </div>
                </div>
          <div class="col-12">${footer()}</div>
        </div>
    </div>`);
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
