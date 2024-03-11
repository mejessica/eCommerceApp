import Model, { attr} from '@ember-data/model';

export default class CategorieModel extends Model {
// @hasMany('products') products;

  @attr('string') title;
  @attr('string') category_id;
  @attr('string') imglink;

}
