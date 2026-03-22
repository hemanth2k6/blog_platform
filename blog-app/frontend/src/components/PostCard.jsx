import React from 'react';
import { Link } from 'react-router-dom';

const PostCard = ({ post }) => {
  // Simple extraction for excerpt
  const excerpt = post.content.length > 150 
    ? post.content.substring(0, 150) + '...' 
    : post.content;
    
  const date = new Date(post.createdAt).toLocaleDateString();

  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 hover:shadow-md transition-shadow">
      <Link to={`/post/${post._id}`}>
        <h2 className="text-2xl font-bold text-gray-900 mb-2 hover:text-indigo-600 transition-colors">
          {post.title}
        </h2>
      </Link>
      
      <p className="text-gray-600 mb-4 line-clamp-3">
        {excerpt}
      </p>
      
      <div className="flex justify-between items-center text-sm text-gray-500">
        <div className="font-medium text-gray-700">
          By {post.author.username}
        </div>
        <div>
          {date}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
