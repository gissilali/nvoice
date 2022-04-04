import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Input } from '@nvoice/ui';
import client from '../apollo-client';
import { gql } from 'apollo-server-core/dist/gql';

export function Index({ greeting }) {
  const [message, setMessage] = useState('');

  useEffect(() => {
    setMessage(greeting);
  }, []);

  return (
    <div className="bg-gray-100">
      <h1 className={styles.title}>{message}</h1>
      <Input
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        placeholder="message here"
      />
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
