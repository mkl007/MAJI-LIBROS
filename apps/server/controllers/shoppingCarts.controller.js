import { CartSchema } from '../models/userCart.model.js';

export const getCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const userCart = await CartSchema.find({ userId });
        res.status(200).json(userCart);
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error fetching cart' });
    }
};

export const addToCart = async (req, res) => {
    try {
        const { userId, bookId } = req.body;
        if (!userId || !bookId) {
            return res.status(400).json({ message: 'UserId and bookId are required' });
        }
        const userCart = await CartSchema.create({ userId, bookId });
        console.log(userCart);
        res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error adding item to cart' });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.body;
        if (!userId || !itemId) {
            return res.status(400).json({ message: 'UserId and itemId are required' });
        }
        const result = await CartSchema.findOneAndDelete({ userId, _id: itemId });
        if (result) {
            res.status(200).json({ message: 'Item removed from cart successfully' });
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error removing item from cart' });
    }
};

export const updateCartItem = async (req, res) => {
    try {
        const { userId, item } = req.body;
        if (!userId || !item || !item.itemId) {
            return res.status(400).json({ message: 'UserId and item with itemId are required' });
        }
        const result = await CartSchema.findOneAndUpdate(
            { userId, _id: item.itemId },
            { ...item },
            { new: true }
        );
        if (result) {
            res.status(200).json({ message: 'Item updated successfully' });
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error updating item in cart' });
    }
};