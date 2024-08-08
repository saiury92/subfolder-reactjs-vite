import { useNavigate } from "react-router-dom";

function Home() {
  const navigate = useNavigate();

  const goToAbout = () => {
    navigate("/about");
  };

  return (
    <div>
      <h2>Home Page</h2>
      <p>Welcome to the Home page!</p>
      <button onClick={goToAbout}>Go to About</button>
    </div>
  );
}

export default Home;
