import { useSession, getSession, signIn } from 'next-auth/react'
import { server } from '../config/index'

export default function test({ jobs }) {
  console.log(jobs)
  return (
    <div>
      <small>
        You are running this application in <b>{process.env.NODE_ENV}</b> mode.
      </small>
      <form>
        <input type="hidden" defaultValue={process.env.REACT_APP_NOT_SECRET_CODE} />
      </form>
    </div>
  )
}
export async function getServerSideProps(context) {
  // const res = await fetch(`${server}/api/jobs`)
  // fetch data
  const jobRes = await fetch(`${server}/api/jobs`)
  // get json response for job
  const { data } = await jobRes.json()
  return {
    props: {
      jobs: data,
      session: await getSession(context)
    }
  }
}
