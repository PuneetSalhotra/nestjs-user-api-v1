import { Document } from 'mongoose';

export interface IComment extends Document {

    readonly user_id : number;
    readonly post_id : number;
    readonly title : string;

}