import styled from "styled-components"

interface GiftCardProps {
    img: string;
    titleImg?: string;
    title: string;
    content: string;
    link: string;
}

export const GiftCard = (props: GiftCardProps) => {
    const { img, titleImg, title, content, link } = props;
    return(
        <GiftCardContainer>
            <GiftCardImg src={img} alt="gift-card-img" />
            <GiftCardContent>
                <GiftCardTitle>
                    {titleImg !== undefined && <Img src={titleImg} alt="title-gif" />}
                    {title}
                </GiftCardTitle>
                <GiftCardDetail>
                    {content}
                </GiftCardDetail>
                <GiftCardAction>
                    <ALink href={link} rel="noreferror noopener">
                        <ComingSoonButton>
                            Coming Soon
                        </ComingSoonButton>
                    </ALink>
                </GiftCardAction>
            </GiftCardContent>
        </GiftCardContainer>
    )
}

const GiftCardContainer = styled.div`
    display: flex;
    flex-direction: column;
    width: 392px;
`
const GiftCardImg = styled.img`
    width: 100%;
    height: 325px;
`

const GiftCardContent = styled.div`
    padding: 32px 42px;
    background: #2B0707 0% 0% no-repeat padding-box;
`

const GiftCardTitle = styled.div`
    display: flex;
    gap: 10px;
    font-family: 'gotham-bold';
    font-size: 25px;
    text-align: center;
    justify-content: center;
`

const GiftCardDetail = styled.div`
    font-size: 14px;
    padding-top: 22px;
    text-align: center;
`

const GiftCardAction = styled.div`
    width: 100%;
    display: flex;
    justify-content: center;
`

const ComingSoonButton = styled.div`
    width: 165px;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 12px;
    font-family: 'gotham-bold';
    margin-top: 18px;
    background: #F48E37 0% 0% no-repeat padding-box;
    cursor: pointer;
`

const Img = styled.img`
    width: 30px;
    height: 30px;
`

const ALink = styled.a`
    outline: none;
    text-decoration: none;
    color: inherit
`