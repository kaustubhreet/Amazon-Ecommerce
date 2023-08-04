import mongoose from 'mongoose'

const imgSchema = new mongoose.Schema({
    productImg: [{
        name: {type: String, required: true},
        desc:{type:String,required:true},
        img:[
            data: Buffer,
            contentType: String 
        ]
});
const prodimg = mongoose.model('Order', imgSchema);

export default prodimg;