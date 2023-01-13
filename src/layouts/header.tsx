import styled from 'styled-components';
import { Logo } from 'src/config/image';
import { useNavigate } from 'react-router-dom';

export const Header = () => {
  const navigate = useNavigate();
  return (
    <HeaderContainer>
      <Img src={Logo} alt="kingfloki-logo" onClick={() => navigate("/")} />
      <HeaderAction>
        <HeaderLinks>
            <NavLink>Mode</NavLink>
            <NavLink>King Pass</NavLink>
            <NavLink>Competition</NavLink>
            <NavLink>News</NavLink>
            <NavLink>King</NavLink>
            <NavLink>Docs</NavLink>
        </HeaderLinks>
        <ConnectWallet>
          Connect
        </ConnectWallet>
      </HeaderAction>
    </HeaderContainer>
  );
};

const HeaderContainer = styled.div`
  background-color: #430202;
  height: 62px;
  padding-left: 32px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  @media screen and (max-width: 640px) {
    height: 27px;
    padding-left: 12px;
  }
`

const Img = styled.img`
  width: auto; 
  cursor: pointer;
  height: 32px;
  @media screen and (max-width: 640px) {
    height: 15px;
  }
`

const HeaderAction = styled.div`
  display: flex;
  align-items: center;
  gap: 86px;
  height: 100%;
`

const HeaderLinks = styled.div`
  display: flex;
  align-items: center;
  gap: 36px;
  @media screen and (max-width: 1024px) {
    display: none;
  }
`

const ConnectWallet = styled.div`
  width: 170px;
  height: 100%;
  background-color: #F48E37;
  font-size: 12px;
  font-family: 'gotham-bold';
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  letter-spacing: -0.12px;
  cursor: pointer;
   @media screen and (max-width: 640px) {
    width: 90px;
    font-size: 10px;
  }
`

const NavLink = styled.div`
  font-size: 12px;
  text-transform: uppercase;
  letter-spacing: -0.12px;
  cursor: pointer;
`