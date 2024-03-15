import Model, { attr } from '@ember-data/model';

export default class CartModel extends Model {

  @attr('string') productId;
  @attr('string') qnt;
}
