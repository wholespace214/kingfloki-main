/* eslint-disable no-console */
import { useState } from 'react';
import RadioButton from 'src/components/Radio';
import styled from 'styled-components';
import { ConnectWarningSvg, NoNFTSvg } from 'src/config/image';
import { useAccount } from 'wagmi';

export const EvolveNFTs = () => {
  const [isEvolve, setEvolve] = useState('');
  const { isConnected } = useAccount();

  const handleChange = (inputValue: string) => {
    setEvolve(inputValue);
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
            <SelectLabel label="Selected" value="0/10" />
            <EvolveButton disabled={true}>Evolve</EvolveButton>
          </RadioProvider>
        </EvolveNavBarContainer>
      </EvolveNavBar>
      <EvolveContent>
        {!isConnected ? (
          <Warning emoticon={ConnectWarningSvg} alert="CONNECT YOUR WALLET TO START EVOLVING YOUR WEARABLES" />
        ) : (
          <Warning emoticon={NoNFTSvg} alert="SORRY!! YOU DON’T HAVE WEARABLES TO EVOLVE" />
        )}
      </EvolveContent>
    </EvolveNFTsContainer>
  );
};

const EvolveNFTsContainer = styled.div`
  width: 1042px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 60px;
  @media screen and (max-width: 1096px) {
    width: auto;
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
