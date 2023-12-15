import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <h1>this is home page</h1>
      <Link to="/login" className="btn">
        Login
      </Link>
      <Link to="/register" className="btn">
        Register
      </Link>
    </div>
  );
};

export default Home;
