"use client"

import React, { useState } from 'react'
import styles from '../Components/Nav.module.css'
import Image from 'next/image'
import { UserData } from '@/app/types/type';


interface NavProps {

    selectedName: { first: string; last: string } | null;

  }


export default function NavBar({selectedName}: NavProps) {


  return (
    <>
    
        <div className={styles.Nav} >
        <div className={styles.LeftNavContent}>
        <Image src="/NavLogo.svg" alt={'..'} height={24} width={24} />
        { selectedName ? (
        <div className={styles.NavText}>{selectedName.first}</div>
        ) : (
        <div className={styles.NavText}>Dummy</div>    
        )
    }
      </div>
      <div className={styles.RightNavContent}>
        <div className={styles.RightIcon}>
          <div className={styles.InsideIcon}></div>
        </div>
        <div className={styles.RightIcon}>
          <div className={styles.InsideIcon2}></div>
        </div>
        <div className={styles.RightIcon}>
          <div className={styles.InsideIcon3}></div>
        </div>
      </div>
     </div>
    
    
    </>
    
  )
}