const Loader = () => {
  return (
    <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-[1px] bg-opacity-15 ">
      <div className="animate-spin rounded-full h-16 w-16 border-t-[8px] border-pink-300 border-solid"></div>
    </div>
  );
};

export default Loader;
