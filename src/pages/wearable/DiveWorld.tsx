import styled from "styled-components"
import { DeskDiveWorldPng } from "src/config/image"

export const DiveWorld = () => {
    return(
        <DiveWorldContainer>
            <DiveWorldImg />
            <DivWorldContent>
                <DivWorldLabel>
                    Dive into King’s World
                </DivWorldLabel>
                <ALink href="https://kingflokiworld.com" rel="noopenner noreferrer" target={"_blank"}>
                    <PlayButton>
                        Play Now
                    </PlayButton>
                </ALink>
            </DivWorldContent>
        </DiveWorldContainer>
    )
}

const DiveWorldContainer = styled.div`
    position: relative;
    width: 100%;
    background: #430202 0% 0% no-repeat padding-box;
    height: 1410px;
    display: flex;
    justify-content: center;
    @media screen and (max-width: 1072px) {
        height: 1100px;
    }
    @media screen and (max-width: 640px) {
        height: 800px;
    }
    @media screen and (max-width: 450px) {
        height: 600px;
    }
`

const DiveWorldImg = styled.img`
    content: url(${DeskDiveWorldPng});
    width: 100%;
    height: 100%;
    object-fit: cover;
`

const DivWorldContent = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    gap: 58px;
    position: absolute;
    bottom: 85px;
    @media screen and (max-width: 640px) {
        bottom: 40px;
        gap: 38px;
    }
`

const DivWorldLabel = styled.div`
    font-size: 32px;
    font-family: 'gotham-bold';
    text-transform: uppercase;
    @media screen and (max-width: 768px) {
        font-size: 24px;
    }
    @media screen and (max-width: 450px) {
        font-size: 18px;
    }
`

const PlayButton = styled.div`
    width: 182px;
    height: 56px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #F48E37 0% 0% no-repeat padding-box;
    font-size: 17px;
    font-family: 'gotham-bold';
    text-transform: uppercase;
    cursor: pointer;
    @media screen and (max-width: 768px) {
        width: 125px;
        height: 45px;
        font-size: 13px;
    }

     @media screen and (max-width: 450px) {
        width: 120px;
        height: 40px;
        font-size: 11px;
    }
`

const ALink = styled.a`
    outline: none;
    text-decoration: none;
    color: inherit
`