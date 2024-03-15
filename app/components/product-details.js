import Component from '@glimmer/component';
import { action, set } from '@ember/object'
import { inject as service } from '@ember/service'

export default class ProductDetails extends Component {
    @service store
    @service router
    qnt = 0

    @action
    setInput(tipo, e) {
        set(this, tipo, e.target.value)
    }

    @action
    addProduct() {
        console.log(this.args.model)
        console.log(this.args.model.id)
        

        let newItemCart = this.store.createRecord('cart', {
            productId: this.args.model.id,
            qnt: this.qnt
        })

        newItemCart.save();
        
        return this.router.transitionTo('cart')
        
        // alert('Product Added');

        // return this.router.transitionTo('cart')

        // let productTitle = this.productTitle;
        // let desc = this.desc;
        // let price = this.price;
        // let e = document.getElementById('category');
        // let category = e.options[e.selectedIndex].value;
        // let imglink = this.imglink;
    
    
        // let newProduct = this.store.createRecord('product', {
        //   productTitle: productTitle,
        //   desc: desc,
        //   price: price,
        //   category_id: category,
        //   imglink: imglink,
        // });
    
        // newProduct.save();
    
      }
    
}