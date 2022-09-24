import Header from "./App/component/Header/Header";
import { Route, Routes } from "react-router-dom";
import Detail from "./App/Features/Page/Detail/detail";
import Home from "./App/Features/Page/Home/Home";
import Nopage from "./App/Features/Page/Nopage";

function App() {
  return (
    <div className="App  ">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/detail/:productId" element={<Detail />} />
        <Route path="*" element={<Nopage/>} />
      </Routes>
    </div>
  );
}

export default App;
