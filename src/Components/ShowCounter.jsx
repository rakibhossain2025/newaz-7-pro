
import CountUp from 'react-countup';

const ShowCounter = ({ count }) => {
  const { description, image, To } = count;

  return (
    <div className='bg-white items-start flex flex-col gap-2 w-full p-4 mt-3 rounded-2xl'>
      <img src={image} alt="" />
      <CountUp
        start={0}
        end={To}
        duration={3}
        enableScrollSpy
        scrollSpyOnce
      >
        {({ countUpRef }) => (
          <h1 className='font-bold text-3xl '>
            <span ref={countUpRef}></span>+
          </h1>
        )}
      </CountUp>

      <p className='text-gray-600 font-semibold text-sm'>{description}</p>
    </div>
  );
};


export default ShowCounter;

