import Controller from '@ember/controller';
import { action } from '@ember/object';
import { inject as service } from '@ember/service';
import { set } from '@ember/object';


export default class AdminEditController extends Controller {
  @service router;
  @service store;

  @action
  editProduct() {
    const id = this.model.id; // recebemos o id, para encontrar o produto que queremos no bd

    let title = this.get('model.productTitle');
    let desc = this.get('model.desc');
    let price = this.get('model.price');

    let e = document.getElementById('category');
    let category = e.options[e.selectedIndex].value;

    let imglink = this.get('model.imglink');


    //We will update it in our database

    this.store.findRecord('product', id).then(function (product) {
      // pesquisamos o produto com o findRecord() ele se baseia no model do produto e no id. no then da promise editamos os valores e salvamos
      product.set('productTitle', title); // definimos os valores atualziados para os arquivos product
      product.set('desc', desc);
      product.set('category_id', category);
      product.set('price', price);
      product.set('imglink', imglink);

      product.save(); //atualizamos os dados no banco usadno o save()
    });
    this.router.transitionTo('admin'); //transitamos a edit de volta a admin
  }

  @action
  setInput(tipo, event){
    set(this.model, tipo, event.target.value);
  }

  @action
  deleteProduct() {
    const id = this.model.id; //recemos o id
    this.store.findRecord('product', id).then(function (product) {
      //pesquisamos o produto com base no id, o metodo retorna uma promise
      product.deleteRecord(); //excluimos o produto devolvido na then promise
      product.save(); //save aplica as alterações no bd
    });

    alert('Product Deleted');
    this.router.transitionTo('admin'); //voltamos para a rota admin
  }
}
