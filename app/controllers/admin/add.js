import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';

export default class AdminAddController extends Controller {
  @service store;

  @action
  addProduct() {

    let desc = this.model.desc;
    let price = this.model.price;
    let e = document.getElementById('category');
    let category = e.options[e.selectedIndex].value;
    let imglink = this.model.imglink;


    let newProduct = this.store.createRecord('product', {
      productTitle: this.productTitle,
      desc: desc,
      price: price,
      category_id: category,
      imglink: imglink,
    });

    newProduct.save();

    function setInput(tipo, valor) {
      set(this.model, tipo, valor);
    }

    setInput();

    alert('Product Added');

    // Clear
    this.setProperties({
      productTitle: '',
      desc: '',
      price: '',
      imglink: '',
    });
    e.value = '';
  }


}
