import JSONAPIAdapter from '@ember-data/adapter/json-api';
import ENV from 'e-commerce-app/config/environment';
import { inject as service } from '@ember/service';
import { computed } from '@ember/object';

const { APP } = ENV;
const { host, namespace } = APP;

export default class ApplicationAdapter extends JSONAPIAdapter {
  host;
  namespace;

//   @service session;
  
  constructor() {
    super(...arguments);
    this.host = host;
    this.namespace = namespace;
  }

//   @computed('session.isAuthenticated', 'session.data.authenticated.token')
//   get headers() {
//     if (this.session.isAuthenticated) {
//       return {
//         Authorization: `Bearer ${this.session.data.authenticated.token}`,
//       };
//     } else {
//       return {};
//     }
//   }

//   handleResponse(status) {
//     if (status === 401 && this.session.isAuthenticated) {
//       this.session.invalidate();
//     }
//     return super.handleResponse(...arguments);
//   }
}