# PostApp 📸

A modern, responsive web application that allows users to create image-based posts with captions and view them in a beautifully styled feed. 

## ✨ Features

* **Create Posts:** Upload an image file along with a custom text caption.
* **Image Handling:** Uses `FormData` to properly package and send multipart/form-data (images) to the backend.
* **Dynamic Feed:** View a list of all submitted posts featuring the image and caption.
* **Modern UI:** Clean, responsive, and accessible user interface styled with Tailwind CSS.
* **Seamless Navigation:** Automatic redirects upon successful post creation using React Router.

## 🛠️ Tech Stack

**Frontend:**
* [React (Vite)](https://vitejs.dev/) - Fast and modern frontend tooling
* [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework for styling
* [React Router v6](https://reactrouter.com/) - Client-side routing
* [Axios](https://axios-http.com/) - Promise-based HTTP client for API requests

**Backend (Assumed):**
* [Node.js](https://nodejs.org/) & [Express](https://expressjs.com/) - Server environment and framework
* [Multer](https://github.com/expressjs/multer) - Middleware for handling `multipart/form-data`

## 🚀 Getting Started

### Prerequisites
Make sure you have [Node.js](https://nodejs.org/) and npm installed on your machine.

### Installation

1. **Clone the repository:**
   ```bash
   git clone [https://github.com/your-username/PostApp.git](https://github.com/your-username/PostApp.git)
   cd PostApp
   ```

2. **Navigate to the frontend directory:**
   ```bash
   cd Frontend/Post-App
   ```

3. **Install frontend dependencies:**
   ```bash
   npm install
   ```

4. **Start the development server:**
   ```bash
   npm run dev
   ```
   The frontend will typically be running on `http://localhost:5173`.

### Backend Setup
*Ensure your backend server is running on `http://localhost:3000` to accept Axios requests from the frontend.*
1. Navigate to your backend directory.
2. Install dependencies (`npm install`).
3. Start your backend server (e.g., `node server.js` or `npm run dev`).

## 📁 Key Components

* `CreatePost.jsx`: Contains the form with state management for file uploads and text inputs. Submits data to the `/create-post` API endpoint.
* `Feed.jsx`: Renders the feed of posts using a responsive card layout.

## 🤝 Contributing

Contributions, issues, and feature requests are welcome! 
Feel free to check the [issues page](https://github.com/your-username/PostApp/issues) if you want to contribute.

## 📝 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.
