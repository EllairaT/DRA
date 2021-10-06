import Container from 'react-bootstrap/Container'
import Card from '../../components/FullJobCard'
import { useRouter } from 'next/router'
import { useSession, getSession } from 'next-auth/react'


function JobView({ jobs }) {
  const { data: session, status } = useSession()
  // gets the id from the url string
  const router = useRouter()
  const { id } = router.query
  const job = jobs.filter(job => job._id === `${id}`)


  // Currently it would crash if input is not a real id
  return (
    <>
      {Object.keys(router.query).length === 0 ? 'job not found' : <h1>job id is: {`${job._id}`}</h1>}
      <Container>
        <Card props={job[0]} />
      </Container>
    </>
  )
}

export async function getServerSideProps(context) {
  const jobRes = await fetch('http://localhost:3000/api/jobs')
  // get json response for job
  const { data } = await jobRes.json()
  return {
    props: {
      jobs: data,
      session: await getSession(context)
    }
  }
}

export default JobView