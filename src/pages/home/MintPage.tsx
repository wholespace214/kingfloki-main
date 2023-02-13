/* eslint-disable no-console */
import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';
import { Spinner } from 'src/components/Spinner';
import { FloatingCard, FloatingCardMobile, MintCardGif, EthereumSvg, NFTCarouselImg } from 'src/config/image';
import { useWeb3Store } from 'src/context/web3context';
import {
  getFreebiesCount,
  getNftsFromApi,
  NFTMintCostInEth,
  requestMintRandomNft,
  isAbleToConnect
} from 'src/contracts';
import { useAccount } from 'wagmi';
import styled from 'styled-components';
import { MintLoader } from 'src/components/Modal/mintLoader';
import axios from 'axios';
import { ethers } from 'ethers';
import { WalletConnectButton } from 'src/components/Button';

export const MingPage = () => {
  const [quantity, setQuantity] = useState(1);
  const [isLoad, setLoad] = useState(false);
  const { isInitialized } = useWeb3Store();
  const { isConnected } = useAccount();
  const [mintStatus, setMintStatus] = useState(0);
  const [hasPending, setHasPending] = useState(false);
  const [freebies, setFreebies] = useState(0);
  const [isAbleConnect, setAbleconnect] = useState(false);
  const { address } = useAccount();

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
  const [randomMintCost, setRandomMintCost] = useState('0');
  useEffect(() => {
    if (isInitialized) {
      (async () => {
        const cost = await NFTMintCostInEth();
        if (cost !== undefined) {
          setRandomMintCost(ethers.utils.formatEther(cost));
        }
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        const api_call = await axios.get(`https://webhooks.kingfinance.co/pendingNfts?owner=${address}`);
        /* eslint-disable no-console */
        console.log('we?', api_call);
        const awaiting_mints = api_call.data.data.length;
        if (awaiting_mints !== 0) {
          setHasPending(true);
        }

        const _freebies = await getFreebiesCount();
        setFreebies(_freebies);
        const isAble = await isAbleToConnect();
        if (isAble !== undefined) setAbleconnect(isAble);
      })();
    }
  }, [isInitialized]);

  useEffect(() => {
    console.log('mintStatus: ', mintStatus);
  }, [mintStatus]);

  const handleStatus = async (value: number) => {
    setMintStatus(value);
    console.log(value);
  };

  async function _getNftsFromApi() {
    const isReq = await getNftsFromApi(handleStatus);
    if (isReq) {
      /* eslint-disable no-console */
      console.log('Got them!!!', isReq);
    }
  }
  async function testClick() {
    if (freebies > 0) {
      if (freebies < quantity) {
        toast.error('Mints number cannot exceed freebies amount');
        return;
      }
    }
    setMintStatus(1);
    const isReq = await requestMintRandomNft(handleStatus, quantity);
    if (isReq) {
      /* eslint-disable no-console */
      console.log('requested!!');
      await _getNftsFromApi();
      if (freebies > 0) {
        console.log({ freebies, quantity });
        setFreebies(freebies - quantity);
      }
    }
  }

  const handleContractFunction = (func: () => Promise<void>) => {
    // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
    const promise = new Promise(async function (resolve, reject) {
      try {
        setLoad(true);
        await func();
        resolve('');
      } catch (err) {
        reject(err);
        setMintStatus(0);
      }
    });
    promise
      .then((result) => {
        console.log({ result });
        // toast.success("Congratulations, you have claimed your Kingpass");
        // toast.success('successMsg');
        setLoad(false);
      })
      .catch((err) => {
        console.log({ err });
        // toast.error(`you need to wait at least 24 hours to withdraw your $KING`, err);
        const revertData = err.reason;
        // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
        toast.error(`Transaction failed: ${revertData}`);
        // errMsg !== "" ? toast.error(errMsg, err) :
        setLoad(false);
      });
  };

  const handleTempClick = () => {
    toast.error('Be ready to mint on the 17th of February, stay tuned!');
  };

  const checkAbleMint = () => {
    if (isAbleConnect) {
      handleContractFunction(async () => await testClick());
    } else {
      handleTempClick();
    }
  };

  return (
    <>
      <MingPageContainer>
        <Topsection />
        <Img alt="floating-card" />
        <MintCard>
          <MintCardImg>
            <img src={MintCardGif} alt="mincard-gif" style={{ width: '100%', height: '100%' }} />
          </MintCardImg>
          <MintCardContent hasPending={hasPending}>
            <MintCardContentWraper>
              <MintCardPrimaryLabel>Mint your</MintCardPrimaryLabel>
              <MintCardSecondaryLabel>Wearables</MintCardSecondaryLabel>
              <MintCardAction>
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
                  {hasPending && (
                    <MintButton
                      disabled={isLoad}
                      onClick={() => {
                        handleContractFunction(async () => await _getNftsFromApi());
                        console.log('_getNftsFromApi');
                      }}
                    >
                      {isLoad ? <Spinner /> : 'Get Pending NFTs'}
                    </MintButton>
                  )}
                  {isConnected ? (
                    <MintButton
                      disabled={isLoad}
                      onClick={() => {
                        checkAbleMint();
                      }}
                    >
                      {isLoad ? <Spinner /> : 'Mint Now'}
                    </MintButton>
                  ) : (
                    <WalletConnectButton />
                  )}
                </MintButtonBox>
              </MintCardAction>
              <MintCardFooter>
                <EtherValueContainer>
                  <EtherIcon src={EthereumSvg} alt="ethereum-icon" />
                  <Label>Price</Label>
                  <EtherValue>{isConnected ? (randomMintCost === '0' ? '-' : randomMintCost) : '-'} ETH</EtherValue>
                </EtherValueContainer>
                <EtherValueContainer>
                  <Label>Total </Label>
                  <EtherValue>
                    {isConnected ? (randomMintCost === '0' ? '-' : parseInt(randomMintCost) * quantity) : '-'} ETH
                  </EtherValue>
                </EtherValueContainer>
                <FreebiesContainer>
                  <FreebiesLabel>Freebies</FreebiesLabel>
                  <FreebiesValue>{freebies}</FreebiesValue>
                </FreebiesContainer>
              </MintCardFooter>
            </MintCardContentWraper>
          </MintCardContent>
        </MintCard>
      </MingPageContainer>
      <NFTCarousel />
      <MintLoader value={mintStatus} setValue={setMintStatus} />
    </>
  );
};

const MingPageContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: #430202;
  position: relative;
`;

const Topsection = styled.div`
  width: 100%;
  height: 50px;
  background-color: #430202;
  @media screen and (max-width: 450px) {
    height: 20px;
  }
`;

const Img = styled.img`
  width: 100%;
  height: 820px;
  content: url(${FloatingCard});
  object-fit: cover;
  max-width: 1540px;
  user-select: none;
  object-position: top;
  @media screen and (max-width: 450px) {
    content: url(${FloatingCardMobile});
  }
  @media screen and (max-width: 350px) {
    content: url(${FloatingCardMobile});
    height: 640px;
  }
`;

const MintCard = styled.div`
  position: absolute;
  display: flex;
  z-index: 9999;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;
const MintCardContentWraper = styled.div`
  padding: 60px 68px;
  @media screen and (max-width: 960px) {
    padding: 45px;
  }
  @media screen and (max-width: 450px) {
    padding: 30px;
  }
`;

const MintCardImg = styled.div`
  width: auto;
  height: 460px;
  user-select: none;
  @media screen and (max-width: 960px) {
    width: 310px;
    height: 363px;
  }
  @media screen and (max-width: 450px) {
    width: 270px;
    height: 310px;
  }
  @media screen and (max-width: 350px) {
    width: 224px;
    height: 263px;
  }
`;
interface CardContentProps {
  hasPending: boolean;
}

const MintCardContent = styled.div<CardContentProps>`
  width: auto;
  height: 460px;
  background-color: #2b0707;
  display: flex;
  justify-content: center;
  @media screen and (max-width: 960px) {
    width: 310px;
    height: ${({ hasPending }) => (hasPending ? '380px' : '340px')};
  }
  @media screen and (max-width: 450px) {
    width: 270px;
    height: ${({ hasPending }) => (hasPending ? '320px' : '280px')};
  }
  @media screen and (max-width: 350px) {
    width: 224px;
    height: ${({ hasPending }) => (hasPending ? '280px' : '240px')};
  }
`;

const MintCardPrimaryLabel = styled.div`
  font-size: 26px;
  text-transform: uppercase;
  font-family: 'gotham-bold';
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 22px;
  }
  @media screen and (max-width: 350px) {
    font-size: 16px;
  }
`;

const MintCardSecondaryLabel = styled.div`
  font-size: 96px;
  font-family: 'funkies';
  text-align: center;
  @media screen and (max-width: 960px) {
    font-size: 65px;
  }
  @media screen and (max-width: 350px) {
    font-size: 47px;
  }
`;

const MintCardAction = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 21px;
`;

const MintInputBox = styled.div`
  display: flex;
  height: 60px;
  @media screen and (max-width: 960px) {
    height: 42px;
  }
  @media screen and (max-width: 450px) {
    height: 32px;
  }
  @media screen and (max-width: 350px) {
    height: 27px;
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
  @media screen and (max-width: 450px) {
    min-width: 32px;
  }
  @media screen and (max-width: 350px) {
    min-width: 27px;
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
  @media screen and (max-width: 350px) {
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
  @media screen and (max-width: 450px) {
    height: 32px;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    height: 27px;
    font-size: 11px;
  }
`;

const MintCardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding-top: 42px;
  @media screen and (max-width: 960px) {
    padding-top: 30px;
  }
  @media screen and (max-width: 450px) {
    padding-top: 16px;
  }
`;

const EtherValueContainer = styled.div`
  display: flex;
  gap: 6px;
  align-items: center;
`;

const EtherIcon = styled.img`
  width: 32px;
  height: auto;
  @media screen and (max-width: 960px) {
    width: 28px;
  }
  @media screen and (max-width: 450px) {
    width: 24px;
  }
`;
const EtherValue = styled.div`
  font-size: 15px;
  color: #f2f5f4;
  @media screen and (max-width: 960px) {
    font-size: 12px;
  }
  @media screen and (max-width: 450px) {
    font-size: 9px;
  }
`;

const FreebiesContainer = styled.div`
  display: flex;
  gap: 12px;
  align-items: center;
`;

const FreebiesLabel = EtherValue;

const FreebiesValue = styled.div`
  font-size: 20px;
  font-family: 'gotham-bold';
  color: #ffffff;
  @media screen and (max-width: 960px) {
    font-size: 15px;
  }
  @media screen and (max-width: 450px) {
    font-size: 10px;
  }
`;

const NFTCarousel = styled.div`
  width: 100%;
  height: 240px;
  background-image: url(${NFTCarouselImg});
  background-repeat: repeat-x;
  background-size: cover;
  @keyframes ani {
    from {
      background-position: 90000%;
    }
    to {
      background-position: 0%;
    }
  }
  animation: ani 6000s linear infinite;
  @media screen and (max-width: 1200px) {
    animation: ani 10000s linear infinite;
  }

  @media screen and (max-width: 840px) {
    animation: ani 12000s linear infinite;
  }

  @media screen and (max-width: 450px) {
    animation: ani 15000s linear infinite;
  }
`;

const MintButtonBox = styled.div`
  display: flex;
  gap: 8px;
  @media screen and (max-width: 960px) {
    flex-direction: column;
  }
`;

const TempConnectButton = styled.div`
  background: #f48e37 0% 0% no-repeat padding-box;
  height: 56px;
  border: none;
  width: 373px;
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
    width: 100%;
    height: 42px;
    font-size: 14px;
  }
  @media screen and (max-width: 450px) {
    height: 32px;
    font-size: 12px;
  }
  @media screen and (max-width: 350px) {
    height: 27px;
    font-size: 11px;
  }
`;

const Label = styled.div`
  font-size: 15px;
  color: #ff7b03;
  text-transform: uppercase;
`;
