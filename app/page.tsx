"use client"
import Footer from '@/Components/Footer'
import Link from 'next/link'
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
     <main className={styles.main}>
      <div className={styles.Button}>
        <Link href={'/'} className={styles.link}>Click</Link>
       
      </div>
      {receivedData && (
        <div className={styles.Data}>
          
         
            {receivedData.map((item) => (
              <div key={item.id}>
                {item.first} {item.last}
              </div>
            ))}
          
        </div>
      )}
    </main>
    <Footer onData={dataLoaded}/>
    </>
   
  )
}
