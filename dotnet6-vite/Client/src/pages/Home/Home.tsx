import { type FC, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import GameStorySec from "@chia/components/Animation/GameStorySec";
import ButtonPrimary from "@chia/components/ButtonPrimary";
import { useReadLocalStorage } from "usehooks-ts";
import type { LocalUser } from "@chia/shared/types";

const Home: FC = () => {
  const navigate = useNavigate();
  const userData = useReadLocalStorage<LocalUser>("userData");
  const checkUser = () => (userData ? navigate("/users") : navigate("/login"));

  return (
    <div className="c-main c-container">
      <div className="w-full md:w-2/3 h-1/2 flex justify-center items-end fixed bottom-0 -z-10 brightness-50">
        <GameStorySec />
      </div>
      <h1 className="fixed top-14 c-text-purple-to-pink">
        <span className="text-6xl font-bold">STORY</span>
      </h1>
      <div className="w-full h-[400px] fixed top-40 overflow-hidden c-container px-10">
        <div className="absolute top-0 left-0 c-bg-gradient-primary-to-t z-10 h-[100px] w-full" />
        <div className="py-12 animate-marqueeY">
          <span className="text-2xl leading-loose">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her not to do so, because
            there were thousands of bad Commas, wild Question Marks and devious
            Semikoli, but the Little Blind Text didn’t listen.
          </span>
        </div>
        <div className="py-12 animate-marqueeY">
          <span className="text-2xl leading-loose">
            Far far away, behind the word mountains, far from the countries
            Vokalia and Consonantia, there live the blind texts. Separated they
            live in Bookmarksgrove right at the coast of the Semantics, a large
            language ocean. A small river named Duden flows by their place and
            supplies it with the necessary regelialia. It is a paradisematic
            country, in which roasted parts of sentences fly into your mouth.
            Even the all-powerful Pointing has no control about the blind texts
            it is an almost unorthographic life One day however a small line of
            blind text by the name of Lorem Ipsum decided to leave for the far
            World of Grammar. The Big Oxmox advised her not to do so, because
            there were thousands of bad Commas, wild Question Marks and devious
            Semikoli, but the Little Blind Text didn’t listen.
          </span>
        </div>
      </div>
      <div className="fixed bottom-40">
        <ButtonPrimary onClick={checkUser}>
          <h2 className="text-2xl">PLAY</h2>
        </ButtonPrimary>
      </div>
    </div>
  );
};

export default Home;
