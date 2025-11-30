import mongoose from 'mongoose';

const BlogSchema = new mongoose.Schema({
    title: { type: String, required: true },
    summary: { type: String, required: true },
    content: { type: String, required: true }, // Markdown content
    date: { type: Date, default: Date.now },
    tags: [String],
    link: String,
    featured: { type: Boolean, default: false },
    image: String,
});

// Prevent model recompilation error in dev mode
const Blog = mongoose.models.Blog || mongoose.model('Blog', BlogSchema);

export default Blog;
