import { useState } from 'react';
import { RxTriangleRight } from 'react-icons/rx';
import styled, { keyframes } from 'styled-components';
import { useAccount } from 'wagmi';
import { WalletConnectButton } from 'src/components/Button';
import { Spinner } from 'src/components/Spinner';
import { EthereumSvg, EvolveBg, PotionImg } from 'src/config/image';

export const EvolveMint = () => {
  const [quantity, setQuantity] = useState(0);
  const [freebies, setFreebies] = useState(0);
  const [isLoad, setLoad] = useState(false);
  const [price, setPrice] = useState(0.005);
  const { isConnected } = useAccount();
  const handleClick = (symbol: string) => {
    let num = quantity;
    if (symbol === 'minus') {
      num--;
      if (quantity > 1) setQuantity(num);
    } else {
      if (freebies !== 0) {
        if (quantity < freebies) {
          num++;
        }
      } else {
        num++;
      }
      setQuantity(num);
    }
  };
  return (
    <>
      <EvolveBackground src={EvolveBg} alt="evolve-bg" />
      <EvolveWrapper>
        <EvolveMintContainer>
          <Potion src={PotionImg} alt="potion-img" />
          <MintContainer>
            <MintPotion>
              <MintPotionContainer>
                <MintPotionTitle>Mint Your Potion</MintPotionTitle>
                <MintPotionAction>
                  <MintInputBox>
                    <OperationBtn onClick={() => handleClick('minus')}>-</OperationBtn>
                    <MintInput
                      type="number"
                      min={1}
                      value={quantity === 0 ? 1 : quantity}
                      onChange={(e) => setQuantity(Number(e.target.value))}
                    />
                    <OperationBtn onClick={() => handleClick('plus')}>+</OperationBtn>
                  </MintInputBox>
                  {/* <MintButton>{isLoad ? <Spinner /> : "Mint Now"}</MintButton> */}
                  <MintButtonBox>
                    {/* {hasPending && (
                      <MintButton
                        disabled={isLoad}
                        onClick={() => {
                          handleContractFunction(async () => await _getNftsFromApi());
                          console.log('_getNftsFromApi');
                        }}
                      >
                        {isLoad ? <Spinner /> : 'Get Pending NFTs'}
                      </MintButton>
                    )} */}
                    {isConnected ? (
                      <MintButton disabled={isLoad}>{isLoad ? <Spinner /> : 'Mint Now'}</MintButton>
                    ) : (
                      <WalletConnectButton />
                    )}
                  </MintButtonBox>
                </MintPotionAction>
                <MintPotionFooter>
                  <EtherValueContainer>
                    <EtherIcon src={EthereumSvg} alt="ethereum-icon" />
                    <EtherValue>{isConnected ? (price === 0 ? '-' : price) : '-'} ETH</EtherValue>
                  </EtherValueContainer>
                  <EtherValueContainer>
                    <Label>Freebies</Label>
                    <FreebiesValue>{isConnected ? (freebies === 0 ? '-' : freebies) : '-'}</FreebiesValue>
                  </EtherValueContainer>
                </MintPotionFooter>
              </MintPotionContainer>
            </MintPotion>
            <EvolveNFTs>
              <EvolveNFTsContainer>
                <EvolveTitle>Evolve your NFTs</EvolveTitle>
                <EvolveTable>
                  <EvolveTr>
                    <PrimaryLabel>10 Commons</PrimaryLabel>
                    <StyledRightArrow>
                      <RxTriangleRight style={{ width: '100%', height: 'auto' }} />
                    </StyledRightArrow>
                    <SecondaryLabel>1 Rare</SecondaryLabel>
                  </EvolveTr>
                  <SecondaryLine />
                  <EvolveTr>
                    <PrimaryLabel>5 Rares</PrimaryLabel>
                    <StyledRightArrow>
                      <RxTriangleRight style={{ width: '100%', height: 'auto' }} />
                    </StyledRightArrow>
                    <SecondaryLabel>1 Epic</SecondaryLabel>
                  </EvolveTr>
                  <SecondaryLine />
                  <EvolveTr>
                    <PrimaryLabel>3 Epics</PrimaryLabel>
                    <StyledRightArrow>
                      <RxTriangleRight style={{ width: '100%', height: 'auto' }} />
                    </StyledRightArrow>
                    <SecondaryLabel>1 Legendary</SecondaryLabel>
                  </EvolveTr>
                </EvolveTable>
              </EvolveNFTsContainer>
            </EvolveNFTs>
          </MintContainer>
        </EvolveMintContainer>
      </EvolveWrapper>
    </>
  );
};

const EvolveWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 60px;
  padding-top: 25px;
`;

const EvolveBackground = styled.img`
  height: 381px;
  width: 100%;
  object-fit: cover;
  position: absolute;
  z-index: 0;
`;

const EvolveMintContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 45px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
  @media screen and (max-width: 480px) {
    gap: 20px;
  }
`;
const floaty = keyframes`
    0% {
        transform: translateY(0);
    }
    50% {
        transform: translateY(-15px);
    }
    100% {
        transform: translateY(0);
    }
`;

const Potion = styled.img`
  width: 422px;
  height: auto;
  animation: ${floaty} 1.5s infinite;
  @media screen and (max-width: 960px) {
    width: 320px;
  }

  @media screen and (max-width: 480px) {
    width: 230px;
  }
`;

const MintContainer = styled.div`
  width: 470px;
  display: flex;
  flex-direction: column;
  gap: 9px;
  z-index: 1;
  @media screen and (max-width: 960px) {
    width: 380px;
  }
  @media screen and (max-width: 480px) {
    width: 340px;
  }
  @media screen and (max-width: 390px) {
    width: 290px;
  }
`;

const MintPotion = styled.div`
  width: 100%;
  background: #2b0707 0% 0% no-repeat padding-box;
`;

const MintPotionContainer = styled.div`
  padding: 30px 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const MintPotionTitle = styled.div`
  font-size: 26px;
  text-transform: uppercase;
  font-family: 'gotham-bold';
  @media screen and (max-width: 960px) {
    font-size: 22px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const MintPotionAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 21px;
  width: 100%;
`;

const MintInputBox = styled.div`
  display: flex;
  height: 60px;
  @media screen and (max-width: 960px) {
    height: 42px;
  }
  @media screen and (max-width: 480px) {
    height: 32px;
  }
`;

const OperationBtn = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #f48e37;
  cursor: pointer;
  font-size: 21px;
  font-family: 'gotham-bold';
  user-select: none;
  @media screen and (max-width: 960px) {
    min-width: 42px;
  }
  @media screen and (max-width: 480px) {
    min-width: 32px;
  }
`;

const MintInput = styled.input`
  outline: none;
  border: none;
  margin: 0;
  padding: 0;
  background-color: #ffffff;
  width: 100%;
  height: 100%;
  color: #2b0707;
  font-family: 'gotham-bold';
  font-size: 20px;
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
  @media screen and (max-width: 480px) {
    font-size: 11px;
  }
`;

const MintButton = styled.button`
  background: #f48e37 0% 0% no-repeat padding-box;
  height: 56px;
  border: none;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-transform: uppercase;
  font-size: 14px;
  font-family: 'gotham-bold';
  color: #ffffff;
  cursor: pointer;
  user-select: none;
  @media screen and (max-width: 960px) {
    height: 42px;
    font-size: 14px;
  }
  @media screen and (max-width: 480px) {
    height: 32px;
    font-size: 12px;
  }
`;

const MintButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const MintPotionFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 20px;
  width: 100%;
`;

const EtherValueContainer = styled.div`
  display: flex;
  gap: 15px;
  justify-content: center;
  align-items: center;
  @media screen and (max-width: 960px) {
    gap: 9px;
  }
`;

const EtherIcon = styled.img`
  width: 24px;
  height: auto;
  @media screen and (max-width: 960px) {
    width: 20px;
  }
`;
const EtherValue = styled.div`
  font-size: 15px;
  text-align: center;
  color: #f2f5f4;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const Label = styled.div`
  color: #f2f5f4;
  font-size: 15px;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const FreebiesValue = styled.div`
  color: #f2f5f4;
  font-size: 15px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
`;

const EvolveNFTs = styled.div`
  width: 100%;
  background: #2b0707 0% 0% no-repeat padding-box;
`;

const EvolveNFTsContainer = styled.div`
  padding: 30px 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media screen and (max-width: 960px) {
    padding: 30px 50px;
  }
  @media screen and (max-width: 480px) {
    padding: 30px;
  }
`;

const EvolveTitle = styled.div`
  font-size: 35px;
  font-family: 'gotham-bold';
  @media screen and (max-width: 960px) {
    font-size: 25px;
  }
  @media screen and (max-width: 480px) {
    font-size: 16px;
  }
`;

const EvolveTable = styled.div`
  border: 1px solid #f38e37;
  margin-top: 34px;
  width: 100%;
  @media screen and (max-width: 480px) {
    margin-top: 26px;
  }
`;

const EvolveTr = styled.div`
  padding: 15px 20px;
  display: flex;
  align-items: center;
  gap: 30px;
  @media screen and (max-width: 960px) {
    gap: 20px;
  }
  @media screen and (max-width: 390px) {
    gap: 10px;
  }
`;

const PrimaryLabel = styled.div`
  font-size: 14px;
  width: 100px;
  font-family: 'gotham-bold';
  text-transform: uppercase;
  white-space: nowrap;
  @media screen and (max-width: 960px) {
    font-size: 12px;
    width: 90px;
  }
  @media screen and (max-width: 390px) {
    font-size: 10px;
    width: 72px;
  }
`;

const SecondaryLabel = styled.div`
  font-size: 14px;
  font-family: 'gotham-bold';
  color: #f48e37;
  text-transform: uppercase;
  white-space: nowrap;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 390px) {
    font-size: 10px;
  }
`;

const SecondaryLine = styled.div`
  background-color: #f48e37;
  height: 1px;
  width: 100%;
`;

const StyledRightArrow = styled.div`
  width: 20px;
  height: 16px;
`;
