import mongoose from 'mongoose';
const { Schema } = mongoose;

const subCategoriesSchema = mongoose.Schema({
    name: String,
    posted: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    category: { type: Schema.Types.ObjectId, ref: 'categories' },
}, { collection: 'subCategories' })

const subCategories = mongoose.model('SubCategories', subCategoriesSchema);

export default subCategories;