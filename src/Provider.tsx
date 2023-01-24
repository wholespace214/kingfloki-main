import { ThemeProvider } from 'styled-components';
import { COLORS, TEXT_SIZE } from './config/config';
import StoreProvider from './context/storecontext';
import { Web3Provider } from './context/web3context';

interface ProviderProps {
  children: React.ReactNode;
}

const theme = {
  ...COLORS,
  ...TEXT_SIZE
};

export const Provider = ({ children }: ProviderProps) => {
  return (
  <ThemeProvider theme={theme}>
    <Web3Provider>
      <StoreProvider>
        {children}  
      </StoreProvider>
    </Web3Provider>
  </ThemeProvider>);
};
