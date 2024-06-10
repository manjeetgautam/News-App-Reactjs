import { useState } from "react"
import { Navbar } from "./components/Navbar"
import { NewsBoard } from "./components/NewsBoard"

function App() {
  const [category,setCategory] = useState("general")
  return (
    <div className="d-flex flex-column w-100">
      <Navbar setCategory={setCategory}/>
      <NewsBoard category={category}/>
    </div>
  )
}

export default App
