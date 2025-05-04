import { useEffect, useState } from 'react';
import ShowCounter from './ShowCounter';

const Counter = () => {
  const [count, setCount] = useState([])
  useEffect(() => {
    fetch('/counter.json')
      .then(res => res.json())
      .then(data => setCount(data))
  }, [])
  return (
    <>
      <h1 className='text-center font-bold text-3xl mb-1'>We Provide Best Medical Services</h1>
      <p className='text-lg text-gray-700 text-center w-4/5 mx-auto mb-2 '>Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. </p>
      <div className='grid grid-cols-2 lg:grid-cols-4 place-items-center gap-12 '>
        {
          count.length > 0 && count.map(c => <ShowCounter key={c.id} count={c}></ShowCounter>)
        }
      </div>
    </>
  );
};

export default Counter;