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
    @media screen and (max-width: 768px) {
        width: 320px;
    }

    @media screen and (max-width: 450px) {
        width: 270px;
    }

    @media screen and (max-width: 350px) {
        width: 225px;
    }
`
const GiftCardImg = styled.img`
    width: 100%;
    height: 325px;
    @media screen and (max-width: 768px) {
        height: 260px;
    }

    @media screen and (max-width: 450px) {
        height: 230px;
    }

    @media screen and (max-width: 350px) {
        height: 185px;
    }
`

const GiftCardContent = styled.div`
    padding: 32px 42px;
    background: #2B0707 0% 0% no-repeat padding-box;
    @media screen and (max-width: 450px) {
        padding: 18px 30px;
    }
`

const GiftCardTitle = styled.div`
    display: flex;
    gap: 10px;
    font-family: 'gotham-bold';
    font-size: 25px;
    text-align: center;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 768px) {
       font-size: 18px;
    }

    @media screen and (max-width: 450px) {
       font-size: 20px;
    }
`

const GiftCardDetail = styled.div`
    font-size: 14px;
    padding-top: 22px;
    text-align: center;
    @media screen and (max-width: 768px) {
       font-size: 12px;
    }
    @media screen and (max-width: 350px) {
       font-size: 11px;
    }
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
    text-transform: uppercase;
    @media screen and (max-width: 450px) {
        width: 120px;
        height: 30px;
        font-size: 10px;
    }
    @media screen and (max-width: 350px) {
        width: 95px;
        height: 25px;
        font-size: 9px;
    }
`

const Img = styled.img`
    width: 30px;
    height: 30px;
    @media screen and (max-width: 450px) {
       display: none;
    }
`

const ALink = styled.a`
    outline: none;
    text-decoration: none;
    color: inherit
`