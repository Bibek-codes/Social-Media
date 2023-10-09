// import {Optional} from "sequelize"
export interface Ilike {
    Id: number,
    userId: number,
    postId: number,
    createdAt: Date,
    updatedAt: Date,
    isActive: boolean
}
export type ILikeCreate = Omit<Ilike,"Id">
