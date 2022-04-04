import { useEffect, useState } from 'react';
import styles from './index.module.css';
import { Input } from '@nvoice';

export function Index() {
  const [message, setMessage] = useState('');

  useEffect(() => {
    fetch('http://localhost:3333/api')
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        setMessage(data.message);
      });
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
