import { useState, useEffect } from 'react';
import styled from "styled-components";
const CalcContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    padding:20px;
    gap:20px;
`;
const TitleP = styled.p`
    font-size: calc(5px + 1.4vw);
`;
const ActCalc = styled.div`
    border: 2px solid black;
    padding:20px 10px 40px 10px;
    background-image: url(/calc_background.jpg);
    background-repeat: no-repeat;
    background-position: center;
    background-size: cover;
    width:100%;

    @media screen and (max-width: 750px){
        padding:10px;
    }
`;

const InputsDiv = styled.div`
    display: flex;
    gap:10px;
    flex-wrap:wrap;
`;

const StyledInput = styled.input`
    font-size: calc(0.5vw + 20px);
`;

const StyledLabel = styled.label`
    font-size:calc(1vw + 7px);
    background-color: #FFE6D6;

    @media screen and (max-width: 750px) {
        font-size:calc(13px + 1vw);
    }
`;

const StyledButtonDiv = styled.div`
    display:flex;
    justify-content: space-evenly;
    flex-wrap: wrap;
    margin: 10px;
`;
const StyledButton = styled.button`
    border-radius: 8px;
    background-color: #FFFFFF;
    border: 2px solid black;
    font-size: 20px;
`;
const ResultP = styled.p`
    font-size:calc(1vw + 7px);
    background-color: #FFE6D6;
    display: inline;

    @media screen and (max-width: 750px) {
        font-size:calc(13px + 1vw);
    }
`;

const AnswerP = styled.p`
    font-size: calc(14px + 0.5vw);
    background-color: white;
    border: 2px solid black;
    width:80%;
    height:30px;
    @media screen and (max-width: 750px) {
        width:100%;
    }
`



export default function Calculator(){
    const [op, setOp] = useState("");
    const [first, setFirst] = useState("");
    const [second, setSecond] = useState("");
    const [result, setResult] = useState(0); 

    let fnum = Number (first);
    let snum = Number(second); 

    function power (first:number ,second:number){
        if (isNaN(first) || isNaN(second)){
            return NaN;
        }
        if(second ===0){
            return 1;
        }
        if (first ===0){
            return 0;
        }
    
        let result = 1;
        if (second <0){
            for(let i=0;i <(-1)*second; i++ ){
                result *=first;
            }  
            result = 1/result;
        } else{
            for(let i=0;i <second; i++ ){
                result *=first;
            }
        }
    
        return result;
    }

    function output (){
        
        let res:number = 0;
        switch (op) {
            case "+":
                res = (fnum + snum);
        
                break;
            case "-":
                res= (fnum - snum);
              break;
            case "*":
                res=(fnum*snum);
    
                break;
    
            case "/":
                res=(fnum/snum);
                break;
    
            case "**":
                res= (power(fnum,snum));
    
                break;
            
            case "clear":
                res=0;
                setFirst("");
                setSecond("");
                setOp("");
                break;
            default:
    
              break;
          }

        setResult(res);
    }
    useEffect(() => {
        if (op !== "") {
            output();
        }
    }, [op]);

    return(
        <CalcContainer>
            <TitleP>Simple Calculator</TitleP>
            <ActCalc>
                <InputsDiv>
                    <div>
                        <StyledLabel>input first number:</StyledLabel>
                        <StyledInput id = "firstnum" value = {first} onChange={(e) => setFirst(e.target.value)}/> 
                        {/* https://stackoverflow.com/questions/55757761/handle-an-input-with-react-hooks */}
                    </div>
                    <div>
                        <StyledLabel>input second number:</StyledLabel>
                        <StyledInput id="secondnum" value ={second}onChange={(e) => setSecond(e.target.value)}/>
                    </div>
                </InputsDiv>
                <StyledButtonDiv>
                    <StyledButton onClick={()=>setOp("+")}>+</StyledButton>
                    <StyledButton onClick={()=>setOp("-")}>-</StyledButton>
                    <StyledButton onClick={()=>setOp("*")}>*</StyledButton>
                    <StyledButton onClick={()=>setOp("/")}>/</StyledButton>
                    <StyledButton onClick={()=>setOp("**")}>**</StyledButton>
                    <StyledButton onClick={()=>setOp("clear")}>clear</StyledButton>

                </StyledButtonDiv>
                <ResultP>result: </ResultP>
                <AnswerP style={{color:result<0 ? 'red' : 'black'}}>{result}</AnswerP>
                {/* https://www.pluralsight.com/resources/blog/guides/inline-styling-with-react */}
            </ActCalc>
        </CalcContainer>
    );
}