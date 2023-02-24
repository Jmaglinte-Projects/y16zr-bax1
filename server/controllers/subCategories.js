import express from 'express';
import mongoose from 'mongoose';
import SubCategories from '../models/SubCategories.js';

const router = express.Router();

export const getSubCategories = async (req, res) => { 
    try {
        const subCategories = await SubCategories.find().populate('category');
        
        res.status(200).json(subCategories);
    } catch (error) {
        res.status(404).json({ message: error.message });
    }
}

// export const getCategorie = async (req, res) => { 
//     const { id } = req.params;

//     try {
//         const Categorie = await CategorieMessage.findById(id);
        
//         res.status(200).json(Categorie);
//     } catch (error) {
//         res.status(404).json({ message: error.message });
//     }
// }

export const createSubCategories = async (req, res) => {
    const subCategories = req.body;
    const newSubCategories = new SubCategories({ ...subCategories, creator: req.userId, createdAt: new Date().toISOString() })
    return new Error('PLEASE CONTACT ADMINISTRATOR');
    try {
        await newSubCategories.save();

        res.status(201).json(newSubCategories);
    } catch (error) {
        res.status(409).json({ message: error.message });
    }
}

// export const createSubCategories = async (req, res) => {
//     const categoryID = "63f0a5e0f6ce1ce5ac6d4a44";
//     const subCategories = [
//         "FRAME",
//         "FENDER",
//         "SIDE COVER",
//         "REAR ARM & SUSPENSION",
//         "STEERING",
//         "FRONT FORK",
//         "FUEL TANK",
//         "SEAT",
//         "FRONT WHEEL",
//         "FRONT BRAKE CALIPER",
//         "REAR WHEEL",
//         "REAR BRAKE CALIPER",
//         "STEERING HANDLE & CABLE",
//         "FRONT MASTER CYLINDER",
//         "STAND & FOOTREST",
//         "REAR MASTER CYLINDER",
//         "LEG SHIELD",
//         "GENERATOR",
//         "STARTING MOTOR",
//         "FLASHER LIGHT",
//         "METER",
//         "HEADLIGHT",
//         "TAILLIGHT",
//         "HANDLE SWITCH & LEVER",
//         "ELECTRICAL 1",
//         "ELECTRICAL 2"
//     ];

//     let finalData = [];
//     subCategories.map(category => {
//         finalData = [...finalData, { name: category, category: categoryID, creator: req.userId, createdAt: new Date().toISOString() }]
//     })

//     try {
//         const result = await SubCategories.insertMany(finalData);

//         res.status(201).json(result);
//     } catch (error) {
//         res.status(409).json({ message: error.message });
//     }
// }

export const updateSubCategory = async (req, res) => {
    const { id } = req.params;
    const { poster } = req.body;
    
    if (!mongoose.Types.ObjectId.isValid(id)) return res.status(404).send(`No Subcategory with an id: ${id}`);

    const subCategory = {  _id: id, poster };

    const updatedSubCategory = await SubCategories.findByIdAndUpdate(id, subCategory, { new: true });

    res.json(updatedSubCategory);
}

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