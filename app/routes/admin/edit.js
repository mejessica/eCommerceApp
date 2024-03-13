// app/routes/admin/edit.js
import Route from '@ember/routing/route';
import { inject as service } from '@ember/service'

export default class AdminEditRoute extends Route {
  @service store

  model(param) {
      console.log(param)
    return this.store.findRecord('product', param.id);
  }
}