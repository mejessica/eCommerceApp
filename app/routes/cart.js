import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';
import { hash } from 'rsvp';

export default class CartRoute extends Route {
    @service store

    async model() {

        return hash({
            cart: this.store.findAll('cart'),
            products: this.store.findAll('product'),
            
        }).then(({ cart, products }) => {
            
            cart.map((cartItem) => {
                let productForCart = products.filter((prod) => {
                    return prod.id == cartItem.productId
                })

                cartItem.productCart = productForCart[0]
            })

            return cart

        });
    }
};
