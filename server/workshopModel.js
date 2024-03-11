import mongoose from "mongoose";

const workshopSchema = new mongoose.Schema({
    _id: String,
    name: String,
    date: Date,
    clicks: Number,
    text: String,
    image: String,
    show: Boolean,
    premium: Boolean,
    link: String,
    type: String,
  }, { collection: 'workshops' });
  
const Workshop = mongoose.model('Workshop', workshopSchema);
  
export default Workshop;