import img from "../../assets/MainImage.png";
const Register = () => {
  return (
    <div className="container mx-auto bg-[#F2D335] grid md:grid-cols-2">
      <div className="">
        <img src={img} alt="" />
      </div>
      <div>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Name</span>
          </div>
          <input
            type="text"
            placeholder="Your name"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Email</span>
          </div>
          <input
            type="email"
            placeholder="Your email"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <label className="form-control w-full max-w-xs">
          <div className="label">
            <span className="label-text">Phone</span>
          </div>
          <input
            type="number"
            placeholder="Your number here"
            className="input input-bordered w-full max-w-xs"
          />
        </label>
        <div className="form-control w-full max-w-md">
          <div className="label">
            <span className="label-text">Gender</span>
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
            <span className="label-text">How did you hear about this?</span>
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
      </div>
    </div>
  );
};

export default Register;
