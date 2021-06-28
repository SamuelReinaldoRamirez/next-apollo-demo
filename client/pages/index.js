import Link from 'next/link'
import WithApollo from '../lib/with-apollo'
import Name from '../components/Name'

const Page = () => (
  <div>
    Welcome, <Name />
    <br/><br/>
    <Link href="/about"><a>About</a></Link>
    <Link href="/UserList"><a>userList</a></Link>


  </div>
)

export default WithApollo(Page)
