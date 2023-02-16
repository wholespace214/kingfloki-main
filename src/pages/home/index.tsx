import { DiveWorld } from './DiveWorld';
import { NFTExplore } from './NFTExplore';
import { PlayCards } from './PlayCards';
import { TopSection } from './TopSection';
import { Welcome } from './Welcome';

export const Home = () => {
  return (
    <>
      <TopSection />
      <Welcome />
      <NFTExplore />
      <PlayCards />
      <DiveWorld />
    </>
  );
};
