export interface Icomment{
    Id: number,
    postId:number,
    userId: number,
    text: string,
    createdAt: Date,
    updatedAt: Date,
    isActive: boolean
}
export type IcommentCreate = Omit<Icomment,"Id">