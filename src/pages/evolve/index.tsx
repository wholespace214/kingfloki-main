import styled from 'styled-components';
import { EvolveMint } from './EvolveMint';
import { EvolveNFTs } from './EvolveNfts';

export const Evolve = () => {
  return (
    <EvolveContainer>
      <EvolveMint />
      <EvolveNFTs />
    </EvolveContainer>
  );
};

const EvolveContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  background-color: #430202;
  position: relative;
`;
