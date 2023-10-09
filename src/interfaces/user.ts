export interface Iuser{
    Id: number,
    username: string,
    password: string,
    createdAt: Date,
    updatedAt: Date,
    isActive: boolean
}
export type IUserCreate = Omit<Iuser,"Id">