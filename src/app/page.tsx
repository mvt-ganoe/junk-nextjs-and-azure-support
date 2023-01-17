import Link from 'next/link'

const getCatFacts = async () => {
  const res = await fetch("https://catfact.ninja/fact")
  return res.json()
}

export default async function Home() {
  const catFacts = await getCatFacts();
  
  return (
    <main>
      <h1>{catFacts.fact}</h1>
      <Link href="/test">Test</Link>
    </main>
  )
}
