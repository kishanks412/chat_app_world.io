import { Navigate, Route, Routes } from "react-router-dom";
import Home from "./Home";
import Chat from "./Chat";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/chat' element={<Chat />}/>
      </Routes>
    </div>
  );
}

export default App;
