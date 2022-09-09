import { Routes, Route, useLocation, Navigate } from "react-router-dom";
import Home from "@chia/pages/Home";
import Example from "@chia/pages/Example";
import UserListPage from "@chia/pages/User";
import LoginPage from "@chia/pages/Login";
import { PageTransition, RequireAuth, IfLogined } from "@chia/components";
import { NotFound } from "@chia/components/Exception";
import { type FC } from "react";
import UserDetailPage from "@chia/pages/User/UserDetail";
import RegisterPage from "@chia/pages/Register";

const Router: FC = () => {
  const location = useLocation();

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
          path="register"
          element={
            <IfLogined>
              <RegisterPage />
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
        <Route path="/doc" element={<Navigate to="/" />} />
      </Routes>
    </PageTransition>
  );
};

export default Router;
