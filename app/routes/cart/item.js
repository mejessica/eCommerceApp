import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'
import { hash } from 'rsvp';

export default class CartItemRoute extends Route {
    @service store

   async model(param) {

    return hash({
        cart: this.store.findAll('cart'),
        products: this.store.findAll('product'),
        
    }).then(({ cart, products }) => {
        let cartAlvo = cart.filter((cartItem) => {
            return cartItem.id == param.id
        })

        cartAlvo = cartAlvo[0]
        
        let final = products.filter((prod) => {
            return prod.id == cartAlvo.productId
        })

        cartAlvo.productCart = final[0]

        return cartAlvo
    });        
    }
    
}