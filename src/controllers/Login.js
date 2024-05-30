import nav from '../views/nav';
import footer from '../views/footer';
import login from '../views/loginView';

const Login = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
    ${nav()}
    ${login()}
    ${footer()}
`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Login;
