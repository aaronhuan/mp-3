import styled from "styled-components"

export const PageWrapper= styled.div`
    width: 80vw;
    height: 100vh;
    margin: 0 auto;
`;

export const Container = styled.div`
    display: flex;
    width :100%;
    @media screen and (max-width:750px){
        flex-direction: column;
    }
`;

export const StyledMain = styled.main `
    width : 70%;
    height:100vh;
    background-color: #FFE6D6;

    @media screen and (max-width:750px){
        width:100%;
    }
`;

export const PageTitle = styled.h3`
    font-size: 3vw;
    text-align: center;
    margin:2vh 0;
    color:#34495E;

    @media screen and (max-width:750px){
        font-size: calc(7px + 3vw);
    }
`;

export const ImgWrapper = styled.div`
    width: 40%;
`;

export const MainTextDiv= styled.div`
    margin: 1vh 1vw;
`;

export const MainText = styled.p`
    color:#333333;
    font-size: calc(2px + 2vw);
    margin: 2vh 0;

    @media screen and (max-width: 750px) {
        font-size: calc(4px + 3vw);
    }
`;

export const StyledIMG = styled.img`
    max-width : 100%;
    float:left;
    margin: 1vh 1vw;
`;