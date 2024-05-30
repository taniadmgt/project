import nav from '../views/nav';
import footer from '../views/footer';
import home from '../views/homeView';

const Home = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
    ${nav()}
    ${home()}
    ${footer()}
`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Home;
