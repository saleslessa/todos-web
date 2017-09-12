import { ObjectID } from 'bson';

export class Item {
    _id: ObjectID;
    name: string;
    done: boolean;
}
