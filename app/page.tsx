
import Link from 'next/link'
import styles from './page.module.css'


async function getName() {

  const res = await fetch('https://retoolapi.dev/Sa6CV9/dummyzak')
  if(!res.ok){
    throw new Error('Failed to fetch data')
  }    
  return res.json()
}
export default async function Home() {
  const data = await getName() ;
  console.log(data)
  return (
    <main className={styles.main}>
      <div className={styles.Button}>
        <Link href={'/'} className={styles.link} onClick={getName}>Click</Link>
      </div>
    </main>
  )
}
