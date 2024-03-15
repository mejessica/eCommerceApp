import Route from '@ember/routing/route';
import {inject as service} from '@ember/service'

export default class CategoryIndexRoute extends Route {
    @service store

    model(){
        let param = this.paramsFor('category')
        
        console.log(param)
        console.log(param.id)
       console.log('bbbbbbbbbbbbb')

        return this.store.query('product', {
            category_id: param.id,  
        });

    }
}
