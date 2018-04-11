import V3 from './v3';
import V2 from './v2';

export default class MailChimpConnector extends V3 {
  constructor ({datacenter, key, debug}) {
    super({datacenter, key, version: '3.0', debug});
    this.v2 = new V2({datacenter, key, version: '2.0', debug});
  }
}
