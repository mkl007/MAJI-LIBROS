import BookSchema from '../models/books.model.js';
import { ShoopingCartSchema } from '../models/userCart.model.js';

export const getIemsCart = async (req, res) => {
    try {
        const { userId } = req.params;
        const userCart = await ShoopingCartSchema.find({ userId });
        const items = await BookSchema.find({ _id: userCart.map((item) => item.bookId) });
        console.log(items);
        res.status(200).json({ items });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error fetching cart' });
    }
};

export const addToCart = async (req, res) => {
    try {
        // await ShoopingCartSchema.deleteMany()
        const addNewCart = new ShoopingCartSchema({
            bookId: req.body.bookId,
            userId: req.body.userId,
            availabilityStatus: req.body.availabilityStatus,
        })

        if (!addNewCart.userId || !addNewCart.bookId) {
            return res.status(400).json({ message: 'UserId and bookId are required' });
        }
        await addNewCart.save({ addNewCart });
        res.status(200).json({ message: 'Item added to cart successfully' });
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Error adding item to cart' });
    }
};

export const removeFromCart = async (req, res) => {
    try {
        const { userId, itemId } = req.params;
        if (!userId || !itemId) {
            return res.status(400).json({ message: 'UserId and itemId are required' });
        }
        const result = await ShoopingCartSchema.deleteOne({ userId, bookId: itemId });
        if (result) {
            res.status(200).json({ message: 'Item removed from cart successfully' });
        } else {
            res.status(404).json({ message: 'Item not found in cart' });
        }
    } catch (error) {
        console.log(error);
        return res.status(500).json({ message: 'Oops! Error removing item from cart' });
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