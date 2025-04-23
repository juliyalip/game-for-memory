import React from 'react'
import style from './container.module.scss'

interface PropContainer {
    children: React.ReactNode
}

const Container = ({ children }: PropContainer) => {
    return (
        <div className={style.container}>
            {children}
        </div>
    )
}

export default Container