import { Container } from '@material-ui/core'
import Image from 'next/image'
import React from 'react'
import styles from './Header.module.css'



export default function Header() {
  return (
    <Container fluid="true" >
      <nav className={styles.header_container}>
        <div className={styles.logo}>
        <Image src={'/logo.svg'} width={100} height={50} alt='arrow' />
        </div>
          <div className={styles.header_items_middle_wrapper}>
            <div className={styles.header_item_middle}>
              <ul className={styles.list_wrapper}>
                <li>Explore</li>
                <li>Secondary Market</li>
                <li>Supper Stay</li>
                <li>About Us</li>
              </ul>
            </div>
          </div>
        <div className={styles.menue}>
          <Image src={'/logo.svg'} width={100} height={50} alt='arrow' />
        </div> 
      </nav>
    </Container>
  )
}
