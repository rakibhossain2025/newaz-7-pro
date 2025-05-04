const ShowBlog = ({ blog, defaultChecked }) => {
  const { ans, name } = blog
  return (
    <div className="collapse collapse-plus bg-base-100 border border-base-300">
      <input type="radio" name="my-accordion-3" defaultChecked={defaultChecked} />
      <div className="collapse-title font-semibold">{name}</div>
      <div className="collapse-content text-sm"><span className='text-xl font-bold'>Answer:</span> <br />{ans}</div>
    </div>
  );
};

export default ShowBlog;