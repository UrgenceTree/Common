import mongoose from "mongoose"

export interface IPatientInfo {
    _id: number
    name: string
    age: string
    description: string
    rank: number
    user_id?: number
}

export const PatientInfoSchema = new mongoose.Schema<IPatientInfo>(
    {
        _id: {
            type: Number,
            required: true,
            unique: true
        },
        name: {
            type: String,
            required: true
        },
        age: {
            type: String,
            required: true
        },
        description: {
            type: String,
            required: true
        },
        rank: {
            type: Number,
            required: true
        },
        user_id: {
            type: Number,
            required: false
        },
    },
    {
        timestamps: true
    }
)

export const PatientInfoModel = mongoose.model<IPatientInfo>("PatientInfo", PatientInfoSchema);
