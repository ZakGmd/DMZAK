import Image from 'next/image'
import Link from 'next/link'
import styles from '../Components/Footer.module.css'

type Props = {}


export default function Footer() {



  return (
            <div className={styles.Footer}>
                <div className={styles.FooterContainer}>
                    <div className={styles.FooterContainerLeft}>
                        <Image src="/WindowsLogo.svg" alt={'..'} height={16} width={16} />
                        <Link className={styles.FooterContainerLeftItem} href={'/'} >Fetch</Link>
                    </div>

                </div>      
            </div>
  )
}