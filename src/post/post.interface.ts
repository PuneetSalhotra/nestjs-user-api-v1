import { Document } from "mongoose";

export interface IPost extends Document {

    readonly title : string;
    readonly description : string;
    readonly user_id : string;

}