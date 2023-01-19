import styled from "styled-components"
import { DeskIslandPng, DeskKingFlokiVideo, MobIslandPng } from "src/config/image"

export const Welcome = () => {
    return(
        <WelcomeContainer>
            <WelcomeCardContainer>
                <WelcomeCardWrapper>
                    <video playsInline loop autoPlay muted id="nft-video-desktop">
                         <source src={DeskKingFlokiVideo} type='video/mp4' id="kingfloki-video-source-desktop" />
                    </video>
                    <WelcomeCardContent> 
                        <WelcomeCardContentWrapper>
                            <PrimaryTitle>What is King Floki?</PrimaryTitle>
                            <SecondaryTitle>WELCOME TO THE METAVERSE</SecondaryTitle>
                            <ContentText>
                                King Floki is a creative metaverse built in Webgl, born to improve people’s accessibility and gaming    experience.<br /><br /> King Floki is made for everyone but to also allow adult users to generate tangible wealth through the game experience.<br /><br /> Through our tradable wearables, competition winning, land monetisation and constant playing, our users are able to experience a fully solvent ecosystem where they are able to generate and manage their own prosperity.
                            </ContentText>
                        </WelcomeCardContentWrapper>
                    </WelcomeCardContent>
                </WelcomeCardWrapper>
            </WelcomeCardContainer>
            <WelcomeLabel>CREATE. BUILD. INTERACT. OWN. TRADE.</WelcomeLabel>
            <WelcomeImage alt="welcome-image" />
        </WelcomeContainer>
    )
}

const WelcomeContainer = styled.div`
    background-color: #6AD3FE;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    height: 948px;
    position: relative;
    z-index: 1;
    @media screen and (max-width: 1160px) {
        height: 1500px;
    }
    @media screen and (max-width: 768px) {
        height: 1200px;
    }
    @media screen and (max-width: 540px) {
        height: 960px;
    }
`

const WelcomeCardContainer = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
    position: absolute;
    top: -90px;
    @media screen and (max-width: 1160px) {
        top: -60px
    }

`

const WelcomeCardWrapper = styled.div`
    display: flex;
    height: 400px;
    @media screen and (max-width: 1160px) {
        flex-direction: column-reverse;
        width: 450px;
        height: auto;
    }
    @media screen and (max-width: 768px) {
        width: 370px;
    }

    @media screen and (max-width: 540px) {
        width: 320px;
    }

    @media screen and (max-width: 450px) {
        width: 250px;
    }
`

const WelcomeLabel = styled.div`
    font-size: 36px;
    font-family: 'gotham-bold';
    text-transform: uppercase;
    @media screen and (max-width: 1160px) {
        padding-top: 20rem;
    }
    @media screen and (max-width: 960px) {
        font-size: 24px;
    }
    @media screen and (max-width: 768px) {
        font-size: 20px;
        padding-top: 30rem;
    }
    @media screen and (max-width: 540px) {
        padding-top: 20rem;
        font-size: 16px;
        width: 240px;
        text-align: center;
    }
`

const WelcomeImage = styled.img`
    content: url(${DeskIslandPng});
    object-fit: cover;
    position: absolute;
    bottom: 0;
    z-index: 2;
    width: 100%;
    height: 640px;
    @media screen and (max-width: 768px) {
        height: 420px;
    }
`

const WelcomeCardContent = styled.div`
    width: 502px;
    background: #2B0707 0% 0% no-repeat padding-box;
    @media screen and (max-width: 1160px) {
        width: 100%;
    }
`

const WelcomeCardContentWrapper = styled.div`
    padding: 50px;
    @media screen and (max-width: 540px) {
        padding: 35px;
    }
    @media screen and (max-width: 450px) {
        padding: 25px;
    }
`

const PrimaryTitle = styled.div`
    font-size: 35px;
    font-family: 'gotham-bold';
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 450px) {
        width: 150px;
    }
`

const SecondaryTitle = styled.div`
    font-size: 14px;
    font-family: 'gotham-bold';
    color: #F48E37;
    padding-top: 15px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`

const ContentText = styled.div`
    font-size: 14px;
    padding-top: 10px;
    @media screen and (max-width: 768px) {
        font-size: 12px;
    }
`