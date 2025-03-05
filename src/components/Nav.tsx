import { Link } from "react-router-dom";
import styled from "styled-components";
const StyledNav = styled.nav`
    width: 30%;
    height: 100vh;
    background-color: #607D8B;

    @media screen and (max-width: 750px) {
        width: 100%;
        height: auto;
    }
`;
const StyledLink =styled(Link)`
    text-decoration: none;
`;
const StyledUL = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    list-style-type: none;
    font-size: calc(2px + 2vw);
    margin: 0;
    padding: 0;
    height: 100%;
    text-decoration: none;

    @media screen and (max-width: 750px){
        flex-direction: row;
        flex-wrap: wrap; 
        justify-content: space-evenly; 
        gap: 10px; 
        padding:10px; 
    }
`;

const StyledLI = styled.li`
    background-color:#F5F5F5 ;
    width: 90%;
    margin:auto; 
    text-align: center;
    text-decoration: none;

    @media screen and (max-width:750px){
        width:auto;
        font-size: calc(2vw + 4px);
        padding: 5px; 
    }
`;

export default function Nav(){
    return(
        <StyledNav>
            <StyledUL>
                <StyledLI> <StyledLink to={'/'}>Home</StyledLink> </StyledLI>
                <StyledLI><StyledLink to={'/education'}> Education</StyledLink></StyledLI>
                <StyledLI><StyledLink to={'/experiences'}>Experiences</StyledLink></StyledLI>
                <StyledLI><StyledLink to={'/certifications'}>Certifications</StyledLink></StyledLI>
                <StyledLI><StyledLink to={'/achievements'}>Achievements</StyledLink></StyledLI>
                <StyledLI><StyledLink to= {'/projects'}>Projects</StyledLink></StyledLI>
            </StyledUL>
        </StyledNav>
    );
}
