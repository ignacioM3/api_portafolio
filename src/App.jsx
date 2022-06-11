import { BrowserRouter, Route, Routes } from "react-router-dom"
import './styles/App.css';
import Home from "./pages/Home"


function App() {
  
  return (
    <BrowserRouter>
        <Routes>
          <Route path="/">
            <Route index element={<Home/>}/>

          </Route>
        </Routes>
    </BrowserRouter>
  )
}

export default App
