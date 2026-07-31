import { useState, useEffect } from 'react';
import axios from 'axios'
const Feed = () => {
  // Dummy data strictly containing id, image, and caption
  const [posts, setPosts] = useState([
    
  ]);

  useEffect(()=>{
    axios.get('http://localhost:3000/posts')
    .then((res) =>{ 
        setPosts(res.data.posts) ;
    })
  },[])

  return (
    <div className="min-h-screen w-full bg-gray-50 py-10 px-4 flex flex-col items-center">
      
      <h1 className="text-2xl font-bold text-gray-800 mb-8 text-center">
        Your Feed
      </h1>

      {/* Container for all posts */}
      <div className="w-full max-w-md space-y-8">
        
        {posts.map((post) => (
          <div key={post._id} className="bg-white rounded-xl shadow-lg overflow-hidden flex flex-col">
            
            {/* Post Image */}
            <div className="w-full bg-gray-100 flex items-center justify-center">
              <img 
                src={post.image} 
                alt="Post content" 
                className="w-full h-auto max-h-125 object-cover"
              />
            </div>

            {/* Post Caption */}
            <div className="p-4 flex flex-col items-start w-full border-t border-gray-50">
              <p className="text-sm text-gray-700">
                {post.caption}
              </p>
            </div>
            
          </div>
        ))}
        
        {/* Fallback if there are no posts */}
        {posts.length === 0 && (
          <p className="text-gray-500 text-center font-medium mt-10">
            No posts to show. Create one!
          </p>
        )}
      </div>
    </div>
  );
}

export default Feed;