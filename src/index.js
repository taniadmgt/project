import Router from './Router';
import Home from './controllers/Home';
import Login from './controllers/Login';
import Register from './controllers/Register';
import Eventcreate from './controllers/Eventcreate';

import './index.scss';

const routes = [{
  url: '/',
  controller: Home
},
{
  url: '/login',
  controller: Login
},
{
  url: '/register',
  controller: Register
},
{
  url: '/eventcreate',
  controller: Eventcreate
}
];

new Router(routes);
