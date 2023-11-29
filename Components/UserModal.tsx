import Draggable from 'react-draggable';
import React, { useState } from 'react'
import Image from 'next/image';
import NavBar from './NavBar';
import styles from '../Components/Modale.module.css'

interface ModaleProsp {
    selectedName: {first: string ; last: string } | null;
    onCloseModale: () => void  ;
    isModalOpen: boolean ;
  
}

export default function UserModal({selectedName , onCloseModale , isModalOpen}: ModaleProsp) {
    
 
    if(!selectedName || !isModalOpen) {
        return null ;
    }

  return (

    <>
    <Draggable>

       <div className={styles.ModalContainer}>
        <NavBar selectedName={selectedName} onCloseModale={onCloseModale}  />
        <div className={styles.ModalInsideContainer}>
            <div className={styles.ModalInsideContainerLeftItems}>

                <div className={styles.ModalInsideContainerLeft_UserContainer}>
                    <Image src="/UserAvatar.svg" alt={'..'} height={24} width={24} /> 
                    <div className={styles.ModalInsideContainerLeft_UserContainer_Name}> {selectedName.first} </div>
                </div>
                <div className={styles.ModalInsideContainerLeft_UserContainer_Favorites}></div>

            </div>

        </div>
        <form>
            <input type='text' placeholder='enter a text '/>
        </form>

        </div> 
    </Draggable>
    
    
    </>
  )
}