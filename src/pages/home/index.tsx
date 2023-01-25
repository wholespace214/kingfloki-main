import { Combination } from "./Combination";
import { Explanation } from "./Explanation";
import { GamePanel } from "./GamePanel";
import { GiftCards } from "./GiftCards";
import { MingPage } from "./MintPage";
import { Wearable } from "./Wearable";

export const Home = () => {
  
  return (
    <>
      <Wearable />
      <MingPage />
      <Explanation />
      <Combination />
      <GiftCards />
      <GamePanel />
    </>
  )
};

