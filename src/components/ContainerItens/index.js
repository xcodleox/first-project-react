import React from 'react'
import {ContainerItens as Container} from './style'

function ContainerItens({children, userContainer}){
    console.log(userContainer)
    return <Container userContainer={userContainer}>{children}</Container>
}





export default ContainerItens