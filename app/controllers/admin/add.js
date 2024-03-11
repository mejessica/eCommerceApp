import Controller from '@ember/controller';
import { action } from '@ember/object';

export default class AdminAddController extends Controller {
  @action
  addProduct() {
    let title = this.title;
    let desc = this.desc;
    let price = this.price;

    let e = document.getElementById('category');
    let category = e.options[e.selectedIndex].value;

    let imglink = this.imglink;

    //exemplo de integração com o banco
    var newproduct = this.store.createRecord('product', {
      //
      product_title: title,
      desc: desc,
      price: price,
      category_id: category,
      imglink: imglink,
    });

    newproduct.save();

    alert('Product Added');

    // Clear
    this.setProperties({
      title: '',
      desc: '',
      price: '',
      imglink: '',
    });
    e.value = '';
  }
}
