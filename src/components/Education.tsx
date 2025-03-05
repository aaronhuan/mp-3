import Foot from "./Foot";
import Head from "./Head";
import Nav from "./Nav";
import { PageWrapper, Container, StyledMain, PageTitle} from "./Styling"
import styled from "styled-components";

const SchoolDiv = styled.div`
    color:#333333;
    border-left: 2px solid blue;
    margin: 10px 0 10px 8px !important;
    padding:10px 10px 10px 4px;
    border-left: calc(0.1vw + 5px) solid black;
`;

const StyledH3 = styled.h3`
    font-size: calc(18px + 1vw);
`
const StyledH4 = styled.h4`
    font-size: calc(10px + 1vw);
`;
const StyledP = styled.p`
    font-size: calc(5px + 1vw);
    margin: 2vh 0;
`;

export default function Education(){
    return(
        <>
            <PageWrapper>
                <Head/>
                <Container>
                    <Nav/>
                    <StyledMain>
                            <PageTitle> Education </PageTitle>
                            <hr/>
                            <SchoolDiv>
                                <StyledH3>Boston University| Boston, MA</StyledH3>
                                <StyledH4><em>Expected December 2026</em></StyledH4>
                                <StyledP><em>Bachelor of Arts in Computer Science</em></StyledP>
                                <StyledP>Relevant Coursework: Data Structures and Algorithms, Discrete Mathematics, Linear Algebra, Probability in Computing</StyledP>
                            </SchoolDiv>
                            <SchoolDiv>
                                <StyledH3>SUNY Binghamton| Vestal, NY</StyledH3>
                                <StyledH4><em>August 2022 - May 2023</em></StyledH4>
                                <StyledP><em>Bachelor of Arts in Biology</em></StyledP>
                                <StyledP>Relevant Coursework: Calculus 2, Introduction to Coding (Python), Programming in Action</StyledP>
                            </SchoolDiv>
                    </StyledMain>
                </Container>
                <Foot/>
            </PageWrapper>            
        </>
    );
}