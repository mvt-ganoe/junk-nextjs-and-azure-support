import Link from 'next/link'

const getBitcoin = async () => {
  const res = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json")
  return res.json()
}

const TestPage = async () => {
  const bitCoin = await getBitcoin()

  console.log(bitCoin)
  return (
    <>
      <h1>Testing page</h1>
      <p>Bitcoin rate in USA {bitCoin.bpi.USD.rate}</p>
      <Link href="/">Fact</Link>
    </>
  )
}

export default TestPage