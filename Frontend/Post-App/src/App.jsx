import { Route, Routes } from "react-router-dom"
import CreatePost from "./pages/CreatePost"
import Feed from "./pages/Feed"

const App = () => {
  return (
    <div className=" h-screen w-full bg-black text-white">
      <Routes>
        <Route path = '/create-post' element = {<CreatePost/>}/>
        <Route path = '/feed' element = {<Feed/>}/>
      </Routes>
    </div>
  )
}

export default App
