const MainArticle = () => {
  return (
    <div className="p-4 flex lg:flex-row flex-col-reverse gap-6">
      <article className="text-center  ">
        <h1 className="text-2xl font-bold mb-2">Lorem ipsum dolor</h1>
        <p className="text-gray-700">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </article>
      <img
        className="flex-1 lg:w-1/2 rounded-md shadow-lg "
        src="/images/iStock-654407498.jpg"
        alt="The main products"
      />
    </div>
  );
};

export default MainArticle;
