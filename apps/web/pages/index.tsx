import client from '../apollo-client';
import { gql } from 'apollo-server-core/dist/gql';

export function Index({ greeting }) {
  return (
    <div className=" p-8">
      <h1>{greeting}</h1>
    </div>
  );
}

export default Index;

export async function getServerSideProps() {
  const { data } = await client.query({
    query: gql`
      query Query {
        hello
      }
    `,
  });

  return {
    props: {
      greeting: data.hello,
    },
  };
}
