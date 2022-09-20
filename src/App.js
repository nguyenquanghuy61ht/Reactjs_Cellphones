import "./App.css";
import Header from "./App/Header";
import Content from "./App/Content";
import { Route, Routes } from "react-router-dom";
import Detail from "./App/component/Page/Detail/detail";
function App() {
  return (
    <div className="App ">
      <Header></Header>
      <Routes>
        <Route path="/" element={<Content />} />
        <Route path="/detail/:productId" element={<Detail/>} />
      </Routes>
    </div>
  );
}

export default App;
