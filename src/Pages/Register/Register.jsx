import img from "../../assets/MainImage.png";
const Register = () => {
  return (
    <div className="w-full bg-[#F2D335]">
      <div className="container mx-auto grid md:grid-cols-2 min-h-screen pt-3 px-2">
        <div className="hidden md:contents">
          <img className="mx-auto" src={img} alt="" />
        </div>
        <div>
          <h1 className="text-2xl font-bold">Signup Here</h1>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Name</span>
            </div>
            <input
              type="text"
              placeholder="Your name"
              className="input input-bordered w-full max-w-md"
            />
          </label>
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
              <span className="label-text font-semibold">Phone</span>
            </div>
            <input
              type="number"
              placeholder="Your number here"
              className="input input-bordered w-full max-w-md"
            />
          </label>
          <div className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Gender</span>
            </div>
            <div className="flex justify-between gap-3 ">
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Male</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Female</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Other</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
            </div>
          </div>
          <div className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">
                How did you hear about this?
              </span>
            </div>
            <div className="flex justify-between gap-3 ">
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">LinkedIn</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Friends</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Job Portal</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Others</span>
                <input
                  type="checkbox"
                  checked="checked"
                  className="checkbox checkbox-warning"
                />
              </label>
            </div>
          </div>
          <div className="label">
            <span className="label-text font-semibold">Select City</span>
          </div>
          <select className="select select-bordered w-full max-w-md">
            <option disabled selected>
              Select City
            </option>
            <option>Mumbai</option>
            <option>Pune</option>
            <option>Ahmedabad</option>
          </select>
          <div className="label">
            <span className="label-text font-semibold">State</span>
          </div>
          <div>
            <input
              required
              className="input input-bordered w-full max-w-md"
              placeholder="Search"
            />
          </div>
          <div className="form-control mt-6 max-w-md">
            <button className="btn btn-primary">Save</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
