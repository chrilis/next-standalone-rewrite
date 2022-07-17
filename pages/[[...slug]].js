export default function Home({ query, resolvedUrl }) {
  return (
        <pre>{JSON.stringify({ query, resolvedUrl }, null, 2)}</pre>
  )
}

export const getServerSideProps = ({query, resolvedUrl}) => {
  return {
    props: {
      query,
      resolvedUrl
    }
  }
}
