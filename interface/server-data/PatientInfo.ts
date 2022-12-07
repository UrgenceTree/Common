import mongoose from "mongoose"

interface IPatientInfo {
    _id: Number
    name: String
    age: String
    description: String
    rank: Number
    user_id: Number | undefined
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

export const PatientInfoModel = mongoose.model<IPatientInfo>("PatientInfoModel", PatientInfoSchema);
