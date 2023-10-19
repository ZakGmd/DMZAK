'use client' ;

import { UserData } from '@/app/types/type';
import Image from 'next/image'
import Link from 'next/link'
import { cache } from 'react';
import styles from '../Components/Footer.module.css'

interface ChildComponentProps {
    
    onData: (data: UserData[] ) => void;

  }




export default function Footer({onData} : ChildComponentProps) {
    
     async function FetchData(){
        const res = await fetch('https://retoolapi.dev/qQ6bml/Zakgmddd', { cache: 'no-store' })
        if(!res.ok){
        throw new Error('Failed to fetch data')
        }   
        const body: UserData[] = await res.json() ;
        onData(body) 
        
    }

  return (
            <div className={styles.Footer}>
                <div className={styles.FooterContainer}>
                    <div className={styles.FooterContainerLeft}>
                        <Image src="/WindowsLogo.svg" alt={'..'} height={16} width={16} />
                        <Link className={styles.FooterContainerLeftItem} href={'/'} onClick={FetchData} >Fetch</Link>
                    </div>

                </div>      
            </div>
  )
}


