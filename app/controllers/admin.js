import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class AdminController extends Controller {
  @tracked appliedfilter = ''; //none pois funciona como uma verificação de filtro. ira ser definido um valor quando precisar aplicar o fitro
  @tracked filteredProducts; //rastreada e definida para atribuir os produtos resultantes com base no filtro.
  @tracked sorted; // prop rastreada que contem os produtos classificados

  @action
  search() {
    //serach action
    var filter = this.filter; //recebemos o filtro do input
    this.appliedfilter = filter; //definimos o valor da appliedfilter propriedade igual ao filtro

    var rx = new RegExp(filter, 'gi'); // convertemos o filtro em uma expressao regular

    var products = this.model; //recemos todos os produtos do nosos modelo

    let filtered = products.filter(function (product) {
      //filtramos nossos produtos onde o titulo ou descrição do produto corresponde ao fitlro
      return (
        product.get('product_title').match(rx) || product.get('desc').match(rx)
      );
    });

    this.filteredProducts = filtered; //definimos o valor da filteredProduct prop riedade igual ao resultado da filtragem
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
}
