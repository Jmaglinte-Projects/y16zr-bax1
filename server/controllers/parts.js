import express from 'express';

import Parts from '../models/Parts.js';

const router = express.Router();

export const getParts = async (req, res) => { 
    try {
        const Parts = await Parts.find();
        
        res.status(200).json(Parts);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

export const createSubCategories = async (req, res) => {
    const Parts = req.body;
    const newSubCategories = new Parts({ ...Parts, creator: req.userId, createdAt: new Date().toISOString() })

    try {
        await newSubCategories.save();

        res.status(201).json(newSubCategories);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}
 

// export const updateCategorie = async (req, res) => {
//     const { id } = req.params;
//     const { title, message, creator, selectedFile, tags, likes } = req.body;
    
//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Categorie with id: ${id}`);

//     const updatedCategorie = { creator, title, message, tags, selectedFile, _id: id, likes };

//     await CategorieMessage.findByIdAndUpdate(id, updatedCategorie, { new: true });

//     res.json(updatedCategorie);
// }

// export const deleteCategorie = async (req, res) => {
//     const { id } = req.params;

//     if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Categorie with id: ${id}`);

//     await CategorieMessage.findByIdAndRemove(id);

//     res.json({ message: "Categorie deleted successfully." });
// }

// export const likeCategorie = async (req, res) => {
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