import { GiftCard } from "src/components/GiftCard"
import { KFCompetition, KFRunVisual } from "src/config/image"
import styled from "styled-components"

const CardData = [
    {
        id: 1,
        img: KFRunVisual,
        title: "Trade on Opensea",
        content: "Trade and purchase wearable collection on Opensea. Find specific wearable NFTs that you are looking for listed by other users.",
        btnName: "Coming Soon",
        link: ""
    },
    {
        id: 2,
        img: KFCompetition,
        title: "Evolve your NFTs",
        content: "Once you have gathered enough common wearables that you are not interested in, you will be able to fuse them into rarer wearables.",
        btnName: "Coming Soon",
        link: ""
    }
]

export const PlayCards = () => {
    return(
        <PlayCardsContainer>
            <PlayCardsWrapper>
                {
                    CardData.map((item) => (
                        <GiftCard img={item.img} title={item.title} content={item.content} link={item.link} btnName={item.btnName} key={item.id} />
                    ))
                }
            </PlayCardsWrapper>
        </PlayCardsContainer>
    )
}

const PlayCardsContainer = styled.div`
    width: 100%;
    height: 480px;
    background: #430202 0% 0% no-repeat padding-box;
    position: relative;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1072px) {
        height: 1040px;
    }

    @media screen and (max-width: 768px) {
        height: 920px;
    }

    @media screen and (max-width: 450px) {
        height: 780px;
    }
`

const PlayCardsWrapper = styled.div`
    display: flex;
    gap: 37px;
    position: absolute;
    top: -100px;
    @media screen and (max-width: 1072px) {
        flex-direction: column;
    }
    @media screen and (max-width: 450px) {
        gap: 24px;
    }
`