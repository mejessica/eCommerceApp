import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default class CategoryIndexRoute extends Route {
    @service store

    model(params){
        return this.store.query('product', {
            filter:{
                category_id: params.id,
            },
        });
    }
}
