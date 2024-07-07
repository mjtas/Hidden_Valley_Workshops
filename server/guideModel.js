import mongoose from "mongoose";

const guideSchema = new mongoose.Schema({
    _id: String,
    title: String,
    rating: String,
    type: String,
    image: String,
    introText: String,
    toolString: String,
    materialString: String,
    numberedSteps: String,
    concText: String,
    
  }, { collection: 'guides' });
  
const Guide = mongoose.model('Guide', guideSchema);
  
export default Guide;