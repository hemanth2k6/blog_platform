import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import api from '../services/api';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import LoadingSpinner from '../components/LoadingSpinner';

const PostDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);
  
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const { data } = await api.get(`/posts/${id}`);
        setPost(data);
      } catch (err) {
        setError(err.response?.data?.message || 'Failed to fetch post.');
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [id]);

  const handleDelete = async () => {
    if (window.confirm('Are you sure you want to delete this post?')) {
      try {
        await api.delete(`/posts/${id}`);
        navigate('/');
      } catch (err) {
        alert(err.response?.data?.message || 'Failed to delete post');
      }
    }
  };

  if (loading) return <LoadingSpinner />;
  if (error) return <div className="text-center text-red-600 mt-10">{error}</div>;
  if (!post) return <div className="text-center mt-10">Post not found</div>;

  const isAuthor = user && user._id === post.author._id;
  const date = new Date(post.createdAt).toLocaleDateString();

  return (
    <div className="max-w-4xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-8">
      <Link to="/" className="text-indigo-600 hover:text-indigo-800 mb-6 inline-block font-medium">
        &larr; Back to posts
      </Link>
      
      <h1 className="text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
      
      <div className="flex items-center justify-between text-gray-500 text-sm mb-8 pb-4 border-b border-gray-100">
        <div>By <span className="font-medium text-gray-800">{post.author.username}</span> on {date}</div>
        
        {isAuthor && (
          <div className="flex space-x-3">
            <Link
              to={`/edit-post/${post._id}`}
              className="px-3 py-1 bg-gray-100 text-gray-700 rounded hover:bg-gray-200 transition-colors"
            >
              Edit
            </Link>
            <button
              onClick={handleDelete}
              className="px-3 py-1 bg-red-100 text-red-700 rounded hover:bg-red-200 transition-colors"
            >
              Delete
            </button>
          </div>
        )}
      </div>
      
      <div className="prose max-w-none text-gray-800 whitespace-pre-wrap">
        {post.content}
      </div>
    </div>
  );
};

export default PostDetail;
