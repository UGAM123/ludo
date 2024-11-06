import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();
  function redirectToGame() {
    navigate("/game");
  }

  return <button onClick={redirectToGame}>New Game</button>;
};

export default Home;
