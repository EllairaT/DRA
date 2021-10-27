import { useSession, getSession } from 'next-auth/react'
import { useRouter } from 'next/router'
import Container from 'react-bootstrap/Container'
import Card from '../../components/FullJobCard'
import { server } from '../../config/index'

function JobView({ jobs }) {
  const { data: session, status } = useSession()
  // gets the id from the url string
  const router = useRouter()
  const { id } = router.query
  const jobData = jobs.filter((job) => job._id === `${id}`)

  // Currently it would crash if input is not a real id
  return (
    <>
      {Object.keys(router.query).length === 0 ? (
        'job not found'
      ) : (
        <>
          <h1>job id is: {`${jobData[0]._id}`}</h1>
          <Container>
            <Card props={jobData[0]} />
          </Container>
        </>
      )}
    </>
  )
}

export async function getServerSideProps(context) {
  const jobRes = await fetch(`/api/jobs`)
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
