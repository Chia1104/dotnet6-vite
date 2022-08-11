import { useNavigate } from "react-router-dom";
import { GeistProvider, Image } from "@geist-ui/core";
import { useLocalStorage } from "usehooks-ts";
import { getRoleImage } from "@chia/util/services";
import Avatar from "@chia/Components/Avatar";
import { useAppDispatch } from "@chia/hooks/useAppDispatch";
import { useAppSelector } from "@chia/hooks/useAppSelector";
import {
  activeDrawer,
  selectActionSheet,
} from "@chia/store/modules/ActionSheet";
import Drawer from "@chia/Components/Drawer";
import Router from "@chia/Components/Router";
import RankImg from "./assets/rank.png";
import PackageImg from "./assets/package.png";
import PaperImg from "./assets/paper.png";
import LoginImg from "./assets/login.png";
import Logout from "@chia/Components/Icons/Logout";
import Anonymous from "./assets/anonymous.png";

function App() {
  const [userData, setUserData] = useLocalStorage("userData", null);
  const dispatch = useAppDispatch();
  const actionSheet = useAppSelector(selectActionSheet);
  const navigate = useNavigate();

  const handleLogout = () => {
    setUserData(null);
    navigate("/");
  };

  return (
    <GeistProvider themeType="dark">
      <div className="fixed top-0 right-0 mr-10 mt-10 z-50">
        <Avatar
          width="70px"
          height="70px"
          // @ts-ignore
          src={userData ? getRoleImage(userData.role) : Anonymous}
          // @ts-ignore
          text={userData?.name || "Anonymous"}
          onClick={() => dispatch(activeDrawer())}
        />
      </div>
      <Drawer
        // @ts-ignore
        title={userData?.name || "You are not login"}
        // @ts-ignore
        subtitle={userData?.role || ""}
        visible={actionSheet.drawer.isOpen}
        onClose={() => dispatch(activeDrawer())}
        height="370px">
        <>
          {userData ? (
            <div className="flex flex-col justify-center items-center">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full mb-10">
                <Avatar
                  width="100px"
                  height="100px"
                  src={RankImg}
                  onClick={() => {
                    navigate("/users");
                    dispatch(activeDrawer());
                  }}
                />
                <Avatar
                  width="100px"
                  height="100px"
                  src={PackageImg}
                  onClick={() => {
                    // @ts-ignore
                    navigate(`users/${userData?.userId}`);
                    dispatch(activeDrawer());
                  }}
                />
                <Avatar
                  width="100px"
                  height="100px"
                  src={PaperImg}
                  onClick={() => {
                    navigate("/dist");
                    dispatch(activeDrawer());
                  }}
                />
              </div>
              <button
                onClick={handleLogout}
                className="py-1 px-2 rounded-lg hover:bg-primary transition flex justify-center items-center">
                <span className="mr-1">
                  <Logout />
                </span>
                LOGOUT
              </button>
            </div>
          ) : (
            <div className="flex justify-center items-center">
              <Avatar
                width="100px"
                height="100px"
                src={LoginImg}
                onClick={() => {
                  navigate("/login");
                  dispatch(activeDrawer());
                }}
              />
            </div>
          )}
        </>
      </Drawer>
      <Router />
    </GeistProvider>
  );
}

export default App;
