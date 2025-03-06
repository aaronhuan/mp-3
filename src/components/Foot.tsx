import styled from "styled-components";
import { Link } from "react-router-dom"
const StyleP = styled.p `
font-family: Georgia, 'Times New Roman', Times, serif;
`;

export default function Foot(){
    return(
        <StyleP>All rights reserved by Aaron Huang <Link to="">Credits</Link> &#169; </StyleP>
    ); 
}
