import Controller from '@ember/controller';
import { action, set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service } from '@ember/service'; //objeto que mantem o estado de um atributo especifico


export default class CategoryIndexController extends Controller {
  @service router; //usamos o router para trazer o routeDidChange method 
  //zera os produtos quando a rota é alterada, pois a rota category é uma rota aninhada e dinamica. se nao redefinirmos os produtos 
  //filtrados, os mesmos produtos serao mostrados em outra categoria
  constructor() {
    super(...arguments);

    this.router.on('routeDidChange', (transition) => {
      console.log("Changed");
      this.appliedfilter = '';
      this.filteredProducts = '';
      this.sorted = ''; ///liberamos a sorted quando a rota é alterada
    })
  }

  @tracked appliedfilter = ''; //Isso funciona como uma verificação do filtro. Atribuímos algum valor a ele quando precisamos aplicar um filtro.
  @tracked filteredProducts; //atribui os produtos resultantes com base no filtro. isso nos permite carregar os produtos de filtro com base nesta prop
  @tracked sorted; //definimos a sorted prop
  pageid; //armazenamos o valor category_iddo nosso URL e consultamos os produtos classificados com base nesse ID
  @service store;
  @tracked filter;

  @action
  async search() {
    this.filteredProducts = await this.store.query('product', {product_title: this.filter});
    this.appliedfilter = true;
    console.log(this.filteredProducts);
  }

  @action
  sortasc() {
    this.pageid = this.target.currentURL.split('/').pop();//recebemos o category_id com base na url atual
    this.sorted = this.get('store').query('product', { filter: { category_id: this.pageid } }) // classificamos os produtos por categoria com base no precço da then
      .then((arrModel) => { this.sorted = arrModel.sortBy('price') });
    this.pageid = '' //limpamos o arquivo pageid
  }

  @action
  sortdsc() { //classificamos em ordem decresente com base no preço e invertemos a resposta
    this.pageid = this.target.currentURL.split('/').pop();
    this.get('store').query('product', { filter: { category_id: this.pageid } })
      .then((arrModel) => { this.sorted = arrModel.sortBy('price').toArray().reverse() });
    console.log(this.sorted);
    this.pageid = ''
  }

  @action
  clear() {
    this.appliedfilter = ''
    this.sorted = ''
    this.filteredProducts = ''
  }

  @action
  setInput(tipo, event){
    set(this, tipo, event.target.value);
  }
}

