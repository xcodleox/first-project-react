import styled from 'styled-components'
import Background from '../../assets/background.svg'

export const Container = styled.div`
    background: url("${Background}");
    background-size: cover;
    display: flex;
    flex-direction: column;
    gap: 40px;
    align-items: center;

    height: 100%;
    min-height: 100vh;
`;

export const Image = styled.img`
margin-top:30px;

`;
export const ContainerItens = styled.div`
    background: linear-gradient(
        157.44deg,
        rgba(255,255,255, 0.6) 0.84%,
        rgba(255,255,255, 0.6) 0.85%,
        rgba(255,255,255, 0.15) 100%);
    border-radius:  61px 61px 0px 0px;
    padding: 50px 36px;
    display: flex;
    flex-direction: column;
    min-height: calc(100vh - 170px);
        backdrop-filter: blur(45px);

        `;
export const H1 = styled.h1`
font-size: 34px;
font-style: normal;
font-weight: bold;
line-height: 40px;
text-align: center;
color: #ffffff;
margin-bottom: 80px;
`;

export const Button = styled.button`
display: flex;
align-items: center;
justify-content: center;
width: 342px;
height: 74px;
gap: 20px;
text-decoration:none;



margin-top: 120px;
background:transparent;
border-radius: 14px;
border: 1px solid #ffffff;

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

img{
    transform: rotateY(180deg);
}

`;


export const User = styled.li`
display: flex;
    align-items: center;
    justify-content: space-around;
    background: rgba(255,255,255, 0.25);
box-shadow: 0px 4px 4px rgba(0,0,0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
border: none;
outline: none;
margin-top:20px;

p{
font-style: normal;
font-weight: normal;
font-size: 20px;
line-height: 28px;

color: #ffffff;
}
button{
    background: none;
    border: none;
    cursor: pointer;
}

`;