import nav from '../views/nav';
import footer from '../views/footer';
import eventcreateView from '../views/eventcreateView';

const Eventcreate = class {
  constructor() {
    this.el = document.querySelector('#root');
    this.run();
  }

  render() {
    return `
    ${nav()}
    ${eventcreateView()}
    ${footer()}
`;
  }

  run() {
    this.el.innerHTML = this.render();
  }
};

export default Eventcreate;
