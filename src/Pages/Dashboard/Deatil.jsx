import { useLoaderData } from "react-router-dom";

const Deatil = () => {
  const loadedData = useLoaderData();
  console.log(loadedData.data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center md:text-4xl my-5 border-y-2 py-3">
        User Details
      </h1>
    </div>
  );
};

export default Deatil;
