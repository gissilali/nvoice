import { useState } from 'react';
import styles from './index.module.css';
import { Input } from '@nvoice/ui';
import client from '../apollo-client';
import { gql } from 'apollo-server-core/dist/gql';

export function Index({ greeting }) {
  const [message, setMessage] = useState('');

  return (
    <div className=" p-8">
      {/* <h1 className={styles.title}>{message}</h1> */}
      <div className="mb-4 mt-4">
        <Input
          id="username"
          label="Username"
          value={message}
          onChange={(event) => {
            setMessage(event.target.value);
          }}
          placeholder="Username"
        />
      </div>

      <Input
        id="email"
        label="Email"
        value={message}
        onChange={(event) => {
          setMessage(event.target.value);
        }}
        placeholder="Email"
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
