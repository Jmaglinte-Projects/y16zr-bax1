import mongoose from 'mongoose';
const { Schema } = mongoose;

const subCategoriesSchema = mongoose.Schema({
    name: String,
    poster: String,
    createdAt: {
        type: Date,
        default: new Date(),
    },
    category: { type: Schema.Types.ObjectId, ref: 'categories' },
}, { collection: 'subCategories' })

const subCategories = mongoose.model('subCategories', subCategoriesSchema);

export default subCategories;