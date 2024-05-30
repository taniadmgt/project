const eventcreate = () => `
<p class="text-uppercase text-center fs-2 fst-italic fw-bold mt-3 fonttitle">Créez votre Event comme vous le souhaitez!</p>
<main>
<div class="container">
  <form class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Choisissez le nom que vous voulez lui attribuez : </label>
      <input type="email" class="form-control" id="inputEmail4">
      <label for="inputAddress2" class="form-label">Description :</label>
      <input type="text" class="form-control" id="inputCity">
    </div>
    <div class="col-md-6">
      <label for="datetime" class="form-label">Date : </label>
      <input type="datetime" class="form-control" id="date">
    <div class="col-12">
      <label for="hour" class="form-label">Heure : </label>
      <input type="Hour" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="col-12">
      <label for="inputAddress2" class="form-label">Lieu : </label>
      <input type="text" class="form-control" id="inputAddress2">
    </div>
    </div>
  </form>
  <button type="button" class="btn btn-primary mt-2 mt-5 mb-5">CRÉER L'ÉVÉNEMENT SANS ATTENDRE</button>
  <p class="fw-bold fs-4 mb-3 fonttitle"><u>AJOUTER DES SPÉCIFICATIONS :</u></p>
  <div class="col-md-6">
    <label for="datetime" class="form-label fw-bold fs-5">Prix : </label>
    <input type="datetime" class="form-control" id="date">
  </div>
  <p for="datetime" class="form-label mt-4 fw-bold fs-5">Invités spécifiques : </p>
<div class="d-flex gap-2">
      <div class="card col mb-3 mb-sm-0">
        <h6 class="card-header">Entrer les informations du participant : </h6>
        <div class="card-body">
          <label for="datetime" class="form-label">Name : </label>
          <input type="datetime" class="form-control" id="date">
          <label for="datetime" class="form-label">Last Name : </label>
          <input type="datetime" class="form-control" id="date">
          <label for="datetime" class="form-label">Email: </label>
          <input type="mail" class="form-control" id="email">
          <a href="#" class="btn btn-primary mt-3 ">Envoyer une invitation par mail</a>
        </div>
      </div>

      <div class="card col mb-3 mb-sm-0">
        <h6 class="card-header">Entrer les informations du participant : </h6>
        <div class="card-body">
          <label for="datetime" class="form-label">Name : </label>
          <input type="datetime" class="form-control" id="date">
          <label for="datetime" class="form-label">Last Name : </label>
          <input type="datetime" class="form-control" id="date">
          <label for="datetime" class="form-label">Email: </label>
          <input type="mail" class="form-control" id="email">
          <a href="#" class="btn btn-primary mt-3 ">Envoyer une invitation par mail</a>
        </div>
      </div>
      <div class="card col mb-3 mb-sm-0">
        <h6 class="card-header">Entrer les informations du participant : </h6>
        <div class="card-body">
          <label for="datetime" class="form-label">Name : </label>
          <input type="datetime" class="form-control" id="date">
          <label for="datetime" class="form-label">Last Name : </label>
          <input type="datetime" class="form-control" id="date">
          <label for="datetime" class="form-label">Email: </label>
          <input type="mail" class="form-control" id="email">
          <a href="#" class="btn btn-primary mt-3 ">Envoyer une invitation par mail</a>
        </div>
      </div>
</div>`;

export default eventcreate;
