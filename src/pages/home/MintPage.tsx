/* eslint-disable no-console */
import { useEffect, useState } from 'react'
import { toast } from 'react-toastify'
import { Spinner } from 'src/components/Spinner'
import { FloatingCard, FloatingCardMobile, MintCardGif, EthereumSvg, NFTCarouselImg } from "src/config/image"
import { useWeb3Store } from 'src/context/web3context'
import { getNftsFromApi, NFTMintCostInEth, requestMintRandomNft } from 'src/contracts'
import { useAccount } from 'wagmi'
import styled from "styled-components"
import { MintLoader } from 'src/components/Modal/mintLoader'
import { useStore } from 'src/context/storecontext'

export const MingPage = () => {
    const [mintNum, setMintNum] = useState(0);
    const [isLoad, setLoad] = useState(false);
    const { isInitialized } = useWeb3Store();
    const { isConnected } = useAccount();
    const { mintStatus, setMintStatus } = useStore();
    const handleClick = (symbol: string) => {
        let num = mintNum;
        if(symbol === 'minus') {
            num--;
            if(mintNum > 0) setMintNum(num);
        } else {
            num++;
            setMintNum(num);
        }
    }
    const [randomMinintCost, setRandomMinintCost] = useState(0);
    useEffect(() => {
        if(isInitialized) {
            (async () => {
               const cost = await NFTMintCostInEth();
               console.log({cost});
               setRandomMinintCost(cost);
            })();
        }
    }, [isInitialized])

    useEffect(() => {
        console.log('mintStatus: ', mintStatus);
    }, [mintStatus])

     const handleStatus = async (value: number) => {
            setMintStatus(value);
            console.log(value);
    }

    async function _getNftsFromApi() {
        const isReq = await getNftsFromApi(handleStatus)
        if (isReq) {
            /* eslint-disable no-console */
            console.log("Got them!!!", isReq)
        }
    }
    async function testClick() {
       
        const isReq = await requestMintRandomNft(handleStatus);
        if (isReq) {
            /* eslint-disable no-console */
            console.log("requested!!")
            await _getNftsFromApi()
        }
    }

    const handleContractFunction = (func:() => Promise<void>) => {
        setMintStatus(1);
        // eslint-disable-next-line @typescript-eslint/no-misused-promises, no-async-promise-executor
        const promise = new Promise(async function(resolve, reject) {
        try {
            setLoad(true);
            await func();
            resolve("");
        } catch (err) {
            reject(err)
            setMintStatus(0);
        }
        });
        promise.then((result) => {
            console.log({ result })
            // toast.success("Congratulations, you have claimed your Kingpass");
            // toast.success('successMsg');
            setLoad(false);
            
        }
        ).catch(
        (err) => {
            console.log({ err });
            // toast.error(`you need to wait at least 24 hours to withdraw your $KING`, err); 
            const revertData = err.reason;
            // eslint-disable-next-line @typescript-eslint/restrict-template-expressions
            toast.error(`Transaction failed: ${revertData}`)
            // errMsg !== "" ? toast.error(errMsg, err) :  
            setLoad(false);
        }
        )
    }
    return(
        <>
            <MingPageContainer>
                <Topsection />
                <Img alt="floating-card" />
                <MintCard>
                    <MintCardImg>
                        <img src={MintCardGif} alt="mincard-gif" style={{ width: '100%', height: '100%' }} />
                    </MintCardImg>
                    <MintCardContent>
                        <MintCardContentWraper>
                            <MintCardPrimaryLabel>
                                Mint your
                            </MintCardPrimaryLabel>
                            <MintCardSecondaryLabel>
                                Wearables
                            </MintCardSecondaryLabel>
                            <MintCardAction>
                                <MintInputBox>
                                    <OperationBtn onClick={() => handleClick("minus")}>-</OperationBtn>
                                    <MintInput type="number" value={mintNum} onChange={(e) => setMintNum(Number(e.target.value))}/>
                                    <OperationBtn onClick={() => handleClick("plus")}>+</OperationBtn>
                                </MintInputBox>
                                {/* <MintButton>{isLoad ? <Spinner /> : "Mint Now"}</MintButton> */}
                                <MintButtonBox>
                                    <MintButton disabled={isLoad} onClick={() => {handleContractFunction(async() => await _getNftsFromApi()); console.log('_getNftsFromApi')}}>{isLoad ? <Spinner /> : "Get Pending NFTs"}</MintButton>
                                    <MintButton disabled={isLoad} onClick={() => {handleContractFunction(async() => await testClick()); console.log('textClick')}}>{isLoad ? <Spinner /> : "Mint Now"}</MintButton>
                                </MintButtonBox>
                            </MintCardAction>
                            <MintCardFooter>
                                <EtherValueContainer>
                                    <EtherIcon src={EthereumSvg} alt='ethereum-icon' />
                                    <EtherValue>{isConnected ? (randomMinintCost === 0 ? '-' : randomMinintCost ): '-' } ETH</EtherValue>
                                </EtherValueContainer>
                                {/* <FreebiesContainer>
                                    <FreebiesLabel>Freebies</FreebiesLabel>
                                    <FreebiesValue>1</FreebiesValue>
                                </FreebiesContainer> */}
                            </MintCardFooter>
                        </MintCardContentWraper>
                    </MintCardContent>
                </MintCard>
            </MingPageContainer>
            <NFTCarousel />
            <MintLoader value={mintStatus} />
        </>
    )
}

const MingPageContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background-color: #430202;
    position: relative;
`

const Topsection = styled.div`
    width: 100%;
    height: 50px;
    background-color: #430202;
    @media screen and (max-width: 450px) {
        height: 20px;
    }
`

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
`

const MintCard = styled.div`
    position: absolute;
    display: flex;
    z-index: 9999;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`
const MintCardContentWraper = styled.div`
    padding: 60px 68px;
    @media screen and (max-width: 960px) {
        padding: 45px;
    }
    @media screen and (max-width: 450px) {
        padding: 30px;
    }
`

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
`

const MintCardContent = styled.div`
    width: auto;
    height: 460px;
    background-color: #2B0707;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 960px) {
        width: 310px;
        height: 400px;
    }
    @media screen and (max-width: 450px) {
        width: 270px;
        height: 340px;
    }
    @media screen and (max-width: 350px) {
        width: 224px;
        height: 280px;
    }
`

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
`

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
`

const MintCardAction = styled.div`
    display: flex;
    flex-direction: column;
    gap: 8px;
    padding-top: 21px;
`

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
`
const OperationBtn = styled.div`
    min-width: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #F48E37;
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
`

const MintInput = styled.input`
    outline: none;
    border: none;
    margin: 0;
    padding: 0;
    background-color: #FFFFFF;
    width: 100%;
    height: 100%;
    color: #2B0707;
    font-family: 'gotham-bold';
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
    @media screen and (max-width: 350px) {
        font-size: 11px;
    }
`

const MintButton = styled.button`
    background: #F48E37 0% 0% no-repeat padding-box;
    height: 56px;
    border: none;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'gotham-bold';
    color: #FFFFFF;
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
`

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
`

const EtherValueContainer = styled.div`
    display: flex;
    gap: 6px;
    align-items: center;
`

const EtherIcon = styled.img`
    width: 32px;
    height: auto;
    @media screen and (max-width: 960px) {
        width: 28px;
    }
    @media screen and (max-width: 450px) {
        width: 24px;
    }
`
const EtherValue = styled.div`
    font-size: 15px;
    color: #F2F5F4;
    @media screen and (max-width: 960px) {
        font-size: 12px;
    }
    @media screen and (max-width: 450px) {
        font-size: 9px;
    }
`

const FreebiesContainer = styled.div`
    display: flex;
    gap: 12px;
    align-items: center;
`

const FreebiesLabel = EtherValue;

const FreebiesValue = styled.div`
    font-size: 20px;
    font-family: 'gotham-bold';
    color: #FFFFFF;
    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
    @media screen and (max-width: 450px) {
        font-size: 10px;
    }
`

const NFTCarousel = styled.div`
    width: 100%;
    height: 240px;
    background-image: url(${NFTCarouselImg});
    background-repeat: repeat-x;
    background-size: cover;
    @keyframes ani {
       from { background-position: 90000%; }
       to { background-position: 0%; }
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
`

const MintButtonBox = styled.div`
    display: flex;
    gap: 8px;
    @media screen and (max-width: 960px) {
        flex-direction: column;
    }
`