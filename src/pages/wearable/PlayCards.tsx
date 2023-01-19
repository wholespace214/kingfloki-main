import { GiftCard } from "src/components/GiftCard"
import { KFCompetition, KFRunVisual } from "src/config/image"
import styled from "styled-components"

const CardData = [
    {
        id: 1,
        img: KFRunVisual,
        title: "Play to earn",
        content: "As you dive into King Floki, you can find new ways to generate wealth and own liquidity.",
        btnName: "Run Now",
        link: ""
    },
    {
        id: 2,
        img: KFCompetition,
        title: "King competitions",
        content: "Compete and win. Online weekly competitions against other KF users to win cash prizes and unique in game NFTs.",
        btnName: "Compete Now",
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