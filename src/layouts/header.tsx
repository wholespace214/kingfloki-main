import { useState, useEffect } from 'react';
import styled from 'styled-components';
import { NavDiscordIcon, Logo, NavOpenseaIcon, NavTwitterIcon, NavTelegramIcon } from 'src/config/image';
import { useNavigate } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { Modal } from 'src/components/Modal';
import { CustomConnectButton } from 'src/components/Button';
import { toast } from 'react-toastify';
import { isAbleToConnect } from 'src/contracts';

export const Header = () => {
  const navigate = useNavigate();
  const [isOpen, setOpen] = useState(false);
  const [isAbleConnect, setAbleConnect] = useState(false);
  const handleTempClick = () => {
    toast.error('Be ready to mint on the 17th of February, stay tuned!');
  };

  useEffect(() => {
    (async () => {
      const isAble = await isAbleToConnect();
      if (isAble !== undefined) setAbleConnect(isAble);
    })();
  }, []);

  return (
    <>
      <HeaderContainer>
        <NavSection>
          <MobileNavIcon onClick={() => setOpen(true)}>
            <FiMenu style={{ width: '100%', height: '100%' }} />
          </MobileNavIcon>
          <Img src={Logo} alt="kingfloki-logo" onClick={() => navigate('/')} />
        </NavSection>
        <HeaderAction>
          <HeaderLinks>
            <NavLink onClick={() => navigate('/wearable')}>Wearables</NavLink>
            {/* <NavLink>Evolve</NavLink> */}
            <ALink href="https://kingpass.finance/" rel="noopenner noreferror" target={'_blank'}>
              <NavLink>King pass</NavLink>
            </ALink>
            <ALink href="https://t.me/kingannouncements" rel="noopenner noreferror" target={'_blank'}>
              <NavLink>News</NavLink>
            </ALink>
            <ALink href="https://kingworld.finance/" rel="noopenner noreferror" target={'_blank'}>
              <NavLink>King</NavLink>
            </ALink>
            <ALink
              href="https://king-finance.gitbook.io/king-whitepaper/king-ecosystem/king-floki"
              rel="noopenner noreferror"
              target={'_blank'}
            >
              <NavLink>Docs</NavLink>
            </ALink>
          </HeaderLinks>
          <ExternalLinks>
            <ExternalLink href="https://twitter.com/kingfinance" rel="noopenner noreferror" target={'_blank'}>
              <img src={NavTwitterIcon} alt="twitter-icon" style={{ width: '100%', height: '100%' }} />
            </ExternalLink>
            <ExternalLink href="https://t.me/KlNGfinance" rel="noopenner noreferror" target={'_blank'}>
              <img src={NavTelegramIcon} alt="telegram-icon" style={{ width: '100%', height: '100%' }} />
            </ExternalLink>
            <ExternalLink href="https://discord.gg/gtzFGPacK9" rel="noopenner noreferror" target={'_blank'}>
              <img src={NavDiscordIcon} alt="discord-icon" style={{ width: '100%', height: '100%' }} />
            </ExternalLink>
            <ExternalLink href="" rel="noopenner noreferror">
              <img src={NavOpenseaIcon} alt="opeansea-icon" style={{ width: '100%', height: '100%' }} />
            </ExternalLink>
          </ExternalLinks>
          {isAbleConnect ? (
            <CustomConnectButton />
          ) : (
            <TempConnectButton onClick={handleTempClick}>Connect</TempConnectButton>
          )}
        </HeaderAction>
      </HeaderContainer>
      <Modal isState={isOpen} setState={setOpen} />
    </>
  );
};

const HeaderContainer = styled.div`
  background-color: #490800;
  height: 62px;
  padding-left: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    height: 36px;
    padding-left: 12px;
  }
`;

const Img = styled.img`
  width: auto;
  cursor: pointer;
  height: 32px;
  @media screen and (max-width: 640px) {
    height: 24px;
  }
`;

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 52px;
  height: 100%;
`;

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

const ExternalLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  @media screen and (max-width: 1220px) {
    display: none;
  }
`;

const ExternalLink = styled.a`
  width: 25px;
  height: auto;
  cursor: pointer;
`;

const NavLink = styled.div`
  font-size: 14px;
  text-transform: uppercase;
  letter-spacing: -0.12px;
  cursor: pointer;
  font-family: 'gotham-book';
`;

const NavSection = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
`;

const MobileNavIcon = styled.div`
  cursor: pointer;
  width: 32px;
  height: 32px;
  display: none;
  @media screen and (max-width: 1024px) {
    display: block;
  }

  @media screen and (max-width: 640px) {
    width: 24px;
    height: 24px;
  }
`;

const ALink = styled.a`
  outline: none;
  text-decoration: none;
  color: inherit;
`;

const TempConnectButton = styled.div`
  width: 170px;
  height: 62px;
  text-transform: uppercase;
  background-color: #f48e37;
  font-size: 14px;
  font-family: 'gotham-bold';
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-transform: uppercase; */
  color: #ffffff;
  border: none;
  letter-spacing: -0.12px;
  cursor: pointer;
  @media screen and (max-width: 640px) {
    width: 90px;
    font-size: 10px;
  }
`;
