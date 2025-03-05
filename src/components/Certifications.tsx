import Foot from "./Foot";
import Head from "./Head";
import Nav from "./Nav";
import { PageWrapper, Container, StyledMain, PageTitle, MainText, MainTextDiv, ImgWrapper, StyledIMG} from "./Styling"
import styled from "styled-components";

const StyledH3 = styled.h3`
    font-size: calc(18px + 1.3vw);
`

const OrgDiv = styled.div`
    padding:10px;
`;
export default function Certifications(){
    return(
        <>
            <PageWrapper>
                <Head/>
                <Container>
                    <Nav/>
                    <StyledMain>
                            <PageTitle> Certifications </PageTitle>
                            <hr/>
                            <MainTextDiv>
                                <OrgDiv>
                                    <StyledH3> Codepath</StyledH3>
                                    <MainText><a href ="https://drive.google.com/file/d/1TiqOOcRSVBrO-ohyrI3H7sRr825tfaGi/view?usp=sharing" target = "_blank">Intro to Web Development Certificate</a></MainText>
                                    <MainText><a href ="https://drive.google.com/file/d/1wHRg1mPYf6fNJuzCYdEuHcHpkS5HHwYV/view" target = "_blank">Intro to Technical Interview Prep Certificate</a></MainText>
                                </OrgDiv>
                                <OrgDiv>
                                    <StyledH3> McTesbook</StyledH3>
                                    <MainText>certificate of award</MainText>
                                    <ImgWrapper>
                                        <StyledIMG src="/fakecert.jpg" alt = "certificate of award for Aaron Huang"/>
                                    </ImgWrapper>
                                </OrgDiv>
                            </MainTextDiv>
                    </StyledMain>
                </Container>
                <Foot/>
            </PageWrapper>            
        </>
    );
}