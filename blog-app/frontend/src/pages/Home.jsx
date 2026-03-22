import React, { useState, useEffect } from 'react';
import api from '../services/api';
import PostCard from '../components/PostCard';
import LoadingSpinner from '../components/LoadingSpinner';

const Home = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const { data } = await api.get('/posts');
        setPosts(data);
      } catch (err) {
        setError('Failed to fetch posts. Please try again later.');
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);

  if (loading) return <LoadingSpinner />;

  return (
    <div>
      <h1 className="text-4xl font-extrabold text-gray-900 mb-8 text-center">
        Latest Posts
      </h1>
      
      {error && (
        <div className="bg-red-50 text-red-600 p-4 rounded-md mb-6 text-center">
          {error}
        </div>
      )}

      {posts.length === 0 && !error ? (
        <p className="text-center text-gray-500 text-lg">No posts available yet. Be the first to create one!</p>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {posts.map((post) => (
            <PostCard key={post._id} post={post} />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;
