import { useLoaderData } from "react-router-dom";
import { SiNamecheap } from "react-icons/si";
import { MdAttachEmail } from "react-icons/md";
import { FaMagnifyingGlassLocation } from "react-icons/fa6";
const Deatil = () => {
  const loadedData = useLoaderData();
  console.log(loadedData.data);
  return (
    <div>
      <h1 className="text-2xl font-bold text-center md:text-4xl my-5 border-y-2 py-3">
        User Details
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 w-full px-5 md:w-1/2 mx-auto gap-5 mt-8">
        <div className="flex items-center gap-2">
          <SiNamecheap className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Name <br />
            <span className="text-lg font-semibold text-black">
              {loadedData?.data?.name}
            </span>
          </p>
        </div>
        <div className="flex items-center gap-2">
          <MdAttachEmail className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Email <br />
            <span className="text-lg font-semibold text-black">
              {loadedData?.data?.email}
            </span>
          </p>
        </div>

        <div className="flex items-center gap-2">
          <FaMagnifyingGlassLocation className="text-3xl text-[#34cceb]" />
          <p className="text-lg text-gray-600">
            Phone <br />
            <span className="text-lg font-semibold text-black">
              {loadedData?.data?.phone}
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Deatil;
