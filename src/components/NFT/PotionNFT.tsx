import styled from 'styled-components';

interface PotionNFTProps {
  image: string;
  primary: string;
  secondary: string;
  isSelected: boolean;
}

export const PotionNFT = (props: PotionNFTProps) => {
  const { image, primary, secondary, isSelected } = props;
  return (
    <PotionNFTContainer>
      <PotionNFTWrapper>
        <NFTImage src={image} alt="nft-image" />
        <PotionNFTFooter>
          <PotionNFTFooterText>
            <PrimaryText>{primary}</PrimaryText>
            <SecondaryText>{secondary}</SecondaryText>
          </PotionNFTFooterText>
          <CheckBox isSelect={isSelected} />
        </PotionNFTFooter>
      </PotionNFTWrapper>
    </PotionNFTContainer>
  );
};

const PotionNFTContainer = styled.div`
  width: 240px;
  height: 320px;
  background-color: #2b0707;
  cursor: pointer;
  @media screen and (max-width: 640px) {
    width: 180px;
    height: 240px;
  }
  @media screen and (max-width: 480px) {
    width: 132px;
    height: 175px;
  }
`;

const PotionNFTWrapper = styled.div`
  padding: 24px;
  display: flex;
  flex-direction: column;
  gap: 11px;
  :hover {
    border: 3px solid #f48e37;
  }

  @media screen and (max-width: 640px) {
    padding: 18px;
  }

  @media screen and (max-width: 480px) {
    padding: 12px;
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
  text-transform: uppercase;
  @media screen and (max-width: 480px) {
    font-size: 8px;
  }
`;
const SecondaryText = styled.div`
  font-size: 12px;
  @media screen and (max-width: 640px) {
    font-size: 9px;
  }
  @media screen and (max-width: 480px) {
    font-size: 6px;
  }
`;

interface CheckBoxProps {
  isSelect: boolean;
}

const CheckBox = (props: CheckBoxProps) => {
  const { isSelect } = props;
  return <CheckBoxContainer>{isSelect && <SelectBox />}</CheckBoxContainer>;
};

const CheckBoxContainer = styled.div`
  width: 24px;
  height: 24px;
  border: 1px solid #f48e37;
  display: flex;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 640px) {
    width: 18px;
    height: 18px;
  }
  @media screen and (max-width: 480px) {
    width: 13px;
    height: 13px;
  }
`;

const SelectBox = styled.div`
  width: 18px;
  height: 18px;
  background-color: #f48e37;
  @media screen and (max-width: 640px) {
    width: 14px;
    height: 14px;
  }
  @media screen and (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;
