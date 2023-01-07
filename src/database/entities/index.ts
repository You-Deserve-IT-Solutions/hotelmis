import { Users } from './../entities/user-authentication/user';
import { Client } from './client/client';
import { Person } from './person/person';

const entities = [Users, Person, Client];

export { Users, Person, Client };
export default entities;
