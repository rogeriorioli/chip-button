import React, { ButtonHTMLAttributes } from 'react'

import {ButtonContainer, BtnProps} from './styles'

interface ButtonProps extends BtnProps, ButtonHTMLAttributes<HTMLButtonElement>  {
    label : string
    icon? : string
    close? : string

}


const Button = ({
    label , 
    icon, 
    close, 
    background, 
    textcolor,
    ...props

} :ButtonProps) => (
    <ButtonContainer {...props} background={background} textcolor={textcolor}>
        <img src={icon} alt={label} srcSet={icon}/>
        <span>{label}</span> 
        <img src={close} alt={label} srcSet={close}/>
    </ButtonContainer>
);


export default Button;