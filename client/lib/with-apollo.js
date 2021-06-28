import { useRouter } from "next/router";
import nextWithApollo from "next-with-apollo";
import { ApolloClient, ApolloProvider, InMemoryCache, HttpLink } from "@apollo/client";

const apolloClient = nextWithApollo(
  () => {
    return new ApolloClient({
      link: new HttpLink({
        uri: "http://localhost:5000/graphql",
      }),
      cache: new InMemoryCache(),
    });
  },
  {
    render: ({ Page, props }) => {
      const router = useRouter();
      return (
        <ApolloProvider client={props.apollo}>
          <Page {...props} {...router} />
        </ApolloProvider>
      );
    },
  }
  )

export default apolloClient;