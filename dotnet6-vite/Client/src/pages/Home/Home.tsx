import { type FC } from "react";
import { Page } from "@geist-ui/core";
import { useNavigate } from "react-router-dom";

const Home: FC = () => {
  const navigate = useNavigate();
  return (
    <Page>
      <h1 className="self-start">HOME PAGE</h1>
      <button className="self-start" onClick={() => navigate("/login")}>
        CLICK TO GO TO EXAMPLE PAGE
      </button>
    </Page>
  );
};

export default Home;
