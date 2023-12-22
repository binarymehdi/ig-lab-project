import React, { useEffect, useState } from 'react';
import "./Timeline.css";
import Post from "./Post/Post";
import axios from "axios";

const Timeline = ({ refreshTrigger }) => {
    const [data, setData] = useState({ posts: [], users: [] });

    useEffect(() => {
        axios.get("http://localhost:3001/getPosts").then((response) => {
            setData(response.data);
        });
    }, [refreshTrigger]); // Depend on refreshTrigger

    const findUserById = (userId) => {
        return data.users.find(user => user.id === userId);
    };

    return (
        <div className="timelineLayout">
            <div className="postsContainer">
                {data.posts.map((post) => {
                    const user = findUserById(post.user_id);
                    return (
                        <Post
                            key={post.id}
                            user_name={user ? user.username : 'Unknown User'}
                            caption={post.caption}
                            image={post.pictureurl}
                        />
                    );
                })}
            </div>
        </div>
    );
};

export default Timeline;
