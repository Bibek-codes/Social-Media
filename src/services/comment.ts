import { Icomment } from "../interfaces/comment";
import { Iuser } from "../interfaces/user";
import Models from "../models";

export default class CommentService{
    static async createComment(uid:number,pid:number,text:string){
        const payload = {postId : pid, userId:uid, text,createdAt:new Date(),updatedAt:new Date(), isActive:true }
        const result = await Models("comment").create(payload);
        return result;
    }
    static async updateComment(body:string,id:number){
        const result = await Models("comment").update({text:body},{where:{
            Id:id,
            isActive:true
        }})
        return true;
    }
    static async deleteComment(id:number) {
        await Models("comment").update({isActive:false},{where:{
            Id:id,
            isActive:true
        }})
        return true;
    }
}