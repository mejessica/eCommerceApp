import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default class CategoryItemRoute extends Route {
  @service store

  model(param) {
     
       console.log(param.itemkey)
      return this.store.findRecord('product', param.itemkey)
}
}
