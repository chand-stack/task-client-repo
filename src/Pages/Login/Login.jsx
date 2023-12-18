import { useContext } from "react";
import img from "../../assets/MainImage.png";
import { AuthContext } from "../../AuthProvider/Authprovider";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { register, handleSubmit } = useForm();
  const { signInUser } = useContext(AuthContext);

  const navigate = useNavigate();
  const onSubmit = async (data) => {
    signInUser(data.email, data.password)
      .then(() => {
        navigate("/dashboard/alluser");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <div className="w-full bg-[#F2D335]">
      <div className="container mx-auto grid md:grid-cols-2 items-center min-h-screen pt-3 px-2">
        <div className="hidden md:contents">
          <img className="mx-auto" src={img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Login Here</h1>

          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text font-semibold">Email</span>
              </div>
              <input
                {...register("email")}
                type="email"
                placeholder="Your email"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text font-semibold">Password</span>
              </div>
              <input
                {...register("password")}
                type="password"
                placeholder="Your number here"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <div className="form-control mt-6 max-w-md">
              <button type="submit" className="btn btn-primary">
                Login
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Login;
