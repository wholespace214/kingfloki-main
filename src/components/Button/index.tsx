import styled from 'styled-components';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export const CustomConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const isReady = mounted && authenticationStatus !== 'loading';
        const hasConnected =
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          isReady &&
          account != null &&
          chain != null &&
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!hasConnected) {
                return (
                  <AwesomeButtonContainer onClick={openConnectModal} type="button">
                    CONNECT
                  </AwesomeButtonContainer>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <AwesomeButtonContainer onClick={openChainModal} type="button">
                    WRONG NETWORK
                  </AwesomeButtonContainer>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  {/* <AwesomeButtonContainer
                    onClick={openChainModal}
                    style={{ display: 'flex', alignItems: 'center' }}
                    type="button"
                  >
                    {chain.hasIcon && (
                      <div
                        style={{
                          background: chain.iconBackground,
                          width: 12,
                          height: 12,
                          borderRadius: 999,
                          overflow: 'hidden',
                          marginRight: 4
                        }}
                      >
                        {chain.iconUrl != null && (
                          <img alt={chain.name ?? 'Chain icon'} src={chain.iconUrl} style={{ width: 12, height: 12 }} />
                        )}
                      </div>
                    )}
                    {chain.name}
                  </AwesomeButtonContainer> */}
                  <AwesomeButtonContainer onClick={openAccountModal} type="button">
                    {account.displayName}
                    {/* {account.displayBalance != null ? ` (${account.displayBalance})` : ''} */}
                  </AwesomeButtonContainer>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const AwesomeButtonContainer = styled.button`
  width: 170px;
  height: 62px;
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

export const WalletConnectButton = () => {
  return (
    <ConnectButton.Custom>
      {({ account, chain, openAccountModal, openChainModal, openConnectModal, authenticationStatus, mounted }) => {
        // Note: If your app doesn't use authentication, you
        // can remove all 'authenticationStatus' checks
        const isReady = mounted && authenticationStatus !== 'loading';
        const hasConnected =
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          isReady &&
          account != null &&
          chain != null &&
          // eslint-disable-next-line @typescript-eslint/strict-boolean-expressions
          (!authenticationStatus || authenticationStatus === 'authenticated');
        return (
          <div
            {...(!isReady && {
              'aria-hidden': true,
              style: {
                opacity: 0,
                pointerEvents: 'none',
                userSelect: 'none'
              }
            })}
          >
            {(() => {
              if (!hasConnected) {
                return (
                  <WalletButtonContainer onClick={openConnectModal} type="button">
                    CONNECT
                  </WalletButtonContainer>
                );
              }
              if (chain.unsupported ?? false) {
                return (
                  <WalletButtonContainer onClick={openChainModal} type="button">
                    WRONG NETWORK
                  </WalletButtonContainer>
                );
              }
              return (
                <div style={{ display: 'flex', gap: 12 }}>
                  <WalletButtonContainer onClick={openAccountModal} type="button">
                    {account.displayName}
                  </WalletButtonContainer>
                </div>
              );
            })()}
          </div>
        );
      }}
    </ConnectButton.Custom>
  );
};

const WalletButtonContainer = styled.button`
  background: #f48e37 0% 0% no-repeat padding-box;
  height: 56px;
  border: none;
  width: 373px;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'gotham-bold';
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 960px) {
    width: 100%;
    height: 42px;
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    height: 32px;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    height: 27px;
    font-size: 11px;
  }
`;
