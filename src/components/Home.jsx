import { useHistory } from "react-router";

const Home = () => {
  const history = useHistory();
  const logOut = () => {
    window.localStorage.removeItem("loggedIn");
    history.push("/signin");
  };
  const user = window.localStorage.getItem("name");
  return (
    <>
      <button
        type="button"
        className="absolute right-3 top-3 sm:right-5 sm:top-5 p-2 sm:p-3 sm:font-semibold bg-red-600 text-white rounded-md"
        onClick={() => logOut()}
      >
        Log Out
      </button>
      <div className="text-6xl font-bold h-full w-full text-center flex items-center justify-center">
        Hello "{user}". How are you?
      </div>
    </>
  );
};

export default Home;
