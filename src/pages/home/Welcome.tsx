import styled, { css } from 'styled-components';
import { DeskIslandPng, DeskKingFlokiVideo } from 'src/config/image';
import { AiFillPlayCircle } from 'react-icons/ai';
import { useState } from 'react';
import ModalVideo from 'react-modal-video';

export const Welcome = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <WelcomeContainer>
      <WelcomeCardContainer>
        <WelcomeCardWrapper>
          <video playsInline loop autoPlay muted id="nft-video-desktop">
            <source src={DeskKingFlokiVideo} type="video/mp4" id="kingfloki-video-source-desktop" />
          </video>
          <WelcomeCardContent>
            <WelcomeCardContentWrapper>
              <PrimaryTitle>What is King Floki?</PrimaryTitle>
              <SecondaryTitle>WELCOME TO KING FLOKI WORLD</SecondaryTitle>
              <ContentText>
                King Floki is a creative metaverse built in Webgl, born to improve people’s accessibility and gaming
                experience.
                <br />
                <br /> King Floki is made for everyone but to also allow adult users to generate tangible wealth through
                the game experience.
                <br />
                <br /> Through our tradable wearables, competition winning, land monetisation and constant playing, our
                users are able to experience a fully solvent ecosystem where they are able to generate and manage their
                own prosperity.
              </ContentText>
            </WelcomeCardContentWrapper>
          </WelcomeCardContent>
        </WelcomeCardWrapper>
      </WelcomeCardContainer>
      <WelcomeContent>
        <WelcomeLabel>CREATE. BUILD. INTERACT. OWN. TRADE.</WelcomeLabel>
        <PlayVideoButton onClick={() => setVideoOpen(true)}>
          <ReactIcon>
            <AiFillPlayCircle style={{ width: '100%', height: '100%' }} />
          </ReactIcon>
          Play Video
        </PlayVideoButton>
      </WelcomeContent>
      <WelcomeImage alt="welcome-image" />
      <ModalVideo channel="youtube" isOpen={isVideoOpen} videoId="ZoCALisPLec" onClose={() => setVideoOpen(false)} />
    </WelcomeContainer>
  );
};

const WelcomeContainer = styled.div`
  background-color: #6ad3fe;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 948px;
  position: relative;
  z-index: 1;
  @media screen and (max-width: 1160px) {
    height: 1500px;
  }
  @media screen and (max-width: 768px) {
    height: 1200px;
  }
  @media screen and (max-width: 540px) {
    height: 960px;
  }
`;

const WelcomeCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: absolute;
  top: -90px;
  @media screen and (max-width: 1160px) {
    top: -60px;
  }
`;

const WelcomeCardWrapper = styled.div`
  display: flex;
  height: 400px;
  @media screen and (max-width: 1160px) {
    flex-direction: column-reverse;
    width: 450px;
    height: auto;
  }
  @media screen and (max-width: 768px) {
    width: 370px;
  }

  @media screen and (max-width: 540px) {
    width: 320px;
  }

  @media screen and (max-width: 450px) {
    width: 250px;
  }
`;

const WelcomeLabel = styled.div`
  font-size: 36px;
  font-family: 'gotham-bold';
  text-transform: uppercase;
  @media screen and (max-width: 1160px) {
    padding-top: 20rem;
  }
  @media screen and (max-width: 960px) {
    font-size: 24px;
  }
  @media screen and (max-width: 768px) {
    font-size: 20px;
    padding-top: 30rem;
  }
  @media screen and (max-width: 540px) {
    padding-top: 20rem;
    font-size: 16px;
    width: 240px;
    text-align: center;
  }
`;

const WelcomeImage = styled.img`
  content: url(${DeskIslandPng});
  object-fit: cover;
  position: absolute;
  bottom: 0;
  z-index: 2;
  width: 100%;
  height: 640px;
  @media screen and (max-width: 768px) {
    height: 420px;
  }
`;

const WelcomeCardContent = styled.div`
  width: 502px;
  background: #2b0707 0% 0% no-repeat padding-box;
  @media screen and (max-width: 1160px) {
    width: 100%;
  }
`;

const WelcomeCardContentWrapper = styled.div`
  padding: 50px;
  @media screen and (max-width: 540px) {
    padding: 35px;
  }
  @media screen and (max-width: 450px) {
    padding: 25px;
  }
`;

const PrimaryTitle = styled.div`
  font-size: 35px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 768px) {
    font-size: 24px;
  }
  @media screen and (max-width: 450px) {
    width: 150px;
  }
`;

const SecondaryTitle = styled.div`
  font-size: 14px;
  font-family: 'gotham-bold';
  color: #f48e37;
  padding-top: 15px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ContentText = styled.div`
  font-size: 14px;
  padding-top: 10px;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const Button = css`
  display: flex;
  gap: 6px;
  align-items: center;
  text-transform: uppercase;
  font-size: 12px;
  width: 160px;
  height: 45px;
  justify-content: center;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 140px;
    height: 36px;
  }
  @media screen and (max-width: 390px) {
    width: 92px;
    height: 26px;
    font-size: 6px;
  }
`;

const PlayVideoButton = styled.div`
  ${Button}
  background: #F48E37 0% 0% no-repeat padding-box;
  z-index: 3;
`;

const ReactIcon = styled.div`
  width: 25px;
  height: 25px;
  @media screen and (max-width: 390px) {
    width: 14px;
    height: 14px;
  }
`;

const WelcomeContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 27px;
  align-items: center;
`;
