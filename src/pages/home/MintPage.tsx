import { useState } from 'react'
import { FloatingCard, FloatingCardMobile, MintCardGif, EthereumSvg} from "src/config/image"
import styled from "styled-components"

export const MingPage = () => {
    const [mintNum, setMintNum] = useState(0);
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
    return(
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
                            <MintButton>Mint Now</MintButton>
                        </MintCardAction>
                        <MintCardFooter>
                            <EtherValueContainer>
                                <EtherIcon src={EthereumSvg} alt='ethereum-icon' />
                                <EtherValue>0.03 ETH</EtherValue>
                            </EtherValueContainer>
                            <FreebiesContainer>
                                <FreebiesLabel>Freebies</FreebiesLabel>
                                <FreebiesValue>1</FreebiesValue>
                            </FreebiesContainer>
                        </MintCardFooter>
                    </MintCardContentWraper>
                </MintCardContent>
            </MintCard>
        </MingPageContainer>
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
    @media screen and (max-width: 450px) {
        content: url(${FloatingCardMobile});
        height: 640px;
        object-position: top;
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
        height: 348px;
    }
    @media screen and (max-width: 450px) {
        width: 224px;
        height: 240px;
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
    @media screen and (max-width: 450px) {
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
    @media screen and (max-width: 450px) {
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
        min-width: 27px;
    }
`

const MintInput = styled.input`
    outline: none;
    border: none;
    background-color: #FFFFFF;
    width: 100%;
    color: #2B0707;
    font-family: 'gotham-bold';
    font-size: 20px;
    text-align: center;
    @media screen and (max-width: 960px) {
        font-size: 15px;
    }
    @media screen and (max-width: 450px) {
        font-size: 11px;
    }
`

const MintButton = styled.div`
    background: #F48E37 0% 0% no-repeat padding-box;
    height: 56px;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 17px;
    font-family: 'gotham-bold';
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
     @media screen and (max-width: 960px) {
        height: 42px;
        font-size: 14px;
    }
    @media screen and (max-width: 450px) {
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
    gap: 15px;
    align-items: center;
    @media screen and (max-width: 960px) {
        gap: 10px;
    }
    @media screen and (max-width: 450px) {
        gap: 6px;
    }
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