import React, { useState } from 'react';
import axios from 'axios';
import './createPost.css'; // Make sure to include this line to import the CSS

function CreatePost() {
    const initialPostState = {
        user_id: 1, // Assuming a fixed user_id for demonstration
        content: '',
        caption: '',
        pictureurl: ''
    };

    const [post, setPost] = useState(initialPostState);

    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:3001/createPost', {
                ...post,
                id: 1, // Assuming a fixed id for demonstration
                content: "post from frontend", // Assuming fixed content for demonstration
                created_at: new Date().toISOString()
            });
            console.log(response.data);
            setPost(initialPostState); // Reset form fields
            window.location.reload(); // Refresh the page
        } catch (error) {
            console.error('Error posting data', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="create-post-form">
            <div className="form-group">
                <label>Caption</label>
                <input type="text" name="caption" value={post.caption} onChange={handleChange} className="form-control" />
            </div>
            <div className="form-group">
                <label>Picture URL</label>
                <input type="text" name="pictureurl" value={post.pictureurl} onChange={handleChange} className="form-control" />
            </div>
            <button type="submit" className="submit-btn">Create Post</button>
        </form>
    );
}

export default CreatePost;
