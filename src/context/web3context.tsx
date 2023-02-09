/* eslint-disable no-console */
import React, { createContext, useContext, useEffect, useState } from 'react';
import { useAccount, useProvider, useSigner } from 'wagmi';
import { initializeWeb3 } from 'src/contracts';

interface Web3ContextProps {
  isConnected: boolean;
  isInitialized: boolean;
}

interface propsType {
  children: React.ReactNode;
}

const Web3Context = createContext<Web3ContextProps | null>(null);

export const Web3Provider = (props: propsType) => {
  const { isConnected } = useAccount();
  const provider = useProvider();
  const { data: signer } = useSigner();

  const [isInitialized, setInitialized] = useState(false);
  console.log({ isInitialized });
  useEffect(() => {
    if (isConnected) {
      (async () => {
        // eslint-disable-next-line no-console
        // console.log(signer);
        await initializeWeb3(provider, signer).then((res) => {
          setInitialized(res);
        });
      })();
    }
  }, [isConnected, signer]);

  return <Web3Context.Provider value={{ isConnected, isInitialized }}>{props.children}</Web3Context.Provider>;
};

export const useWeb3Store = () => {
  const context = useContext(Web3Context);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
