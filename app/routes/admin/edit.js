// app/routes/admin/edit.js
import Route from '@ember/routing/route';
// import { products } from '../../data/products';

export default class AdminEditRoute extends Route {
  // async model(params) {
  //   const response = await fetch('/api/products.json');
  //   const { data } = await response.json();
  //   let filterd = data.find(({ id }) => id == params.id);

  //   let product = {
  //     product_title: filterd.product_title,
  //     desc: filterd.desc,
  //     price: filterd.price,
  //     category: filterd.category_id,
  //     imglink: filterd.imglink,
  //   };
  //   return product;
  // }

  model(params) {
    let product = this.store.findRecord('product', params.id); //findRecord method do store busca o produto. o store encontra o record com base no product e no id
    //Neste caso, nosso produto estará disponível no cache local da loja pois a adminrota recupera todos os produtos para colocá-los na adminrota.
    return product;
  }
}
