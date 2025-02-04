```javascript
// pages/about.js
import {useEffect, useState} from 'react';

export default function About() {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const res = await fetch('/api/data');
        if (!res.ok) {
          const errorData = await res.json(); // Attempt to parse error response
          throw new Error(errorData.error || res.statusText);
        }
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err.message);
      }
    }
    fetchData();
  }, []);

  if (error) return <p>Error: {error}</p>;
  if (!data) return <p>Loading...</p>;

  return (
    <div>
      <h1>About Page</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
}
```
```javascript
// pages/api/data.js

export default async function handler(req, res) {
  try {
    // Simulate an API call that might sometimes fail
    if (Math.random() < 0.5) {
      throw new Error('Failed to fetch data');
    }
    res.status(200).json({ message: 'Data fetched successfully' });
  } catch (error) {
    console.error('API Error:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}
```