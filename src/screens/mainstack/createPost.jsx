// import React, { useState, useRef } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import API_URL from './config';

// export default function CreatePost() {
//   const [text, setText] = useState('');
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('text', text);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.post(`${API_URL}/api/posts`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//         },
//       });
//       alert('Post created successfully');
//       navigate('/posts');
//     } catch (error) {
//       console.error('Error creating post:', error);
//       alert('Failed to create post');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="font-bold mb-6"
//       style={{
//         fontSize: '16px',
//         textAlign: 'center'
//       }}>Create New Post</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="text" className="block mb-2">Post Content</label>
//           <textarea
//             id="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             className="w-full px-3 py-2 border rounded"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="image" className="block mb-2">Image (optional)</label>
//           <input
//             type="file"
//             id="image"
//             onChange={handleImageChange}
//             accept="image/*"
//             ref={fileInputRef}
//             className="hidden"
//           />
//           <button
//             type="button"
//             onClick={() => fileInputRef.current.click()}
//             className="bg-gray-200 px-4 py-2 rounded hover:bg-gray-300"
//           >
//             Choose Image
//           </button>
//           {preview && (
//             <img src={preview} alt="Preview" className="mt-2 max-w-full h-auto" />
//           )}
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded  hover:bg-blue-600">
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// }


// import React, { useState, useRef, useContext } from 'react';
// import axios from 'axios';
// import { useNavigate } from 'react-router-dom';
// import { AuthContext } from '../../AuthContext';
// import API_URL from './config';

// export default function CreatePost() {
//   const [text, setText] = useState('');
//   const [image, setImage] = useState(null);
//   const [preview, setPreview] = useState(null);
//   const fileInputRef = useRef(null);
//   const navigate = useNavigate();
//   const { user } = useContext(AuthContext);

//   const handleImageChange = (e) => {
//     const file = e.target.files[0];
//     if (file) {
//       setImage(file);
//       const reader = new FileReader();
//       reader.onloadend = () => {
//         setPreview(reader.result);
//       };
//       reader.readAsDataURL(file);
//     }
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     const formData = new FormData();
//     formData.append('text', text);
//     formData.append('userId', user._id);
//     formData.append('userName', `${user.firstName} ${user.lastName}`);
//     if (image) {
//       formData.append('image', image);
//     }

//     try {
//       await axios.post(`${API_URL}/api/posts`, formData, {
//         headers: {
//           'Content-Type': 'multipart/form-data',
//           'Authorization': `Bearer ${localStorage.getItem('token')}`
//         },
//       });
//       alert('Post created successfully');
//       navigate('/posts');
//     } catch (error) {
//       console.error('Error creating post:', error);
//       alert('Failed to create post');
//     }
//   };

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-2xl font-bold mb-6 text-center">Create New Post</h1>
//       <form onSubmit={handleSubmit} className="max-w-md mx-auto">
//         <div className="mb-4">
//           <label htmlFor="text" className="block mb-2 font-medium">Post Content</label>
//           <textarea
//             id="text"
//             value={text}
//             onChange={(e) => setText(e.target.value)}
//             className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
//             required
//           ></textarea>
//         </div>
//         <div className="mb-4">
//           <label htmlFor="image" className="block mb-2 font-medium">Image (optional)</label>
//           <input
//             type="file"
//             id="image"
//             onChange={handleImageChange}
//             accept="image/*"
//             ref={fileInputRef}
//             className="hidden"
//           />
//           <button
//             type="button"
//             onClick={() => fileInputRef.current.click()}
//             className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
//           >
//             Choose Image
//           </button>
//           {preview && (
//             <img src={preview} alt="Preview" className="mt-2 max-w-full h-auto rounded-md" />
//           )}
//         </div>
//         <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
//           Create Post
//         </button>
//       </form>
//     </div>
//   );
// }


import React, { useState, useRef, useContext } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthContext';
import API_URL from './config';

export default function CreatePost() {
  const [text, setText] = useState('');
  const [image, setImage] = useState(null);
  const [preview, setPreview] = useState(null);
  const fileInputRef = useRef(null);
  const navigate = useNavigate();
  const { user } = useContext(AuthContext);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append('text', text);
    formData.append('userId', user._id);
    formData.append('userName', `${user.firstName} ${user.lastName}`);
    if (image) {
      formData.append('image', image);
    }

    try {
      await axios.post(`${API_URL}/api/posts`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
          'Authorization': `Bearer ${localStorage.getItem('token')}`
        },
      });
      alert('Post created successfully');
      navigate('/posts');
    } catch (error) {
      console.error('Error creating post:', error);
      alert('Failed to create post');
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-2xl font-bold mb-6 text-center">Create New Post</h1>
      <form onSubmit={handleSubmit} className="max-w-md mx-auto">
        <div className="mb-4">
          <label htmlFor="text" className="block mb-2 font-medium">Post Content</label>
          <textarea
            id="text"
            value={text}
            onChange={(e) => setText(e.target.value)}
            className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block mb-2 font-medium">Image (optional)</label>
          <input
            type="file"
            id="image"
            onChange={handleImageChange}
            accept="image/*"
            ref={fileInputRef}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => fileInputRef.current.click()}
            className="bg-gray-200 px-4 py-2 rounded-md hover:bg-gray-300 transition duration-300"
          >
            Choose Image
          </button>
          {preview && (
            <img src={preview} alt="Preview" className="mt-2 max-w-full h-auto rounded-md" />
          )}
        </div>
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-md hover:bg-blue-600 transition duration-300">
          Create Post
        </button>
      </form>
    </div>
  );
}