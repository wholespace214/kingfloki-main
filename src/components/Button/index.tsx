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
  background-color: #F48E37;
  font-size: 14px;
  font-family: 'gotham-bold';
  display: flex;
  justify-content: center;
  align-items: center;
  /* text-transform: uppercase; */
  color: #FFFFFF;
  border: none;
  letter-spacing: -0.12px;
  cursor: pointer;
   @media screen and (max-width: 640px) {
    width: 90px;
    font-size: 10px;
  }
`;