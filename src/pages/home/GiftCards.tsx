import styled from "styled-components"
import { PotionBox, TradeOpenseaImg, OpenseaLogo } from "src/config/image"
import { GiftCard } from "src/components/GiftCard"

const CardData = [
    {
        id: 1,
        img: TradeOpenseaImg,
        titleImg: OpenseaLogo,
        title: "Trade on Opensea",
        content: "Trade and purchase wearable collection on Opensea. Find specific wearable NFTs that you are looking for listed by other users.",
        link: ""
    },
    {
        id: 2,
        img: PotionBox,
        title: "Evolve your NFTs",
        content: "Once you have gathered enough common wearables that you are not interested in, you will be able to fuse them into rarer wearables.",
        link: ""
    }
]

export const GiftCards = () => {
    return(
        <GiftCardsContainer>
            <PrimaryLayer />
            <SecondaryLayer />
            <GiftCardsWrapper>
                {
                    CardData.map((item) => (
                        <GiftCard img={item.img} titleImg={item.titleImg} title={item.title} content={item.content} link={item.link} key={item.id} />
                    ))
                }
            </GiftCardsWrapper>
        </GiftCardsContainer>
    )
}

const GiftCardsContainer = styled.div`
    position: relative;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`

const PrimaryLayer = styled.div`
    width: 100%;
    height: 327px;
    background: #2B0707 0% 0% no-repeat padding-box;
`

const SecondaryLayer = styled.div`
    width: 100%;
    height: 450px;
    background: #430202 0% 0% no-repeat padding-box;
`

const GiftCardsWrapper = styled.div`
    display: flex;
    gap: 38px;
    position: absolute;
    @media screen and (max-width: 1072px) {
        flex-direction: column;
    }
`