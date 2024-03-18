import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class CartRoute extends Route {
    @service store
        model(param) {
          return hash({
            cart: this.store.findAll('cart'),
            products: this.store.findAll('product'),
          }).then(({ cart, products }) => {
            return cart.map(cartItem => {
              let relatedProduct = products[cartItem.productId];
              return { cartItem, relatedProduct };
            });
          });
        }
      };
