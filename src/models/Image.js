const { Schema, models, model } = require('mongoose');

const imageSchema = new Schema({
    imageUrl: {
        type: String,
        required: true,
    },
});

const Image = models.Images || model('Images', imageSchema);
export default Image;
