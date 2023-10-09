export interface Ipost {
    Id: number,
    userId: number,
    text: string,
    createdAt: Date,
    updatedAt: Date,
    isActive: boolean
}
export type IPostCreate = Omit<Ipost,"Id">