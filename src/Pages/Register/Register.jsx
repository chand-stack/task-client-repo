import { useState } from "react";
import img from "../../assets/MainImage.png";
import { useForm } from "react-hook-form";
const Register = () => {
  const [selecteGender, setSelectedGender] = useState(null);
  const [selectedHear, setSelectedHear] = useState(null);
  const [state, setState] = useState("");
  const { register, handleSubmit } = useForm();

  const handleGenderClick = (gender) => {
    setSelectedGender(gender === selecteGender ? null : gender);
  };
  const handleHearClick = (hear) => {
    setSelectedHear(hear === selectedHear ? null : hear);
  };
  const handleState = (e) => {
    console.log(e.target.value);
    if (e.target.value === "Mumbai") {
      setState("Maharashtra");
    } else {
      if (e.target.value === "Pune") {
        setState("Gujarat");
      } else {
        if (e.target.value === "Ahmedabad") {
          setState("Karnataka");
        }
      }
    }
  };

  const onSubmit = async (data) => {
    // console.log(data);
    const name = data.name;
    const email = data.email;
    const password = data.password;
    const phone = data.number;
    const gender = selecteGender;
    const hear = selectedHear;
    const city = data.city;
    const citystate = state;
    console.log(name, email, password, phone, gender, hear, city, citystate);
  };

  return (
    <div className="w-full bg-[#F2D335]">
      <div className="container mx-auto grid md:grid-cols-2 min-h-screen pt-3 px-2">
        <div className="hidden md:contents">
          <img className="mx-auto" src={img} alt="" />
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="text-2xl font-bold">Signup Here</h1>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Name</span>
            </div>
            <input
              {...register("name")}
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
              placeholder="Your password"
              className="input input-bordered w-full max-w-md"
            />
          </label>
          <label className="form-control w-full max-w-md">
            <div className="label">
              <span className="label-text font-semibold">Phone</span>
            </div>
            <input
              {...register("number")}
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
                  onChange={() => handleGenderClick("male")}
                  type="checkbox"
                  checked={selecteGender === "male"}
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Female</span>
                <input
                  onChange={() => handleGenderClick("female")}
                  type="checkbox"
                  checked={selecteGender === "female"}
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Other</span>
                <input
                  onChange={() => handleGenderClick("other")}
                  type="checkbox"
                  checked={selecteGender === "other"}
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
                  onChange={() => handleHearClick("linkedin")}
                  type="checkbox"
                  checked={selectedHear === "linkedin"}
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Friends</span>
                <input
                  onChange={() => handleHearClick("friends")}
                  type="checkbox"
                  checked={selectedHear === "friends"}
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Job Portal</span>
                <input
                  onChange={() => handleHearClick("job portal")}
                  type="checkbox"
                  checked={selectedHear === "job portal"}
                  className="checkbox checkbox-warning"
                />
              </label>
              <label className="cursor-pointer label bg-white rounded-xl">
                <span className="label-text">Others</span>
                <input
                  onChange={() => handleHearClick("others")}
                  type="checkbox"
                  checked={selectedHear === "others"}
                  className="checkbox checkbox-warning"
                />
              </label>
            </div>
          </div>
          <div className="label">
            <span className="label-text font-semibold">Select City</span>
          </div>
          <select
            {...register("city")}
            onChange={handleState}
            className="select select-bordered w-full max-w-md"
          >
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
              {...register("state")}
              required
              value={state}
              className="input input-bordered w-full max-w-md"
              placeholder="Search"
            />
          </div>
          <div className="form-control mt-6 max-w-md">
            <button type="submit" className="btn btn-primary">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
