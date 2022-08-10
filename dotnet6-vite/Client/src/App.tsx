import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";
import UserListPage from "@chia/pages/User";
import { CssBaseline, GeistProvider } from "@geist-ui/core";
import { ErrorBoundary } from "@chia/Components/Exception/ErrorBoundary";
import LoginPage from "@chia/pages/Login";
import { Provider } from "react-redux";
import { store } from "@chia/store";
import { useLocalStorage } from "usehooks-ts";
import PageTransition from "@chia/Components/PageTransition";

function App() {
  const [userData, setUserData] = useLocalStorage("userData", null);
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <GeistProvider>
          {/*<CssBaseline />*/}
          <PageTransition>
            <Routes location={location.pathname} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="example" element={<Example />} />
              <Route path="login" element={<LoginPage />} />
              <Route path="users" element={<UserListPage />} />
            </Routes>
          </PageTransition>
        </GeistProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
