import React, { createContext, useState, useContext, useEffect } from 'react';
import { localStorageGet, localStorageSet } from '../utils/localstorage';

interface StoreContextProps {
  mintStatus: number;
  setMintStatus: (value: number) => void;
}

interface propsType {
  children: React.ReactNode;
}

const StoreContext = createContext<StoreContextProps | null>(null);

const StoreProvider = (props: propsType) => {
  const [mintStatus, setMintStatus] = useState<number>(localStorageGet('mint'));

  const loadMintStatus = () => {
    setMintStatus(localStorageGet('mint') === '' ? 0 : localStorageGet('mint'));
  };

  const setMintStatusNumber = (num: number) => {
    setMintStatus(num);
    localStorageSet('mint', num);
  };

  useEffect(() => {
    loadMintStatus();
  }, []);

  return (
    <StoreContext.Provider
      value={{
        mintStatus,
        setMintStatus: setMintStatusNumber
      }}
    >
      {props.children}
    </StoreContext.Provider>
  );
};

export default StoreProvider;

export const useStore = () => {
  const context = useContext(StoreContext);
  if (context === null) {
    throw new Error("can't find context");
  }
  return context;
};
