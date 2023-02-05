import Head from "next/head";



interface MyHeadProps {
  page : string | undefined
}

const MyHead = (props:MyHeadProps) => {

  const title = props.page === undefined ? "Filip Niedzielski | Personal Website" : `${props.page} | Filip Niedzielski`

  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content="Filip Niedzielski's personal webpage." />
      <link rel="icon" href="/favicon.ico" />
    </Head>
  )
}

export default MyHead