// import { ILikeCreate } from "../interfaces/like";
import Models from "../models";

export default class LikeService{
    static async createLike(uid:number,pid:number){
        const result = await Models("like").findOne({
        where:{
            userId:uid,
            postId:pid,
            isActive:true
        }})
        if(!result){
            const payload = {userId:uid,postId:pid,isActive:true,createdAt:new Date(),updatedAt: new Date()} ;
            await Models("like").create(payload);
        }
        return true;
    }
    static async deleteLike(pid:number){{
        await Models("like").update({isActive:false},{where:{
            postId:pid,
            isActive:true
        }})
        return true;
    }}
}