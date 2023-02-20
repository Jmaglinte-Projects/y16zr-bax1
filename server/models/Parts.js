import mongoose from 'mongoose';

const { Schema } = mongoose;
const partsShema = mongoose.Schema({
    poster: String,
    refNo: Number,
    partNo: String,
    description: String,
    BAX1: Number,
    remarks: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    subCategory: { type: Schema.Types.ObjectId, ref: 'subCategories' },
}, { collection: 'parts' })

const parts = mongoose.model('parts', partsShema);

export default parts;