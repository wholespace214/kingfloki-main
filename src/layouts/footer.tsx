import styled from 'styled-components';
import { DiscordIcon, FooterLogoSvg, GitbookIcon, TelegramIcon, TwitterIcon, YoutubeIcon } from 'src/config/image';

export const Footer = () => {
  return (
    <FooterContainer>
      <LogoSection>
        <SmallText>POWERD BY</SmallText>
        <KingLogo src={FooterLogoSvg} alt="footer-logo" />
      </LogoSection>
      <FooterLinks>
        {/* <FooterLink>Cookie prefereneces</FooterLink>
        <VerticalDivider>|</VerticalDivider> */}
        <FooterLink>Privacy police</FooterLink>
        <VerticalDivider>|</VerticalDivider>
        <FooterLink>Term of use</FooterLink>
      </FooterLinks>
      <SocialLinks>
        <a href={'https://t.me/KlNGfinance'} rel="noopener noreferrer" target={'_blank'}>
          <SocialIcon src={TelegramIcon} alt="social-icon" />
        </a>
        <a href={'https://twitter.com/kingfinance'} rel="noopener noreferrer" target={'_blank'}>
          <SocialIcon src={TwitterIcon} alt="social-icon" />
        </a>
        <a href={'https://www.youtube.com/@kingfinanceco'} rel="noopener noreferrer" target={'_blank'}>
          <SocialIcon src={YoutubeIcon} alt="social-icon" />
        </a>
        <a href={'https://king-finance.gitbook.io/king-whitepaper/'} rel="noopener noreferrer" target={'_blank'}>
          <SocialIcon src={GitbookIcon} alt="social-icon" />
        </a>
        <a href={'https://discord.gg/kingfinance'} rel="noopener noreferrer" target={'_blank'}>
          <SocialIcon src={DiscordIcon} alt="social-icon" />
        </a>
      </SocialLinks>
    </FooterContainer>
  );
};

const FooterContainer = styled.div`
  min-height: 347px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #1c0707;
  flex-direction: column;
  gap: 2rem;
`;

const LogoSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3px;
`;

const SmallText = styled.div`
  font-size: 10px;
  font-family: 'gotham-bold';
  color: #ffffff;
`;

const KingLogo = styled.img`
  width: 62px;
  height: auto;
`;

const FooterLinks = styled.div`
  display: flex;
  gap: 1.5rem;
  @media screen and (max-width: 390px) {
    gap: 0.8rem;
  }
`;

const FooterLink = styled.a`
  font-size: 14px;
  text-align: center;
  color: #ffffff;
  cursor: pointer;
  @media screen and (max-width: 450px) {
    font-size: 11px;
  }
`;

const VerticalDivider = styled.div`
  font-size: 14px;
  color: #ffffff;
  @media screen and (max-width: 450px) {
    font-size: 11px;
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 60px;
  align-items: center;
  @media screen and (max-width: 450px) {
    gap: 40px;
  }
`;

const SocialIcon = styled.img`
  cursor: pointer;
  width: 24px;
  height: auto;
  @media screen and (max-width: 390px) {
    width: 20px;
    height: auto;
  }
`;
