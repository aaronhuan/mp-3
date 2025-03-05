import Foot from "./Foot"
import Head from "./Head"
import Nav from "./Nav"
import { PageWrapper, Container, StyledMain, PageTitle, ImgWrapper, MainTextDiv, MainText, StyledIMG } from "./Styling"

export default function Home(){
    return(
        <>
            <PageWrapper>
                <Head/>
                <Container>
                    <Nav/>
                    <StyledMain>
                            <PageTitle> Home </PageTitle>
                            <hr/>
                                <ImgWrapper>
                                    <StyledIMG src="/photo_of_me.jpeg" alt="Aaron Huang with books in the background" />
                                </ImgWrapper>
                                <MainTextDiv>
                                    <MainText>I'm Aaron Huang a undergraduate student at Boston University studying Computer Science.
                                        I have an interest in web development, software development, and healthcare. I would love to extend my experiences towards these fields or any other fields with connection to technology. </MainText>                
                                    <MainText> If you have an opportunity for me please reach out to me via email- ahuan@bu.edu.</MainText>
                                </MainTextDiv>

                    </StyledMain>
                </Container>
                <Foot/>
            </PageWrapper>

        </>
    );
}
