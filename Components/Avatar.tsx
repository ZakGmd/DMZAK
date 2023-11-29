import React from 'react'
import Image from 'next/image'
import styles from '../app/page.module.css'

interface AvatarListProps {
    index: { first: string; last: string };
    onNameClick: (name: { first: string; last: string }) => void;
  }

export default function Avatar({ index , onNameClick}: AvatarListProps) {

    function HnadleClick(){
        onNameClick(index)
    }
  return (
    <>
  
    
    <div className={styles.LeftContentItems} onClick={HnadleClick} >
    <div className={styles.LeftContentInsideItemsName}>
        {index.first}
    </div>
    <Image src="/UserAvatar.svg" alt={'..'} height={24} width={24} />
    </div>
   
    
    </>
  )
}