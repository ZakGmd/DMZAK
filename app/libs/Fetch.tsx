export async function getName() {

    const res = await fetch('https://retoolapi.dev/qQ6bml/Zakgmddd')
    if(!res.ok){
      throw new Error('Failed to fetch data')
    }    
    return res.json()
 }