import React, { useEffect, useState } from 'react';
import LOading from '../Components/LOading';
import ShowBlog from './ShowBlog';

const Blog = () => {
  const [data, setData] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadData = async () => {
      try {
        const res = await fetch("/blog.json")
        const jsonData = await res.json();
        setData(jsonData);
      } catch (err) {
        console.log('hi ami to data painai tai aponi chola jan ga', err)
      } finally {
        setLoading(false);
      }
    };
    setTimeout(() => {
      loadData();
    }, 500);
  }, []);

  if (loading) return <LOading />

  return (
    <>
      <section className='min-h-[calc(100vh-72px)] space-y-4'>

        {
          data.map((blog, i) => <ShowBlog defaultChecked={i === 0} blog={blog} key={blog.id} />)
        }
      </section>
    </>
  );
};

export default Blog;