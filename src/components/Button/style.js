import styled from "styled-components";
import {Link} from 'react-router-dom'

export const Button = styled(Link)`
display: flex;
align-items: center;
justify-content: center;
width: 342px;
height: 74px;
gap: 20px;
text-decoration:none;


background: rgba(0,0,0, 0.8);
border-radius: 14px;
border: none;

font-style: normal;
font-weight: bold;
font-size: 17px;
line-height: 28px;

color: #ffffff;
cursor: pointer;

&:hover{
    opacity: 0.8;
};
&:active{
    opacity: 0.6;
};
margin-top: 130px;



${(props) => props.buttonContainer && `
    margin-top: 120px; 
    background:transparent;
    border: 1px solid #ffffff;
    img
    {
    transform: rotateY(180deg);
    }

    `}

`;