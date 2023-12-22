import React from "react";
import "./Post.css";
import { FcLike } from "react-icons/fc";
import { FaRegComment } from "react-icons/fa";

function Post({ user_name, caption, image }) {
    console.log(image);
    const postImage = require(`${image}`);
    return (
        <div className="postCard">
            <div className="postHeader">
                <span className="authorName">{user_name}</span>
                <span className="postDate"></span>
            </div>
            <div className="postImageContainer">
                <img src={postImage} alt={`Post by ${user_name}`} />
            </div>
            <div className="postContent">
                <span className="postText">{caption}</span>
                <div className="interactionIcons">
                    <div className="icon">
                        <FcLike size={'1.5rem'} />
                    </div>
                    <div className="icon">
                        <FaRegComment size={'1.5rem'} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Post;
