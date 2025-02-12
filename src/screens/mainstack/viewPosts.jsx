// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import API_URL from './config';

// export default function ViewPosts() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/posts`);
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleReaction = async (postId, reactionType) => {
//     try {
//       await axios.post(`${API_URL}/api/posts/${postId}/react`, { reactionType });
//       fetchPosts(); // Refresh posts after reaction
//     } catch (error) {
//       console.error('Error reacting to post:', error);
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Posts</h1>
//       <Link to="/create-post" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block">
//         Create New Post
//       </Link>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <div key={post._id} className="bg-white shadow rounded-lg overflow-hidden">
//             <div className="p-4">
//               <h2 className="font-bold text-xl mb-2">{post.userId.firstName} {post.userId.lastName}</h2>
//               <p className="text-gray-700">{post.text}</p>
//             </div>
//             {post.image && (
//               <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
//             )}
//             <div className="p-4 border-t">
//               <div className="flex justify-between items-center">
//                 <div className="flex space-x-2">
//                   <button onClick={() => handleReaction(post._id, 'like')} className="text-blue-500 hover:text-blue-600">
//                     Like ({post.reactions.filter(r => r.type === 'like').length})
//                   </button>
//                   <button onClick={() => handleReaction(post._id, 'love')} className="text-red-500 hover:text-red-600">
//                     Love ({post.reactions.filter(r => r.type === 'love').length})
//                   </button>
//                 </div>
//                 <span className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }



// import React, { useState, useEffect, useContext } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
// import { AuthContext } from '../../AuthContext';
// import API_URL from './config';

// export default function ViewPosts() {
//   const [posts, setPosts] = useState([]);
//   const { user } = useContext(AuthContext);

//   useEffect(() => {
//     fetchPosts();
//   }, []);

//   const fetchPosts = async () => {
//     try {
//       const response = await axios.get(`${API_URL}/api/posts`, {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//       });
//       setPosts(response.data);
//     } catch (error) {
//       console.error('Error fetching posts:', error);
//     }
//   };

//   const handleReaction = async (postId, reactionType) => {
//     try {
//       await axios.post(`${API_URL}/api/posts/${postId}/react`, {
//         userId: user._id,
//         reactionType
//       }, {
//         headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
//       });
//       fetchPosts(); // Refresh posts after reaction
//     } catch (error) {
//       console.error('Error reacting to post:', error);
//     }
//   };

//   const handlePostClick = (post) => {
//     if (post.userId === user._id) {
//       // If it's the user's own post, do nothing or show an alert
//       alert("This is your own post");
//     } else if (user.matches.includes(post.userId)) {
//       // If they're already matched, navigate to chat room
//       // You'll need to implement this navigation
//       // navigation.navigate('ChatRoom', { matchId: post.userId });
//     } else {
//       // If not matched, navigate to match screen
//       // You'll need to implement this navigation
//       // navigation.navigate('MatchScreen', { userId: post.userId });
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Posts</h1>
//       <Link to="/create-post" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block">
//         Create New Post
//       </Link>
//       <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
//         {posts.map((post) => (
//           <div key={post._id} className="bg-white shadow rounded-lg overflow-hidden cursor-pointer" onClick={() => handlePostClick(post)}>
//             <div className="p-4">
//               <h2 className="font-bold text-xl mb-2">{post.userName}</h2>
//               <p className="text-gray-700">{post.text}</p>
//             </div>
//             {post.image && (
//               <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
//             )}
//             <div className="p-4 border-t">
//               <div className="flex justify-between items-center">
//                 <div className="flex space-x-2">
//                   <button onClick={(e) => { e.stopPropagation(); handleReaction(post._id, 'like'); }} className="text-blue-500 hover:text-blue-600">
//                     Like ({post.reactions.filter(r => r.type === 'like').length})
//                   </button>
//                   <button onClick={(e) => { e.stopPropagation(); handleReaction(post._id, 'love'); }} className="text-red-500 hover:text-red-600">
//                     Love ({post.reactions.filter(r => r.type === 'love').length})
//                   </button>
//                 </div>
//                 <span className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
//               </div>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }


import React, { useState, useEffect, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import API_URL from './config';

export default function ViewPosts() {
  const [posts, setPosts] = useState([]);
  const { user } = useContext(AuthContext);

  useEffect(() => {
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await axios.get(`${API_URL}/api/posts`, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      setPosts(response.data);
    } catch (error) {
      console.error('Error fetching posts:', error);
    }
  };

  const handleReaction = async (postId, reactionType) => {
    try {
      await axios.post(`${API_URL}/api/posts/${postId}/react`, {
        userId: user._id,
        reactionType
      }, {
        headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
      });
      fetchPosts(); // Refresh posts after reaction
    } catch (error) {
      console.error('Error reacting to post:', error);
    }
  };

  const handlePostClick = (post) => {
    if (post.userId === user._id) {
      // If it's the user's own post, do nothing or show an alert
      alert("This is your own post");
    } else if (user.matches.includes(post.userId)) {
      // If they're already matched, navigate to chat room
      // You'll need to implement this navigation
      // navigation.navigate('ChatRoom', { matchId: post.userId });
    } else {
      // If not matched, navigate to match screen
      // You'll need to implement this navigation
      // navigation.navigate('MatchScreen', { userId: post.userId });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <Link to="/create-post" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mb-4 inline-block">
        Create New Post
      </Link>
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {posts.map((post) => (
          <div key={post._id} className="bg-white shadow rounded-lg overflow-hidden cursor-pointer" onClick={() => handlePostClick(post)}>
            <div className="p-4">
              <h2 className="font-bold text-xl mb-2">{post.userName}</h2>
              <p className="text-gray-700">{post.text}</p>
            </div>
            {post.image && (
              <img src={post.image} alt="Post" className="w-full h-48 object-cover" />
            )}
            <div className="p-4 border-t">
              <div className="flex justify-between items-center">
                <div className="flex space-x-2">
                  <button onClick={(e) => { e.stopPropagation(); handleReaction(post._id, 'like'); }} className="text-blue-500 hover:text-blue-600">
                    Like ({post.reactions.filter(r => r.type === 'like').length})
                  </button>
                  <button onClick={(e) => { e.stopPropagation(); handleReaction(post._id, 'love'); }} className="text-red-500 hover:text-red-600">
                    Love ({post.reactions.filter(r => r.type === 'love').length})
                  </button>
                </div>
                <span className="text-gray-500 text-sm">{new Date(post.createdAt).toLocaleDateString()}</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}