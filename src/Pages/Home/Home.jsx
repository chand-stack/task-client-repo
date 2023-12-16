import { Link } from "react-router-dom";
import img from "../../assets/MainImage.png";
const Home = () => {
  return (
    <div>
      <div className="hero min-h-screen bg-[#F2D335]">
        <div className="hero-content flex-col lg:flex-row">
          <img src={img} />
          <div>
            <h1 className="text-5xl font-bold">Box Office News!</h1>
            <p className="py-6">
              Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
              excepturi exercitationem quasi. In deleniti eaque aut repudiandae
              et a id nisi.
            </p>
            <div className="flex flex-row gap-4">
              <Link
                to="/register"
                className="btn bg-[#F2D335] text-black md:text-xl btn-outline"
              >
                Signup
              </Link>
              <Link
                to="/login"
                className="btn bg-[#F2D335] text-black md:text-xl btn-outline"
              >
                Signin
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
