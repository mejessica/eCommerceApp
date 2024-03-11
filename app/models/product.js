import Model, { attr } from '@ember-data/model';

export default class ProductModel extends Model {

  // @belongsTo('categorie') categorie;

  @attr('string') productTitle;
  @attr('string') desc;
  @attr('number') price;
  @attr('string') category_id;
  @attr('string') imglink;
}
