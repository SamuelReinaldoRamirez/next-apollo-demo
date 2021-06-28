import { gql, useQuery } from '@apollo/client';

const Component = () => {

  const query = gql`
  query name {
    name
  }
`
  const { loading, error, data} = useQuery(query);
  if (loading) return (<span>loading...</span>)
  if(error) return (<span>error</span>)
  return(
    <span>{data.name}</span>
  )}

  /*function ShowingSomeErrors() {
    const { loading, error, data } = useQuery(MY_QUERY, { errorPolicy: 'all' });
    if (loading) return <span>loading...</span>
    return (
      <div>
        <h2>Good: {loading? '..' : data.name}</h2>
        <pre>Bad: {error.graphQLErrors.map(({ message }, i) => (
          <span key={i}>{message}</span>
        ))}
        </pre>
      </div>
    );
  }
*/

export default Component


