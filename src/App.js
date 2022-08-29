import { Route, Routes } from "react-router-dom";
import "./App.css";
import Featureshow from "./component/featureshow";
import Projectshow from "./component/projectshow";
import Todolistshow from "./component/todolistshow";


function App() {
  const a = "hello world"
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Projectshow cmp={a} />} />
        <Route path="/feature/:index" element={<Featureshow />} />
        <Route path="/todolist/:index/:i" element={<Todolistshow />} />
        <Route path="*" element={<>Page Not Found</>} />
      </Routes>
    </div>
  );
}

export default App;
