import Foot from "./Foot";
import Head from "./Head";
import Nav from "./Nav";
import { PageWrapper, Container, StyledMain, PageTitle, ImgWrapper, StyledIMG} from "./Styling"
import styled from "styled-components";

const AchieveDiv = styled.div`
    margin: 10px 0 10px 8px !important;
    padding:10px 10px 10px 4px;
    border-left: calc(0.1vw + 5px) solid black;
`;

const AchieveH3 = styled.div`
    font-size: calc(10px + 1.3vw);
    color:#333333;
`;

const AchieveLI = styled.li`
    font-size: calc(10px + 1vw);
    margin: 2vh 0;
    color:#333333;
`;

export default function Achievements(){
    return(
        <>
            <PageWrapper>
                <Head/>
                <Container>
                    <Nav/>
                    <StyledMain>
                            <PageTitle> Achievements </PageTitle>
                            <hr/>
                            <AchieveDiv>
                                <AchieveH3>Second Place Proposal Project</AchieveH3>
                                <ul>
                                    <AchieveLI>Scientific Proposal Project for BIOL 113</AchieveLI>
                                </ul>
                            </AchieveDiv>
                            <AchieveDiv>
                                <AchieveH3>Albert Shanker College Scholarship</AchieveH3>
                                <ul>
                                    <AchieveLI>$5,000 college scholarships to 189 high school seniors</AchieveLI>
                                    <AchieveLI>awarded to academically excellent and financially eligible students from New York City public schools</AchieveLI>
                                </ul>
                                <ImgWrapper>
                                    <StyledIMG src="/shanker-scholarship.png" alt = "Albert Shanker College Scholarship Fund of the United Federation Of Teachers"/>
                                </ImgWrapper>
                            </AchieveDiv>
                    </StyledMain>
                </Container>
                <Foot/>
            </PageWrapper>            
        </>
    );
}