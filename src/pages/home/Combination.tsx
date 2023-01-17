import styled from "styled-components"
import { CharacterGroup, GradientRarity, KFVideo3 } from 'src/config/image'

export const Combination = () => {
    return(
        <>
            <CombinationContainer>
                <CombinationWrapper>
                    <NFTCard playsInline loop autoPlay muted id="nft-video-desktop">
                        {/* <Img src={RaityGif} alt="raity-gif" /> */}
                        <source src={KFVideo3} type="video/mp4" id="background-video-source-desktop" /> 
                    </NFTCard>
                    <CombinationDetails>
                        <CombinationTitle>5 rarities, 6 categories, 2m+ combination</CombinationTitle>
                        <CombinationMiniTitle>SCARCITY AND TRAITS</CombinationMiniTitle>
                        <CombinationContent>
                            
                            Our users will be able to find five different rarities (Common, Rare, Epic, Legendary and 1/1 pieces) and five different traits (hat, eyes, mouth, outfit, skin and special).<br /><br />
                        
                            The chances to pack wearables are proportional to their growth in rarity, the higher the rarity level the harder to find one of them in a single mint. <br /><br /> 
                            
                            For example, Rowan mints 20 times, he finds 10 common wearables, 6 rares, 3 epics, 1 legendary and none 1/1 pieces. Aria mints 20 times, she finds 8 common wearables, 8 rares, 2 epics, 1 legendary and 1/1 pieces. <br /><br />
                            
                            These randomised to the highest extents, allowing our users to try luck and improve their outfits as they mint.
                        
                        </CombinationContent>
                    </CombinationDetails>
                </CombinationWrapper>
            </CombinationContainer>
            <NFTCharacters>
                <NFTImg src={CharacterGroup} alt="character-group" />
            </NFTCharacters>
        </>
    )
}

const CombinationContainer = styled.div`
    padding: 105px;
    display: flex;
    justify-content: center;
    background: #430202 0% 0% no-repeat padding-box;
    @media screen and (max-width: 1072px) {
        padding: 64px;
    }
`

const CombinationWrapper = styled.div`
    display: flex;
    align-items: center;
    gap: 116px;
    @media screen and (max-width: 1072px) {
        gap: 64px;
    }
    @media screen and (max-width: 840px) {
        flex-direction: column;
    }
`

const NFTCard = styled.video`
    width: 420px;
    height: auto;
    @media screen and (max-width: 1072px) {
        width: 360px;
    }
    @media screen and (max-width: 840px) {
        width: 300px;
    }
    @media screen and (max-width: 540px) {
        width: 240px;
    }
`

const CombinationDetails = styled.div`
    width: 415px;
    @media screen and (max-width: 1072px) {
        width: 320px;
    }
    @media screen and (max-width: 540px) {
        width: auto;
    }
`

const CombinationTitle = styled.div`
    letter-spacing: -0.35px;
    font-size: 35px;
    text-align: left;
    font-family: 'gotham-bold';
    line-height: 50px;
    @media screen and (max-width: 1072px) {
        font-size: 25px;
        line-height: 40px;
    }
    @media screen and (max-width: 540px) {
        font-size: 20px;
        line-height: 30px;
        width: 240px;
    } 
`

const CombinationMiniTitle = styled.div`
    color: #F48E37;
    font-size: 14px;
    font-family: 'gotham-bold';
    padding-top: 20px;
    @media screen and (max-width: 540px) {
        font-size: 12px;
        padding-top: 10px;
    }
`

const CombinationContent = styled.div`
    padding-top: 20px;
    font-size: 14px;
    letter-spacing: -0.14px;
    line-height: 20px;
    width: 374px;
    @media screen and (max-width: 1072px) {
        width: 320px;
    }
    @media screen and (max-width: 540px) {
        width: 280px;
    }
    @media screen and (max-width: 390px) {
        width: 240px;
    }
`

const NFTCharacters = styled.div`
    width: 100%;
    height: auto;
    object-fit: fill;
    /* background: transparent url(${GradientRarity}) 0% 0% no-repeat padding-box; */
    background-repeat: no-repeat;
    background-size: cover;
    background-color: #430202; 
    background: transparent linear-gradient(180deg, #430202 20%, #F09648 100%) 0% 0% no-repeat padding-box;
`

// const Img = styled.img`
//     width: 100%;
//     height: auto;
// `
const NFTImg = styled.img`
    width: 100%;    
    height: auto;
    margin-bottom: -60px;
    @media screen and (max-width: 1280px) {
        margin-bottom: -40px;
    }
    @media screen and (max-width: 960px) {
        margin-bottom: -35px;
    }
    @media screen and (max-width: 720px) {
        margin-bottom: -25px;
    }
    @media screen and (max-width: 540px) {
        margin-bottom: -20px;
    }
    @media screen and (max-width: 420px) {
        margin-bottom: -15px;
    }
`