import { Routes, Route, useLocation } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";
import UserListPage from "@chia/pages/User";
import { GeistProvider } from "@geist-ui/core";
import { ErrorBoundary } from "@chia/Components/Exception/ErrorBoundary";
import LoginPage from "@chia/pages/Login";
import { Provider } from "react-redux";
import { store } from "@chia/store";
import PageTransition from "@chia/Components/PageTransition";
import NotFound from "@chia/Components/Exception/NotFound";
import RequireAuth from "@chia/Components/RequireAuth";
import IfLogined from "@chia/Components/IfLogined";

function App() {
  const location = useLocation();
  return (
    <ErrorBoundary>
      <Provider store={store}>
        <GeistProvider themeType="dark">
          <PageTransition>
            <Routes location={location.pathname} key={location.pathname}>
              <Route path="/" element={<Home />} />
              <Route path="example" element={<Example />} />
              <Route
                path="login"
                element={
                  <IfLogined>
                    <LoginPage />
                  </IfLogined>
                }
              />
              <Route
                path="users"
                element={
                  <RequireAuth>
                    <UserListPage />
                  </RequireAuth>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </PageTransition>
        </GeistProvider>
      </Provider>
    </ErrorBoundary>
  );
}

export default App;
