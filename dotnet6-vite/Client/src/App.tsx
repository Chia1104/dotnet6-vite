import { Routes, Route, Link } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="example" element={<Example />} />
    </Routes>
  );
}

export default App;
