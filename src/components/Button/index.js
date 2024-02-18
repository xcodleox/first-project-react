import React from 'react'
import {Button as CointainerButton} from './style'

function Button({children, ...props}){
    return <CointainerButton {...props}>{children}</CointainerButton>
}


export default Button