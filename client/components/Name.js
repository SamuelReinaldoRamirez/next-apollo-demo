import { gql, useQuery } from '@apollo/client';


const Component = () => {

  const query = gql`
  query {
    info
  }
`
  const { loading, error, data} = useQuery(query);
  if (loading) return (<span>loading...</span>)
  if(error) return (<span>error</span>)
  return(
    console.log(data.info),
    <span>{data.info}</span>
  )}

export default Component


