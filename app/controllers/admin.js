import Controller from '@ember/controller';
import { action , set } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { inject as service} from '@ember/service';

export default class AdminController extends Controller {
  @tracked appliedfilter = ''; //none pois funciona como uma verificação de filtro. ira ser definido um valor quando precisar aplicar o fitro
  @tracked filteredProducts; //rastreada e definida para atribuir os produtos resultantes com base no filtro.
  @tracked sorted; // prop rastreada que contem os produtos classificados
  @service store;
  @tracked filter;

  @action
  async search() {
    this.filteredProducts = await this.store.query('product', {product_title: this.filter});
    this.appliedfilter = true;
    console.log(this.filteredProducts);
  }
  @action
  sortasc(){
    this.sorted = this.get('store').query('product',{orderBy : 'price'}); //o query com o price para orderBy permite classificar os produtos em ordem crescente. atriuimos a sorted
    }

  @action
  sortdsc(){ // utilizamos o query()método da loja para ordenar os produtos em ordem crescente.
    this.get('store').query('product', {orderBy : 'price'})
    .then((arrModel)=>{this.sorted =  arrModel.toArray().reverse();});//revertemos os resultados na then promise e o atribuimos a sorted prop rastreada. isso inverte a classificação
  }

  @action
  clear(){ 
    this.appliedfilter = ''
    this.sorted = ''
    this.filteredProducts = ''
  }

  @action
  setInput(tipo, event){
    set(this, tipo, event.target.value);
  }
}
