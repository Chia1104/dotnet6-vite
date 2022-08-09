import { Routes, Route } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { ErrorBoundary } from "@chia/Components/Exception/ErrorBoundary";
import LoginPage from "@chia/pages/Login";
import { Provider } from "react-redux";
import { store } from "@chia/store";
import { useLocalStorage } from "usehooks-ts";

function App() {
  const [userData, setUserData] = useLocalStorage("userData", null);
  console.log(userData);
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <GeistProvider>
          <CssBaseline />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="example" element={<Example />} />
            <Route path="login" element={<LoginPage />} />
          </Routes>
        </GeistProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
