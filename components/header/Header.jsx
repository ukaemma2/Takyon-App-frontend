import { Container } from '@material-ui/core'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'



export default function Header() {
  return (
    <Container fluid="true" >
      <div className={styles.header_container}>
        <div className={styles.arrow_box}>
          <Image src={'/white_arrow.svg'} width={12} height={12} alt='arrow' />
        </div>
        <div className={styles.logo}>
          <Image src={'/logo.svg'} width={100} height={100} alt='arrow' />
        </div> 
      </div>
    </Container>
  )
}
