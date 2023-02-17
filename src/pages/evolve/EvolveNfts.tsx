/* eslint-disable no-console */
import { useState, useEffect } from 'react';
import RadioButton from 'src/components/Radio';
import styled from 'styled-components';
import { ConnectWarningSvg, NoNFTSvg, MintCardGif } from 'src/config/image';
import { useAccount } from 'wagmi';
import { PotionNFT } from 'src/components/NFT/PotionNFT';
import { NFTData } from 'src/config/nftData';

interface nftDataProps {
  id: number;
  image: string;
  primary: string;
  secondary: string;
  isSelected: boolean;
}

export const EvolveNFTs = () => {
  const [isEvolve, setEvolve] = useState('');
  const { isConnected } = useAccount();
  const [nftArr, setNftArr] = useState(NFTData);
  const [selectedCount, setSelectedCount] = useState(0);

  const handleChange = (inputValue: string) => {
    setEvolve(inputValue);
  };

  const handleNFTData = (id: number) => {
    const newSelected = [...nftArr];
    newSelected[id].isSelected = !newSelected[id].isSelected;
    setNftArr(newSelected);
  };

  useEffect(() => {
    let cnt = 0;
    for (let i = 0; i < nftArr.length; i++) {
      if (nftArr[i].isSelected) {
        cnt++;
      }
    }
    setSelectedCount(cnt);
  }, [nftArr]);

  const handleEvolve = () => {
    console.log({ nftArr });
  };

  return (
    <EvolveNFTsContainer>
      <EvolveNavBar>
        <MobilePotionLabel label="Your Potion" value={3} />
        <EvolveNavBarContainer>
          <RadioController>
            <RadioButton
              name="radio"
              label="Commons"
              value="Commons"
              checked={isEvolve === 'Commons'}
              handleChange={handleChange}
            />
            <RadioButton
              name="radio"
              label="Rares"
              value="Rares"
              checked={isEvolve === 'Rares'}
              handleChange={handleChange}
            />
            <RadioButton
              name="radio"
              label="Epics"
              value="Epics"
              checked={isEvolve === 'Epics'}
              handleChange={handleChange}
            />
          </RadioController>
          <RadioProvider>
            <PotionLabel label="Your Potion" value={3} />
            <SelectLabel label="Selected" value={`${selectedCount}/${nftArr.length}`} />
            <EvolveButton disabled={false} onClick={handleEvolve}>
              Evolve
            </EvolveButton>
          </RadioProvider>
        </EvolveNavBarContainer>
      </EvolveNavBar>
      <EvolveContent>
        {/* {!isConnected ? (
          <Warning emoticon={ConnectWarningSvg} alert="CONNECT YOUR WALLET TO START EVOLVING YOUR WEARABLES" />
        ) : (
          <Warning emoticon={NoNFTSvg} alert="SORRY!! YOU DON’T HAVE WEARABLES TO EVOLVE" />
        )} */}
        <NFTItemList>
          {nftArr.map((item) => (
            <div key={item.id} onClick={() => handleNFTData(item.id)}>
              <PotionNFT
                image={item.image}
                primary={item.primary}
                secondary={item.secondary}
                isSelected={item.isSelected}
              />
            </div>
          ))}
        </NFTItemList>
      </EvolveContent>
    </EvolveNFTsContainer>
  );
};

const EvolveNFTsContainer = styled.div`
  width: 1042px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 60px 0 136px 0;
  @media screen and (max-width: 1096px) {
    width: auto;
  }

  @media screen and (max-width: 640px) {
    padding: 60px 0;
  }
`;

const EvolveNavBar = styled.div`
  width: 100%;
  height: 65px;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 1096px) {
    width: 640px;
  }
  @media screen and (max-width: 768px) {
    width: 450px;
  }
  @media screen and (max-width: 480px) {
    width: 370px;
    padding-top: 30px;
  }
  @media screen and (max-width: 480px) {
    width: 290px;
  }
`;

const EvolveNavBarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 10px 15px;
  width: 100%;
  @media screen and (max-width: 1096px) {
    flex-direction: column-reverse;
    gap: 6px;
  }
`;

const RadioController = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 30px;
  width: 100%;
  background-color: #2b0707;
  height: 65px;
  @media screen and (max-width: 1096px) {
    justify-content: space-around;
  }
  @media screen and (max-width: 480px) {
    gap: 0px;
  }
`;

const RadioProvider = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
  width: 100%;
  background-color: #2b0707;
  height: 65px;
  @media screen and (max-width: 1096px) {
    justify-content: space-around;
    gap: 0;
  }
`;

interface ProviderLabelProps {
  label: string;
  value: string | number;
}

const PotionLabel = (props: ProviderLabelProps) => {
  const { label, value } = props;
  return (
    <ProviderLabelContainer>
      <ProviderLine />
      <Label>{label}</Label>
      <ProviderValue>{value}</ProviderValue>
    </ProviderLabelContainer>
  );
};

const SelectLabel = (props: ProviderLabelProps) => {
  const { label, value } = props;
  return (
    <SelectLabelContainer>
      <ProviderLine />
      <Label>{label}</Label>
      <SelectValue>{value}</SelectValue>
    </SelectLabelContainer>
  );
};

const MobilePotionLabel = (props: ProviderLabelProps) => {
  const { label, value } = props;
  return (
    <MobilePotionLabelContainer>
      <ProviderLine />
      <Label>{label}</Label>
      <ProviderValue>{value}</ProviderValue>
    </MobilePotionLabelContainer>
  );
};

const ProviderLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  height: 100%;
  @media screen and (max-width: 480px) {
    display: none;
  }
`;

const SelectLabelContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 17px;
  height: 100%;
  @media screen and (max-width: 768px) {
    gap: 17px;
  }
`;

const ProviderLine = styled.div`
  width: 5px;
  height: 45px;
  background-color: #430202;
  @media screen and (max-width: 1096px) {
    display: none;
  }
`;

const Label = styled.div`
  font-size: 14px;
  font-family: 'gotham-bold';
  color: #f48e37;
  text-transform: uppercase;
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const ProviderValue = styled.div`
  font-size: 22px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 768px) {
    font-size: 18px;
  }
`;

interface EvolveButtonProps {
  disabled?: boolean;
}

const EvolveButton = styled.div<EvolveButtonProps>`
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  font-family: 'gotham-bold';
  text-transform: uppercase;
  background-color: #f48e37;
  width: 113px;
  height: 42px;
  opacity: ${(props) => (props.disabled ?? false ? 0.5 : 1)};
`;

const SelectValue = styled.div`
  font-size: 14px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 768px) {
    font-size: 12px;
  }
`;

const EvolveContent = styled.div``;

interface WarningProps {
  emoticon: any;
  alert: string;
}

const Warning = (props: WarningProps) => {
  const { emoticon, alert } = props;
  return (
    <>
      <NoWalletEvolve>
        <EmoticonSvg src={emoticon} alt="emoticon" />
        <WarningAlert>{alert}</WarningAlert>
      </NoWalletEvolve>
    </>
  );
};

const NoWalletEvolve = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  min-height: 340px;
  gap: 22px;
`;

const EmoticonSvg = styled.img`
  width: 40px;
  height: auto;
`;

const WarningAlert = styled.div`
  text-transform: uppercase;
  font-size: 18px;
  font-family: 'gotham-bold';
  text-align: center;
  width: 463px;
  line-height: 30px;
  @media screen and (max-width: 1096px) {
    width: 390px;
  }

  @media screen and (max-width: 480px) {
    width: 250px;
  }
`;

const MobilePotionLabelContainer = styled.div`
  display: none;
  @media screen and (max-width: 480px) {
    display: flex;
    align-items: center;
    gap: 17px;
  }
`;

const NFTItemList = styled.div`
  padding-top: 30px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 30px;
  @media screen and (max-width: 1096px) {
    padding-top: 80px;
    grid-template-columns: repeat(3, 1fr);
  }

  @media screen and (max-width: 840px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
