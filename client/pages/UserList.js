import Link from 'next/link'
import WithApollo from '../lib/with-apollo'
import UserList from '../components/UserList'

const Page = () => (
  <div>
<UserList />
    <br/><br/>
    <Link href="/about"><a>About</a></Link>

  </div>
)

export default WithApollo(Page)
