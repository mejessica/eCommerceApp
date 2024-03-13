import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';
import { tracked } from '@glimmer/tracking'

export default class AdminAddController extends Controller {
  @service store;
  
  @tracked desc
  @tracked productTitle
  @tracked price
  @tracked category
  @tracked imglink

  @action
  addProduct() {
    let productTitle = this.productTitle;
    let desc = this.desc;
    let price = this.price;
    let e = document.getElementById('category');
    let category = e.options[e.selectedIndex].value;
    let imglink = this.imglink;


    let newProduct = this.store.createRecord('product', {
      productTitle: productTitle,
      desc: desc,
      price: price,
      category_id: category,
      imglink: imglink,
    });

    newProduct.save();

    alert('Product Added');

    // Clear
    this.setProperties({
      productTitle: '',
      desc: '',
      price: '',
      imglink: '',
    });
  }

  @action
  setInput(tipo, event){
    set(this, tipo, event.target.value);
  }

}
