import Foot from "./Foot";
import Head from "./Head";
import Nav from "./Nav";
import { PageWrapper, Container, StyledMain, PageTitle} from "./Styling"
import styled from "styled-components";

const JobDiv = styled.div`
    padding:10px;
`;

const StyledH3 = styled.h3`
    font-size: calc(15px + 1vw);
    color:#333333;
`;
const StyledH4 = styled.h4`
    font-size: calc(10px + 1vw);
    color:#333333;
`;
const StyledLI = styled.li `
    font-size: calc(10px + 1vw);
    color:#333333;
`;
export default function Experiences(){
    return(
        <>
            <PageWrapper>
                <Head/>
                <Container>
                    <Nav/>
                    <StyledMain>
                            <PageTitle> Work Experience </PageTitle>
                            <hr/>
                            <JobDiv>
                                <StyledH3>Teaching and Research, Biobus- New York, NY | Junior Scientist</StyledH3>
                                <StyledH4><em>June 2023 - August 2023</em></StyledH4>
                                <ul>
                                    <StyledLI>Developed and implemented educational programs focused on biology and environmental science for K-12 students</StyledLI>
                                    <StyledLI>Acted as a principal investigator for high school students engaged in research, providing valuable support and 
                            assistance throughout their scientific endeavors that will be presented in a symposium.</StyledLI>
                                </ul>
                            </JobDiv>
                            <JobDiv>
                                <StyledH3>New York City Virus Hunter, Biobus- New York, NY | Junior Scientist</StyledH3>
                                <StyledH4><em>November 2021 - June 2022</em></StyledH4>
                                <ul>
                                    <StyledLI>Conducted comprehensive research on Influenza A and Newcastle disease viruses in collaboration with research institutions,
                            contributing to advancements in avian disease understanding.</StyledLI>
                                    <StyledLI>Conducted RNA extraction, gel electrophoresis, and PCR tests to
                            supplement data for a published research paper.</StyledLI>
                                </ul>
                            </JobDiv>
                    </StyledMain>
                </Container>
                <Foot/>
            </PageWrapper>            
        </>
    );
}