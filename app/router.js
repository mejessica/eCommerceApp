import EmberRouter from '@ember/routing/router';
import config from 'e-commerce-app/config/environment';

export default class Router extends EmberRouter {
  location = config.locationType;
  rootURL = config.rootURL;
}

Router.map(function () {
  this.route('index',{path:'/'});
  this.route('cart');
  
  this.route('admin', function () {
    this.route('add');
    this.route('edit', { path: '/edit/:id' });
  });

  this.route('category', { path: '/category/:id' }, function () {
    this.route('item', { path: 'item/:itemkey' });
  });

  this.route('not-found', { path: '/*path' });
  this.route('practice');
});
