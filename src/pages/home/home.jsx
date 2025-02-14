import { useNavigate } from "react-router-dom";
import Container from "../../components/molecules/container/container";

const Home = () => {
  const navigate = useNavigate();
  return (
    <Container type={"templateDashboard"}>
      <div className="title">
        <h2>Dasboard</h2>
      </div>
      <div className="contentCards">
        <div className="contentCards__card">card1</div>
        <div className="contentCards__card">card2</div>
        <div className="contentCards__card">card3</div>
      </div>
      <div>
      <button onClick={() => navigate("/listUsers")}>lista</button>
      </div>
     
    </Container>
  );
};

export default Home;
