import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import { Logo } from 'src/config/image';

interface ModalProps {
  isState: boolean;
  setState: (value: boolean) => void;
}

interface SidebarProps {
  setState: (value: boolean) => void;
}

interface ModalContainerProps {
  isShow: boolean;
  children: React.ReactNode;
}

export const Modal = (props: ModalProps) => {
  const { isState, setState } = props;
  return (
    <ModalContainer isShow={isState}>
        <ModalWrapper>
            <SideBar setState={setState} />
        </ModalWrapper>
    </ModalContainer>
  );
};

const ModalStyle = styled.div`
  z-index: 9999999999999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background: #2B0707;
  transition: all linear 0.6s;
`;

const ModalWrapper = styled.div`
    padding: 30px;
`

const ModalContainer = ({ isShow, children }: ModalContainerProps) => {
  return (
    <ModalStyle style={{ visibility: isShow ? 'visible' : 'hidden', opacity: isShow ? 1 : 0 }}>{children}</ModalStyle>
  );
};

const SideBar = ({ setState }: SidebarProps) => {
  return (
    <SideBarContainer>
      <SideBarAction>
        <Img src={Logo} alt="kingpass-logo" />
        <CloseButton setState={setState} />
      </SideBarAction>
      <SideBarContent>
        <SidebarItem>Wearables</SidebarItem>
        <SidebarItem>Evolve</SidebarItem>
        <SidebarItem>King Pass</SidebarItem>
        <SidebarItem>King</SidebarItem>
        <SidebarItem>Docs</SidebarItem>
      </SideBarContent>
    </SideBarContainer>
  );
};

const SideBarContainer = styled.div`
  display: flex;
  flex-direction: column;
  padding-top: 45px;
`;
const SideBarAction = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: relative;
`;
const CloseButton = ({ setState }: SidebarProps) => {
  return (
    <CloseButtonContainer onClick={() => setState(false)}>
      <MdClose style={{ width: '48px', height: '48px' }} />
      Close
    </CloseButtonContainer>
  );
};

const CloseButtonContainer = styled.div`
  cursor: pointer;
  width: 27px;
  height: 27px;
  font-family: 'gotham-bold';
  font-size: 9px;
  color: #F48E37;
  text-transform: uppercase;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: absolute;
  right: 0;
`;

const SideBarContent = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  gap: 50px;
  justify-content: center;
  align-items: center;
  text-align: center;
  padding-top: 100px;
  font-family: 'gotham-bold';
`;

const SidebarItem = styled.div`
  cursor: pointer;
  font-size: 14px;
  text-transform: uppercase;
`;

const Img = styled.img`
  width: auto;
  height: 32px;
`;
