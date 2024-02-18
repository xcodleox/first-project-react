import React,{useState, useRef} from 'react'

import axios from 'axios'
import People from '../../assets/people.svg'
import Seta from '../../assets/arrow.svg'
import {useNavigate} from 'react-router-dom'

import H1 from '../../components/Title'
import ContainerItens from '../../components/ContainerItens'
import Button from '../../components/Button'
import {
    Container,
    InputLabel,
    Input,
    Image,
} from './style';

function App(){
     
const [users, setUsers] = useState([]); // ESTADO
const inputName = useRef()
const inputAge = useRef();
const navigate = useNavigate()



    async function addNewUser(){
        const { data: newUser } = await axios.post("http://localhost:3001/users", {
            name:inputName.current.value,
            age: inputAge.current.value,
        });
       

        setUsers([...users, newUser]);
        navigate(1)
    }



    return (
        <Container>
            <Image alt="logo-imagem" src={People} />
            <ContainerItens>

                <H1>Olá</H1>

                <InputLabel>Nome</InputLabel>
                <Input ref={inputName} placeholder="Nome" />

                <InputLabel>Idade</InputLabel>
                <Input ref={inputAge} placeholder="Idade" />

                <Button to='/usuarios'  onClick={addNewUser}>Cadastrar<img alt="seta" src={Seta} /></Button>
               
            </ContainerItens>
        </Container>
    );
}

export default App; //
