import { useState} from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';


const CreatePost = () => {
  const navigate = useNavigate() ;
  const [image, setImage] = useState(null);
  const [caption, setCaption] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault(); 

    const formData = new FormData(e.target); 
    
    axios.post("http://localhost:3000/create-post", formData)
    .then((res) => {
      // 1. Clear the form first
      setCaption('');
      setImage(null);
      e.target.reset(); 
      
      // 2. Alert the user
      alert('Post created successfully!');
      
      // 3. Finally, navigate to the feed
      navigate('/feed');
    })
    .catch((err) => {
      console.error(err);
      alert('Error creating post');
    });
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gray-50 p-4">
      <div className="bg-white p-8 rounded-xl shadow-lg w-full max-w-md">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Create a New Post
        </h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
          
          <div className="flex flex-col items-start w-full">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Upload Image
            </label>
            <input 
              type="file" 
              name="image" // <-- CRITICAL: Added name attribute
              accept="image/*" 
              onChange={(e) => setImage(e.target.files[0])}
              className="w-full text-sm text-gray-500 
                         file:mr-4 file:py-2 file:px-4 
                         file:rounded-md file:border-0 
                         file:text-sm file:font-semibold 
                         file:bg-blue-50 file:text-blue-700 
                         hover:file:bg-blue-100 cursor-pointer"
            />
          </div>

          <div className="flex flex-col items-start w-full">
            <label className="text-sm font-semibold text-gray-600 mb-2">
              Caption
            </label>
            <input 
              required 
              type="text" 
              name="caption" // <-- CRITICAL: Added name attribute
              placeholder="Write something nice..." 
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
            />
          </div>

          <button 
            type="submit"
            className="w-full mt-4 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md transition-colors duration-200"
          >
            Submit Post
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreatePost;