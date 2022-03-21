
import Layout from '../components/Layout'
import Main from '../components/Main'
import SignIn from '../components/SignIn';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../components/Firebase';


const IndexPage = () => {
  const [user] = useAuthState(auth);
  return (
  <Layout title="Home | Next.js + TypeScript Example">
    {user ? 
    <Main /> : <SignIn />
    }
  </Layout>
)
  }

export default IndexPage
