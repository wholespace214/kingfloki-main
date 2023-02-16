import { MintCardGif } from 'src/config/image';
import styled from 'styled-components';

export const PotionNFT = () => {
  return (
    <PotionNFTContainer>
      <PotionNFTWrapper>
        <NFTImage src={MintCardGif} alt="nft-image" />
        <PotionNFTFooter>
          <PotionNFTFooterText>
            <PrimaryText>Fomo Text</PrimaryText>
            <SecondaryText>Common</SecondaryText>
          </PotionNFTFooterText>
        </PotionNFTFooter>
      </PotionNFTWrapper>
    </PotionNFTContainer>
  );
};

const PotionNFTContainer = styled.div`
  width: 240px;
  height: 320px;
  background-color: #2b0707;
`;

const PotionNFTWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  :hover {
    border: 3px solid #f48e37;
  }
`;

const NFTImage = styled.img`
  width: 100%;
  height: auto;
`;
const PotionNFTFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const PotionNFTFooterText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  align-items: flex-start;
`;

const PrimaryText = styled.div`
  font-size: 15px;
  font-family: 'gotham-bold';
`;
const SecondaryText = styled.div`
  font-size: 12px;
`;
