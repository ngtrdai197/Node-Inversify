import { Document } from 'mongoose'

export interface IProduct extends Document{
    readonly id: string
    readonly name: string
    readonly price?: number
}