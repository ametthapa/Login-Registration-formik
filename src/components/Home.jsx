const Home = () => {
  const user = window.localStorage.getItem("name");
  return (
    <div className="text-6xl font-bold h-full w-full text-center flex items-center justify-center">
      Hello "{user}". How are you?
    </div>
  );
};

export default Home;
