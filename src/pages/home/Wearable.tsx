import { useState } from 'react';
import styled, { css } from 'styled-components';
import { WearableBg, KingFloki3D, FooterLogoSvg, NftGamesSvg, EthereumSvg, CharactersPng } from 'src/config/image';
import { AiFillPlayCircle } from 'react-icons/ai';
import { SiDiscord } from 'react-icons/si';
import ModalVideo from 'react-modal-video';

export const Wearable = () => {
  const [isVideoOpen, setVideoOpen] = useState(false);
  return (
    <WearableContainer>
      <Img src={KingFloki3D} alt="king-floki-3d" />
      <WearableText>Wearables</WearableText>
      <WearText>WEAR DIFFERENT, LOOK KING.</WearText>
      <KingIcons>
        <NFTGameIcon>
          <img src={NftGamesSvg} alt="nft-games" />
        </NFTGameIcon>
        <KingPowerIcon>
          <img src={FooterLogoSvg} alt="footer-logo" />
        </KingPowerIcon>
        <EthereumIcon>
          <img src={EthereumSvg} alt="ethereum-icon" />
        </EthereumIcon>
      </KingIcons>
      <ButtonGroup>
        <PlayVideoButton onClick={() => setVideoOpen(true)}>
          <ReactIcon>
            <AiFillPlayCircle style={{ width: '100%', height: '100%' }} />
          </ReactIcon>
          Play Video
        </PlayVideoButton>

        <ALink href="https://discord.gg/gtzFGPacK9" rel="noopenner noreferrer" target={'_blank'}>
          <DiscordButton>
            <ReactIcon>
              <SiDiscord style={{ width: '100%', height: '100%' }} />
            </ReactIcon>
            Join Discord
          </DiscordButton>
        </ALink>
      </ButtonGroup>
      <Characters>
        <img src={CharactersPng} alt="character-png" style={{ width: '100%', height: '100%' }} />
      </Characters>
      <ModalVideo channel="youtube" isOpen={isVideoOpen} videoId="ZoCALisPLec" onClose={() => setVideoOpen(false)} />
    </WearableContainer>
  );
};

const WearableContainer = styled.div`
  background-image: url(${WearableBg});
  background-repeat: no-repeat;
  background-size: cover;
  padding: 18px 52px;
  height: 800px;
  display: flex;
  align-items: center;
  flex-direction: column;
  position: relative;
  @media screen and (max-width: 1024px) {
    height: 650px;
  }

  @media screen and (max-width: 540px) {
    height: 570px;
  }

  @media screen and (max-width: 480px) {
    height: 530px;
  }

  @media screen and (max-width: 390px) {
    height: 420px;
  }
`;

const Img = styled.img`
  width: auto;
  height: 213px;
  @media screen and (max-width: 1024px) {
    height: 140px;
  }
  @media screen and (max-width: 390px) {
    height: 90px;
  }
`;

const WearableText = styled.div`
  font-size: 178px;
  font-family: 'funkies';
  margin-top: -115px;
  @media screen and (max-width: 1024px) {
    font-size: 120px;
    margin-top: -75px;
  }
  @media screen and (max-width: 390px) {
    font-size: 94px;
    margin-top: -50px;
  }
`;

const WearText = styled.div`
  font-size: 36px;
  font-family: 'gotham-bold';
  text-transform: uppercase;
  @media screen and (max-width: 1024px) {
    font-size: 24px;
  }
  @media screen and (max-width: 540px) {
    font-size: 15px;
  }

  @media screen and (max-width: 350px) {
    font-size: 13px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  padding-top: 28px;
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
`;
const DiscordButton = styled.div`
  ${Button}
  background: #7289DA 0% 0% no-repeat padding-box;
`;

const ReactIcon = styled.div`
  width: 25px;
  height: 25px;
  @media screen and (max-width: 390px) {
    width: 14px;
    height: 14px;
  }
`;

const KingIcons = styled.div`
  display: flex;
  gap: 15px;
  align-items: center;
  flex-direction: column;
  position: absolute;
  right: 50px;
  top: 50px;
  @media screen and (max-width: 768px) {
    flex-direction: row;
    position: static;
    gap: 20px;
    padding-top: 20px;
  }
  @media screen and (max-width: 390px) {
    gap: 15px;
  }
`;

const NFTGameIcon = styled.div`
  width: 85px;
  height: 85px;
  cursor: pointer;
  @media screen and (max-width: 1024px) {
    width: 65px;
    height: 65px;
  }

  @media screen and (max-width: 390px) {
    width: 45px;
    height: 45px;
  }
`;

const KingPowerIcon = styled.div`
  width: 70px;
  cursor: pointer;
  height: 70px;
  @media screen and (max-width: 1024px) {
    width: 55px;
    height: 55px;
  }
  @media screen and (max-width: 768px) {
    margin-left: 10px;
  }

  @media screen and (max-width: 390px) {
    width: 30px;
    height: 30px;
  }
`;

const EthereumIcon = NFTGameIcon;

const Characters = styled.div`
  width: 740px;
  height: auto;
  z-index: 9999;
  position: absolute;
  bottom: -80px;
  @media screen and (max-width: 1024px) {
    width: 680px;
  }

  @media screen and (max-width: 768px) {
    width: 580px;
  }

  @media screen and (max-width: 640px) {
    width: 540px;
    bottom: -60px;
  }

  @media screen and (max-width: 540px) {
    width: 450px;
  }

  @media screen and (max-width: 480px) {
    width: 380px;
  }

  @media screen and (max-width: 390px) {
    width: 280px;
    bottom: -40px;
  }
`;

const ALink = styled.a`
  outline: none;
  text-decoration: none;
  color: inherit;
`;
