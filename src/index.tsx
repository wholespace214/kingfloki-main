import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import './index.css';

import { RainbowKitProvider, connectorsForWallets } from '@rainbow-me/rainbowkit';
import {
  argentWallet,
  braveWallet,
  imTokenWallet,
  injectedWallet,
  ledgerWallet,
  metaMaskWallet,
  omniWallet,
  rainbowWallet,
  trustWallet,
  walletConnectWallet,
  coinbaseWallet
} from '@rainbow-me/rainbowkit/wallets';
import { configureChains, createClient, mainnet, WagmiConfig } from 'wagmi';
/* import { polygonMumbai } from 'wagmi/chains'; */
import { alchemyProvider } from 'wagmi/providers/alchemy';
import { publicProvider } from 'wagmi/providers/public';

import '@rainbow-me/rainbowkit/styles.css';

import 'react-toastify/dist/ReactToastify.min.css';

// eslint-disable-next-line @typescript-eslint/no-var-requires
window.Buffer = require('buffer').Buffer;

const { chains, provider } = configureChains(
  [mainnet],
  [alchemyProvider({ apiKey: '2bUhHtQMTtBoddEB-hRwtnL6fZ6Y5Gnu' }), publicProvider()]
);

const connectors = connectorsForWallets([
  {
    groupName: 'Inject your wallet',
    wallets: [injectedWallet({ chains })]
  },
  {
    groupName: 'Select your wallet',
    wallets: [
      metaMaskWallet({ chains, shimDisconnect: true }),
      trustWallet({ chains, shimDisconnect: true }),
      coinbaseWallet({ appName: 'King', chains })
    ]
  },
  {
    groupName: 'Others',
    wallets: [
      walletConnectWallet({ chains }),
      ledgerWallet({ chains }),
      braveWallet({ chains }),
      argentWallet({ chains }),
      imTokenWallet({ chains }),
      omniWallet({ chains }),
      rainbowWallet({ chains })
    ]
  }
]);

const wagmiClient = createClient({
  connectors,
  autoConnect: true,
  provider
});

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);

root.render(
  <WagmiConfig client={wagmiClient}>
    <RainbowKitProvider
      chains={chains}
      // theme={KingpassTheme}
      modalSize="compact"
      appInfo={{
        appName: 'King Pass'
      }}
    >
      <React.StrictMode>
        <App />
      </React.StrictMode>
    </RainbowKitProvider>
  </WagmiConfig>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
