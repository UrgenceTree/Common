import mongoose from "mongoose"

export interface IPatientInfo {
    name: string
    age: string
    description: string
    rank: number
    user_id?: number
    status: boolean
}

const PatientInfoSchema = new mongoose.Schema<IPatientInfo>(
    {
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
        status: {
            type: Boolean,
            required: true
        }
    },
    {
        timestamps: true
    }
)

export const PatientInfoModel = mongoose.model<IPatientInfo>("PatientInfo", PatientInfoSchema);
