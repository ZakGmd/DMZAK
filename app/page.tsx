"use client"
import Footer from '@/Components/Footer'
import UserModal from '@/Components/UserModal'
import Link from 'next/link'
import Image from 'next/image'
import styles from './page.module.css'
import { UserData } from './types/type'
import { use, useState } from 'react';
import NavBar from '@/Components/NavBar'
import Avatar from '@/Components/Avatar'


export default function Home() {

  const [receivedData, setReceivedData] = useState<UserData[]>();
  const [name , setName] = useState<{first: string , last: string} | null>(null) ; 
  const [isModalOpen, setIsModalOpen] = useState(false);

  

  function dataLoaded(data: UserData[]){
    setReceivedData(data);
    
  }

  function selectedName(name :{first: string , last: string}){

    setName(name);
    setIsModalOpen(true) ;

  }

  function onCloseModale(){
    setIsModalOpen(false) ;
  }
  

 
  return (
    <>
     <NavBar selectedName={name} onCloseModale={onCloseModale}/>
     <main className={styles.main}>
        <div className={styles.LeftContent}>
          {receivedData && receivedData.slice(0,4).map((index)=>
          
          (
            
          <div className={styles.LeftContentItems} key={index.id}>

            <Avatar index={index} onNameClick={selectedName} />
          </div>

          ))}
          
          
        </div>
        <UserModal selectedName={name} onCloseModale={onCloseModale} isModalOpen={isModalOpen} />
    </main>
    <Footer onData={dataLoaded}/>
    </>
   
  )
}
