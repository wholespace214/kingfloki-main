import styled from "styled-components"
import { LoaderVideo, EbmLoaderVideo } from "src/config/image"
import { useStore } from "src/context/storecontext"
import { useEffect } from "react"

interface MintLoaderProps {
    value: number
}

export const MintLoader = (props: MintLoaderProps) => {
    const { setMintStatus } = useStore();
    window.onbeforeunload = (event) => {
        const e = event || window.event;
        // Cancel the event
        e.preventDefault();
        if (e) {
            e.returnValue = ''; // Legacy method for cross browser support
            setMintStatus(0);
        }
        return ''; // Legacy method for cross browser support
    };
    const { value } = props;
    let randomLabel = "";
    let statusLabel = "";
    switch(value) {
        case 1:
            randomLabel = "Start the randomizing";
            statusLabel = "Confirm your Metamask transaction in order to start generating your NFT";
            break;
        case 2:
            randomLabel = "Generating your NFT";
            statusLabel = "Hang on a moment";
            break;
        case 3:
            randomLabel = "Your NFT is now ready!";
            statusLabel = "Confirm your Metamask transaction to start the minting process.";
            break;
        case 4:
            randomLabel = "Minting in progress";
            statusLabel = "Hang on a moment";
            break;
        case 5:
            randomLabel = "Congratulations!";
            statusLabel = "Your mint was successful";
            break;
        default:
            break;
    }
    return(
        <MintLoaderContainer value={value}>
            <MintLoaderWrapper>
                <StepLabel>
                    step {value} / 5
                </StepLabel>
                <RandomLabel>
                    {randomLabel}
                </RandomLabel>
                <LoaderGif playsInline loop autoPlay muted id="my-video-desktop">
                    <source src={LoaderVideo} type='video/mp4; codecs="hvc1"' id="background-video-source-desktop" />
                    <source src={EbmLoaderVideo} type="video/webm"></source>
                    Your browser does not support the video tag.
                </LoaderGif>
                <StatusLabel>
                    {statusLabel}
                </StatusLabel>
                {
                    value ===  5 &&
                    <CloseButton onClick={() => setMintStatus(0)}>Close</CloseButton>
                }
            </MintLoaderWrapper>
        </MintLoaderContainer>
    )
}

const ModalStyle = styled.div`
  z-index: 9999999999999;
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: #0F0F0F;
  transition: all linear 0.6s;
`;

interface MintLoaderContainerProps {
    value: number;
    children: React.ReactNode
}

const MintLoaderContainer = ({ value, children }: MintLoaderContainerProps) => {
    return(
        <ModalStyle style={{ visibility: value === 0  ? 'hidden' : 'visible', opacity: value === 0  ? 0 : 0.95 }}>
            {children}
        </ModalStyle>
    )
}

const MintLoaderWrapper = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    height: 100%;
`

const StepLabel = styled.div`
    font-size: 14px;
    color: #FFFFFF;
`

const RandomLabel = styled.div`
    font-size: 30px;
    font-family: 'gotham-bold';
    color: #F48E37;
    padding-top: 11px;
     @media screen and (max-width: 540px) {
        font-size: 24px;
    }
`

const LoaderGif = styled.video`
    width: 260px;
    height: 200px;
    padding-top: 37.5px;
`

const StatusLabel = styled.div`
    font-size: 16px;
    padding: 38px;
    width: 390px;
    text-align: center;
    @media screen and (max-width: 540px) {
        width: 280px;
        font-size: 14px;
    }
`

const CloseButton = styled.div`
    background: #F48E37 0% 0% no-repeat padding-box;
    height: 45px;
    border: none;
    width: 220px;
    border-radius: 50px;
    display: flex;
    justify-content: center;
    align-items: center;
    text-transform: uppercase;
    font-size: 14px;
    font-family: 'gotham-bold';
    color: #FFFFFF;
    cursor: pointer;
    user-select: none;
`