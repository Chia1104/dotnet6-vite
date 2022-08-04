import { Routes, Route } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { ErrorBoundary } from "@chia/Components/Exception/ErrorBoundary";

function App() {
  return (
    <ErrorBoundary>
      <GeistProvider>
        <CssBaseline />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="example" element={<Example />} />
        </Routes>
      </GeistProvider>
    </ErrorBoundary>
  );
}

export default App;
