import nav from '../views/nav';
import footer from '../views/footer';
import register from '../views/registerView';

const Register = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
    ${nav()}
    ${register()}
    ${footer()}
`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Register;
