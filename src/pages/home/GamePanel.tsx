import { BgBottom, KingFloki3D } from "src/config/image"
import styled from "styled-components"

export const GamePanel = () => {
    return(
        <GamePanelContainer>
            <BackgroundImg src={BgBottom} alt={'background-img'} />
            <GamePanelContent>
                <KingFlokiLogo src={KingFloki3D} alt='kingfloki-logo'/>
                <GamePanelLabel>It’s time to try the game demo</GamePanelLabel>
                <ALink href="https://kingflokiworld.com" rel="noopenner noreferrer" target={"_blank"}>
                    <PlayButton>Play Now</PlayButton>
                </ALink>
            </GamePanelContent>
        </GamePanelContainer>
    )
}

const GamePanelContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
`
const BackgroundImg = styled.img`
    width: 100%;
    height: 576px;
    object-fit: cover;
    @media screen and (max-width: 840px) {
        height: 450px;
    }
    @media screen and (max-width: 596px) {
        height: 395px;
    }
`
const GamePanelContent = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: absolute;
    flex-direction: column;
    gap: 20px;
`

const KingFlokiLogo = styled.img`
    width: 200px;
    height: auto;
    @media screen and (max-width: 840px) {
        width: 150px;
    }
    @media screen and (max-width: 596px) {
        width: 120px;
    }
`

const GamePanelLabel = styled.div`
    font-size: 24px;
    font-family: 'gotham-bold';
    text-align: center;
    padding-bottom: 20px;
    @media screen and (max-width: 840px) {
        font-size: 20px;
    }
    @media screen and (max-width: 596px) {
       font-size: 16px;
    }
`

const PlayButton = styled.div`
    width: 182px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F48E37 0% 0% no-repeat padding-box;
    text-transform: uppercase;
    font-family: 'gotham-bold';
    font-size: 17px;
    cursor: pointer;
    @media screen and (max-width: 840px) {
        width: 164px;
        height: 48px;
        font-size: 15px;
    }

    @media screen and (max-width: 596px) {
        width: 102px;
        height: 38px;
        font-size: 11px;
    }
`

const ALink = styled.a`
    outline: none;
    text-decoration: none;
    color: inherit
`