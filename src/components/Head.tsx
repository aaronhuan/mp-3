import styled  from "styled-components";

const StyleHead = styled.header`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    background-color: #D9E8F5;
    color: #2A3B55;

    @media screen and (max-width:750px){
        align-items: center;
    }
`;
export default function Head(){
    return(
        <StyleHead>
            <h1> Aaron Huang </h1>
            <p> My Online Resume </p>
        </StyleHead>
    );
}