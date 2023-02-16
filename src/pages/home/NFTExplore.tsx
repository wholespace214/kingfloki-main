import { useNavigate } from 'react-router-dom';
import { EbmKFVideo4, KFVideo4, OutnowPng, FloadingCard } from 'src/config/image';
import styled from 'styled-components';

export const NFTExplore = () => {
  const navigate = useNavigate();
  return (
    <NFTExploreContainer>
      <NFTExploreContent>
        <video playsInline loop autoPlay muted id="nft-video-desktop">
          <source src={KFVideo4} type='video/mp4; codecs="hvc1"' id="background-video-source-desktop" />
          <source src={EbmKFVideo4} type="video/webm"></source>
          Your browser does not support the video tag.
        </video>
        <ContentContainer>
          <ContentTitle>
            <OutnowIcon src={OutnowPng} alt="outnow-png" />
            Wearable NFTs
          </ContentTitle>
          <MiniTitle>WEAR DIFFERENT, LOOK KING.</MiniTitle>
          <TextContent>
            KF’s first wearable non-fungible tokens (NFTs) collection is a unique and creative stack of designs that are
            flexibly suited on your metaverse character. Including over 2 million combinations, the NFTs are built to
            create an exclusive feeling, allowing users to trade them as they raise in exclusivity through the minting
            course.
            <br />
            <br /> Find different rarities, colours, shapes and patterns, allow your creativity to flow and create some
            of the coolest and most extravagant outfits. <br />
            <br /> Wear different, look King.
          </TextContent>
          <ExploreButton onClick={() => navigate('/wearable')}>Explore</ExploreButton>
        </ContentContainer>
      </NFTExploreContent>
      <NFTCardsImg alt="floating-card" />
      <GradientBackground />
    </NFTExploreContainer>
  );
};

const NFTExploreContainer = styled.div`
  position: relative;
  background: #2b0707 0% 0% no-repeat padding-box;
  width: 100%;
  height: 1200px;
  @media screen and (max-width: 1240px) {
    display: flex;
    justify-content: center;
  }
`;

const NFTExploreContent = styled.div`
  display: flex;
  flex-direction: column;
  width: 476px;
  padding-top: 38px;
  padding-left: 265px;
  @media screen and (max-width: 1470px) {
    padding-left: 180px;
  }
  @media screen and (max-width: 1330px) {
    padding-left: 120px;
  }
  @media screen and (max-width: 1240px) {
    padding-left: 0;
  }
  @media screen and (max-width: 640px) {
    width: 400px;
  }
  @media screen and (max-width: 450px) {
    width: 350px;
  }
  @media screen and (max-width: 350px) {
    width: 300px;
  }
`;

const ContentContainer = styled.div`
  padding: 37px 37px 0 37px;
  z-index: 3;
`;

const ContentTitle = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-size: 35px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 640px) {
    font-size: 25px;
  }
`;

const OutnowIcon = styled.img`
  width: 50px;
  height: auto;
`;

const MiniTitle = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  color: #f48e37;
  padding-top: 29px;
  font-family: 'gotham-book';
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;

const TextContent = styled.div`
  font-size: 14px;
  font-family: 'gotham-book';
  padding-top: 10px;
  line-height: 20px;
  @media screen and (max-width: 450px) {
    font-size: 12px;
  }
`;
const ExploreButton = styled.div`
  background: #f48e37 0% 0% no-repeat padding-box;
  width: 165px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  font-family: 'gotham-bold';
  margin-top: 50px;
  cursor: pointer;
`;

const GradientBackground = styled.div`
  background: transparent linear-gradient(180deg, #1c070700 0%, #8d490e 100%) 0% 0% no-repeat padding-box;
  width: 100%;
  height: 440px;
  position: absolute;
  bottom: 0;
`;

const NFTCardsImg = styled.img`
  content: url(${FloadingCard});
  width: 620px;
  height: auto;
  position: absolute;
  top: 153px;
  right: 0;
  @media screen and (max-width: 1240px) {
    display: none;
  }
`;
