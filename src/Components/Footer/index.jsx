import React from "react"
import './styles.scss'

export function Footer({tipo= 'footer'}){
  return(
    <footer className={tipo}>
      <p>&copy; copyright, 2021</p>
      <p>Alex | Paola</p>
    </footer>
  )
}