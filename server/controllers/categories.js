import express from 'express';
import Categories from '../models/Categories.js';
const router = express.Router();

export const getCategories = async (req, res) => { 
    try {
        const categories = await Categories.find();
                
        res.status(200).json(categories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const getCategory = async (req, res) => { // by ID
//     const { id } = req.params;

//     try {
//         const Categorie = await CategorieMessage.findById(id);
        
//         res.status(200).json(Categorie);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createCategory = async (req, res) => {
    const category = req.body;
    const newCategory = new Categories({ ...category, createdAt: new Date().toISOString() })

    try {
        await newCategory.save();

        res.status(201).json(newCategory);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const updateCategory = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags, likes } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Categorie with id: ${id}`);

//     const updatedCategorie = { creator, title, message, tags, selectedFile, _id: id, likes };

//     await CategorieMessage.findByIdAndUpdate(id, updatedCategorie, { new: true });

//     res.json(updatedCategorie);
// }

// export const deleteCategory = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Categorie with id: ${id}`);

//     await CategorieMessage.findByIdAndRemove(id);

//     res.json({ message: "Categorie deleted successfully." });
// }

// export const likeCategory = async (req, res) => {
//     const { id } = req.params;

//     if (!req.userId) {
//         return res.json({ message: "Unauthenticated" });
//       }

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Categorie with id: ${id}`);
    
//     const Categorie = await CategorieMessage.findById(id);

//     const index = Categorie.likes.findIndex((id) => id ===String(req.userId));

//     if (index === -1) {
//       Categorie.likes.push(req.userId);
//     } else {
//       Categorie.likes = Categorie.likes.filter((id) => id !== String(req.userId));
//     }
//     const updatedCategorie = await CategorieMessage.findByIdAndUpdate(id, Categorie, { new: true });
//     res.status(200).json(updatedCategorie);
// }


export default router;