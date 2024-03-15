import Route from '@ember/routing/route';
import { inject as service } from '@ember/service';

export default class CartRoute extends Route {
    @service store

    async model() {
        let cart = await this.store.findAll('cart');
        let product = await this.store.findAll('product');
        let ids = cart.filter(cart=>cart.productId === product.id);

        // product.forEach(element => {
        //     element.filter((e) => {
        //         e.id === cart.product_id 
        //     })

        //     element.qnt = cart.qnt
        // });
       
            return {
                cart: ids,
                product: product,

            };
        
    }

}
