import { Users } from './../entities/user-authentication/user';
import { Attribute } from './attributes/attribute';
import { AttributeValue } from './attributes/attributevalue';
import { Client } from './client/client';
import { Person } from './person/person';

const entities = [Users, Person, Client, Attribute, AttributeValue];

export { Users, Person, Client, Attribute, AttributeValue };
export default entities;
