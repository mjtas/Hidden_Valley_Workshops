import mongoose from "mongoose";

const priceSchema = new mongoose.Schema({
    _id: String,
    type: String,
    doublePrice: String,
    singlePrice: String,
}, { collection: 'prices' });
  
const Price = mongoose.model('Price', priceSchema);
  
export default Price;