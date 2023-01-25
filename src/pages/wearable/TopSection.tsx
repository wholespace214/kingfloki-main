import { KingFloki3D, TopVideo } from 'src/config/image';
import styled from 'styled-components';

export const TopSection = () => {
  return (
    <TopSectionContainer>
      <Video playsInline loop autoPlay muted id="top-desktop">
        <source src={TopVideo} type="video/mp4" id="background-video-source-desktop" />
        Your browser does not support the video tag.
      </Video>
      <TopSectionContent>
        <KingFlokiLogo src={KingFloki3D} alt="kingfloki-logo" />
        <ALink href="https://kingflokiworld.com" rel="noopenner noreferrer" target={'_blank'}>
          <PlayDemoButton>Play Demo</PlayDemoButton>
        </ALink>
      </TopSectionContent>
    </TopSectionContainer>
  );
};

const TopSectionContainer = styled.div`
  background: #ffe3a4 0% 0% no-repeat padding-box;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 65px;
  font-family: 'gotham-bold';
  position: relative;
`;

const Video = styled.video`
  object-fit: cover;
  width: 100%;
  height: 840px;
  @media screen and (max-width: 1200px) {
    height: 720px;
  }

  @media screen and (max-width: 1024px) {
    height: 640px;
  }

  @media screen and (max-width: 720px) {
    height: 540px;
  }
`;

const TopSectionContent = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  gap: 15px;
  align-items: center;
  margin-top: -200px;
  @media screen and (max-width: 1024px) {
    gap: 30px;
  }
`;

const KingFlokiLogo = styled.img`
  width: 325px;
  height: auto;
  @media screen and (max-width: 1200px) {
    width: 270px;
  }

  @media screen and (max-width: 1024px) {
    width: 200px;
  }
`;

const PlayDemoButton = styled.div`
  cursor: pointer;
  width: 170px;
  height: 62px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f48e37 0% 0% no-repeat padding-box;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 1024px) {
    width: 160px;
    height: 52px;
  }

  @media screen and (max-width: 540px) {
    width: 120px;
    height: 40px;
    font-size: 11px;
  }
`;

const ALink = styled.a`
  outline: none;
  text-decoration: none;
  color: inherit;
`;
