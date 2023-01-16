import styled from "styled-components"

export const Explanation = () => {
    return(
        <>
            <ExplanationContainer>
                <ExplanationWrapper>
                    <KingFlokiVideo>

                    </KingFlokiVideo>
                    <ExplainSection>
                        <ExplainTitle>Who is King Floki</ExplainTitle>
                        <ExplainContent>
                            <ExplainMiniTitle>The Lore</ExplainMiniTitle>
                            <ExplainContentContainer>
                                <ExplainContentSection>There was once a sailor named King Floki who had spent most of his life sailing the seas. One day, as he was sailing through uncharted waters, <br /><br />King saw something on the horizon that he had never seen before: a small, green dot that seemed to be getting closer and closer. As he sailed towards it, he realized that it was an island, unlike any he had ever seen. The island was covered in dense, tropical forests, and there were sparkling streams and waterfalls everywhere he looked.</ExplainContentSection>
                                <ExplainContentSection>As he explored the island, King met a group of friendly natives who lived in harmony with nature and had never seen outsiders before. They welcomed him with open arms and showed him the secrets of the island. <br/><br/> King Floki was fascinated by the culture and traditions of the people, and he became especially interested in their unique style of dress.</ExplainContentSection>
                                <ExplainContentSection>He learned how to weave colorful fabrics and make intricate patterns, and he even started his own fashion line inspired by the island mixed with his western perception, finally launching the King Floki wearable collection, a collection that meant the very beginning of the growth and diversification of the island.</ExplainContentSection>
                            </ExplainContentContainer>
                        </ExplainContent>
                    </ExplainSection>
                </ExplanationWrapper>
            </ExplanationContainer>
            <NFTVideo />
        </>
    )
}

const ExplanationContainer = styled.div`
    background-color: #2B0707;
    padding: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
`
const ExplanationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    gap: 78px;
`
const KingFlokiVideo = styled.div`
    width: 100%;
    height: 420px;
    background-color: #FFE3A4;
    /* @media screen and (max-width: 1064px) {
        width: 640px;
    } */
`

const ExplainSection = styled.div`
    display: flex;
    flex-direction: column;
    gap: 24px;
`

const ExplainTitle = styled.div`
    font-size: 35px;
    font-family: 'gotham-bold';
    @media screen and (max-width: 640px) {
         font-size: 30px;
    }
    @media screen and (max-width: 450px) {
         font-size: 25px;
    }
`

const ExplainContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 10px;
`

const ExplainMiniTitle = styled.div`
    font-size: 14px;
    font-family: 'gotham-bold';
    color: #F48E37;
    @media screen and (max-width: 1064px) {
         font-size: 20px;
    }
    @media screen and (max-width: 640px) {
         font-size: 17px;
    }
    @media screen and (max-width: 450px) {
         font-size: 14px;
    }
`

const ExplainContentContainer = styled.div`
    display: flex;
    gap: 38px;
    @media screen and (max-width: 1064px) {
        flex-direction: column;
    }
`

const ExplainContentSection = styled.div`
    width: 250px;
    height: auto;
    @media screen and (max-width: 1064px) {
         font-size: 16px;
         width: 500px;
    }
    @media screen and (max-width: 640px) {
         font-size: 12px;
         width: 320px;
    }
    @media screen and (max-width: 450px) {
         font-size: 12px;
         width: 250px;
    }
`

const NFTVideo = styled.div`
    background-color: #FFE3A4;
    height: 496px;
    width: 100%;
`