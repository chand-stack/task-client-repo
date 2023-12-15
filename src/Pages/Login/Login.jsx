import img from "../../assets/MainImage.png";
const Login = () => {
  return (
    <div className="w-full bg-[#F2D335]">
      <div className="container mx-auto grid md:grid-cols-2 items-center min-h-screen pt-3 px-2">
        <div className="hidden md:contents">
          <img className="mx-auto" src={img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Login Here</h1>

          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Email</span>
            </div>
            <input
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
              type="number"
              placeholder="Your number here"
              className="input input-bordered w-full max-w-md"
            />
          </label>
          <div className="form-control mt-6 max-w-md">
            <button className="btn btn-primary">Login</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
