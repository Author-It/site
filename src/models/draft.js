// This is referrence to the database
import mongoose, { Schema, model, models } from "mongoose"

//Schema [Table in SQL terms]
// we are using mongoose so it will handle the schema and will create a referrence in memory 
// later we can use mongoose function and perform operations using it
const DraftSchema = new Schema({
    usr_id: mongoose.SchemaTypes.String,
    content: {
        title: mongoose.SchemaTypes.String,
        description: mongoose.SchemaTypes.String,
        body: mongoose.SchemaTypes.String,
        category: mongoose.SchemaTypes.String,
        tags: mongoose.SchemaTypes.String
    },
    settings: {
        link: mongoose.SchemaTypes.String,
        img_url: mongoose.SchemaTypes.String,
    },
},
{
    timestamps: true
});

const Draft = models.Drafts || model('Drafts', DraftSchema);
export default Draft
