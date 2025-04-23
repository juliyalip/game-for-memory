import React from 'react'
import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>{
    children: React.ReactNode,
    onClick:(e: React.MouseEvent<HTMLButtonElement>)=>void,
    disabled?: boolean
}

const Button =({children, disabled, ...rest}: ButtonProps) =>{
    return (<button disabled={disabled} className={styles.base} {...rest} >{children}</button>)
}

export default Button