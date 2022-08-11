import { Routes, Route, useLocation, useParams } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";
import UserListPage from "@chia/pages/User";
import LoginPage from "@chia/pages/Login";
import PageTransition from "@chia/Components/PageTransition";
import NotFound from "@chia/Components/Exception/NotFound";
import RequireAuth from "@chia/Components/RequireAuth";
import IfLogined from "@chia/Components/IfLogined";
import { type FC } from "react";
import UserDetailPage from "@chia/pages/User/UserDetail";
import Redirect from "@chia/Components/Redirect";
import { useReadLocalStorage } from "usehooks-ts";

const Router: FC = () => {
  const location = useLocation();
  const { userId } = useParams();
  const userData = useReadLocalStorage("userData");

  return (
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
        <Route
          path="users/:userId"
          element={
            <RequireAuth>
              <UserDetailPage />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </PageTransition>
  );
};

export default Router;
