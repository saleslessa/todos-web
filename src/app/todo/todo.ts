import { ObjectID } from 'bson';

import { Item } from './item';

export class Todo {
    _id: ObjectID;
    title: string;

    items: Array<Item>;
  }
