/**
 * 
 */
import Apex from './api/apex';
import ConnectionCore from './connection';
import jsforce, { OAuth2, Date, SfDate, VERSION } from './core';

export { OAuth2, Date, SfDate, VERSION };

export class Connection extends ConnectionCore {
  apex: Apex = new Apex(this);
}

jsforce.Connection = Connection; // eslint-disable-line import/no-named-as-default-member

export default jsforce;