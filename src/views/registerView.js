const register = () => `
<p class="text-uppercase text-center fs-3 fst-italic fw-bold mt-3 fonttitle"><img src=assets/happyman.png alt="happyman" id="happyman">Build events that everyone will remember of with our company <img src=assets/happyman.png alt="happyman" id="happyman"></p>
<main id="main" class="container mb-2">
  <p class="text-uppercase text-center fs-4 fw-bold fonttitle">WELCOME TO OUR SITE!</p>
  <form class="row g-3">
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Name</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Last Name</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Confirm your Email</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
    <div class="col-md-6">
      <label for="inputPassword4" class="form-label">Confirm your Password</label>
      <input type="password" class="form-control" id="inputPassword4">
    </div>
    <div class="col-12">
      <label for="inputAddress" class="form-label">Address</label>
      <input type="text" class="form-control" id="inputAddress" placeholder="1234 Main St">
    </div>
    <div class="col-md-6">
      <label for="inputEmail4" class="form-label">Phone number</label>
      <input type="email" class="form-control" id="inputEmail4">
    </div>
    </div>
    <fieldset class="row mb-3" id="fieldset">
      <div class="col-sm-10">
        <div class="form-check mt-2">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios1" value="option1" checked>
          <label class="form-check-label"  for="gridRadios1">
            Necessary Cookies Only
          </label>
        </div>
        <div class="form-check">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios2" value="option2">
          <label class="form-check-label" for="gridRadios2">
            All Cookies 
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
          <label class="form-check-label" for="gridRadios3">
          Reject Cookies
          </label>
        </div>
        <div class="form-check disabled">
          <input class="form-check-input" type="radio" name="gridRadios" id="gridRadios3" value="option3">
          <label class="form-check-label" for="gridRadios3">
          Accept newsletters and informations?
          </label>
        </div>
      </div>
    </fieldset>
    <div class="col-12 btn ">
      <button type="submit" class="btn btn-primary mb-3 fs-3 fw-bold" id="buttonregister">Sign up!</button>
    </div>
  </form>
</main>
`;

export default register;
