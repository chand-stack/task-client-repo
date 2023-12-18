import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { IoPersonAddSharp } from "react-icons/io5";
const Alluser = () => {
  const [userList, setUserList] = useState([]);
  const { register, handleSubmit } = useForm();

  const { data, refetch } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await axios
        .get("http://localhost:5000/user")
        .then((response) => {
          setUserList(response.data.data);
        });
    },
  });

  const userAddHandler = () => {
    // axios.post("http://localhost:5000/user")
    document.getElementById("my_modal_1").showModal();
    document.getElementById("savebtn").addEventListener("click", () => {
      document.getElementById("my_modal_1").close();
    });
  };
  const onSubmit = async (data) => {
    console.log(data);
    const name = data.name;
    const phone = data.mobile;
    const email = data.email;
    const inserted = userList.length;

    const user = { name, phone, email, inserted };
    axios.post("http://localhost:5000/user", user).then((res) => {
      console.log(res.data);
      refetch();
    });
  };
  return (
    <div>
      <h1 className="text-2xl font-bold text-center md:text-4xl my-5 border-y-2 py-3">
        All Users
      </h1>
      <button
        onClick={userAddHandler}
        className="btn btn-outline text-2xl ml-4"
      >
        <IoPersonAddSharp className="text-2xl" />
        Add User
      </button>
      <div>
        {userList.map((item) => (
          <div key={item._id}>
            <div className="card w-96 bg-base-100 shadow-xl">
              <div className="card-body">
                <h2 className="card-title">{item.name}</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box">
          <form onSubmit={handleSubmit(onSubmit)}>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text font-semibold">Name</span>
              </div>
              <input
                {...register("name")}
                type="text"
                placeholder="Your email"
                className="input input-bordered w-full max-w-md"
              />
            </label>
            <label className="form-control w-full max-w-md">
              <div className="label">
                <span className="label-text font-semibold">Mobile</span>
              </div>
              <input
                {...register("mobile")}
                type="number"
                placeholder="Your number here"
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
                placeholder="Your number here"
                className="input input-bordered w-full max-w-md"
              />
            </label>

            <div className="modal-action">
              <form method="dialog">
                {/* if there is a button in form, it will close the modal */}
                <button className="btn">Cancel</button>
              </form>
              <button id="savebtn" type="submit" className="btn">
                Save
              </button>
            </div>
          </form>
        </div>
      </dialog>
    </div>
  );
};

export default Alluser;
