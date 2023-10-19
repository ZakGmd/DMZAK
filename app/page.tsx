"use client"
import Footer from '@/Components/Footer'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { UserData } from './types/type'
import { useState } from 'react';


export default function Home() {
  const [receivedData, setReceivedData] = useState<UserData[]>();

  const dataLoaded = (data: UserData[]) =>{
    console.log("this is the parent Component",data) ;
    setReceivedData(data);
  }
 
  
  
 
  return (
    <>
     <div className={styles.Nav}>
      <div className={styles.LeftNavContent}>
        <Image src="/NavLogo.svg" alt={'..'} height={24} width={24} />
        <div className={styles.NavText}>Dummy</div>
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
     <main className={styles.main}>
        <div className={styles.LeftContent}>
          {receivedData && receivedData.slice(0,4).map((index)=>
          
          (
            
          <div className={styles.LeftContentItems} key={index.id}>

            <div className={styles.LeftContentItems}>
            <div className={styles.LeftContentInsideItemsName}>
              {index.first}
            </div>
            <Image src="/UserAvatar.svg" alt={'..'} height={24} width={24} />
            </div>
          </div>

          ))}
          
          
        </div>
     
    </main>
    <Footer onData={dataLoaded}/>
    </>
   
  )
}
