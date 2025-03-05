import Calculator from "./Calculator";
import Foot from "./Foot"
import Head from "./Head"
import Nav from "./Nav"
import { PageWrapper, Container, StyledMain, PageTitle} from "./Styling"
import styled from "styled-components";

const ProjectDiv = styled.div`
    padding:10px;
`;
const ProjectLI = styled.li`
    font-size: calc(10px + 1vw);
    color:#333333;
`;
const ProjectH3 = styled.h3`
    font-size: calc(15px + 1vw);
    color:#333333;
`;


export default function Projects(){
    return(
        <>
            <PageWrapper>
                <Head/>
                <Container>
                    <Nav/>
                    <StyledMain>
                            <PageTitle> Projects </PageTitle>
                            <hr/>
                            <ProjectDiv>
                                <ProjectH3><a href = "https://github.com/aaronhuan/Spotify"> Spotify Ranking</a></ProjectH3>
                                <ul>
                                <ProjectLI>Developing a Flask web application that integrates with Spotify Web API, allowing users to view their top tracks
                                and artists, and create personalized playlists</ProjectLI>
                                <ProjectLI>Implementing OAuth authentication using Spotipy library that handles token refreshes.</ProjectLI>
                                </ul>
                            </ProjectDiv>
                            <ProjectDiv>
                                <ProjectH3>JS calculator</ProjectH3>
                            </ProjectDiv>
                            <Calculator/>
                    </StyledMain>
                </Container>
                <Foot/>
            </PageWrapper>

        </>
    );
}
