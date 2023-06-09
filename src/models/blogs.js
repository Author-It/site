// This is referrence to the database
import mongoose, { Schema, model, models } from "mongoose"


//Schema [Table in SQL terms]
// we are using mongoose so it will handle the schema and will create a referrence in memory 
// later we can use mongoose function and perform operations using it
const BlogPostSchema = new Schema({
    usr_id: mongoose.SchemaTypes.String,
    params: {
        views: { type: mongoose.SchemaTypes.Number, default: 0 },
        likes: { type: mongoose.SchemaTypes.Number, default: 0 },
        status:{ type: mongoose.SchemaTypes.Number, default: 0 },
    },
    content: {
        title: mongoose.SchemaTypes.String,
        description: mongoose.SchemaTypes.String,
        body: mongoose.SchemaTypes.String,
    },
    settings: {
        visibilityCountry: { type: mongoose.SchemaTypes.String, default: "all" },
        link: mongoose.SchemaTypes.String,
        url: mongoose.SchemaTypes.String,
    },
},
{
    timestamps: true
});

const Blogs = models.blogPosts || model('blogPosts', BlogPostSchema);
export default Blogs;
