import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import useAxiosPublic from "../../Hooks/useAxiosPublic";

const SearchForm = () => {
  const [districts, setDistrics] = useState([]);
  const [upazilas, setUpazila] = useState([]);
  const AxiosPublic =useAxiosPublic()

  useEffect(() => {
    fetch("/district.json")
      .then((res) => res.json())
      .then((data) => {
        setDistrics(data);
        // setloding(false)
      });
  }, []);
  useEffect(() => {
    fetch("/Upazila.json")
      .then((res) => res.json())
      .then((data) => {
        setUpazila(data);
      });
  }, []);
  const handleSearch = async (e) => {
    e.preventDefault();
    const form = e.target;

    const Blood = form.bloodGroup.value;
    const  upazila =form.upazilas.value
    const  district =form.district.value
    const searchbody = {
      Blood,
      upazila,
      district
    }
    
    console.log(Blood,upazila,district,"d",searchbody);
AxiosPublic.post('/SearchValue',searchbody).then(res=>{
  console.log(res.data);
})
    
  }

  return (
    <div>
      <form onSubmit={handleSearch} className="max-w-md mx-auto">
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="email" className="block mb-2 text-sm">
            BLOOD GROUP
          </label>
          <select
            name="bloodGroup"
            defaultValue="default"
            className="select select-bordered w-full"
          >
            <option disabled value="default">
              Select Your Blood Group
            </option>
            <option value="A+">A+</option>
            <option value="A-">A-</option>
            <option value="B+">B+</option>
            <option value="B-">B-</option>
            <option value="AB+">AB+</option>
            <option value="AB-">AB-</option>
            <option value="O+">O+</option>
            <option value="O-">O-</option>
          </select>
        </div>
        <div className="relative z-0 w-full mb-5 group">
          <label htmlFor="email" className="block mb-2 text-sm">
            District Name
          </label>

          <select
            name="district"
            defaultValue="default"
            className="select select-bordered w-full"
            required
          >
            <option value="default" disabled>
              Select your District
            </option>
            {districts?.map((district, index) => (
              <option key={index} value={district.name}>
                {district.name}
              </option>
            ))}
          </select>
        </div>
        <div className="grid ">
          <div className="relative z-0 w-full mb-5 group">
            <label htmlFor="email" className="block mb-2 text-sm">
              Upazila Name
            </label>

            <select
              name="upazilas"
              defaultValue="default"
              className="select select-bordered w-full"
              required
            >
              <option value="default" disabled>
                Select your Upazila
              </option>

              {upazilas?.map((upazila, index) => (
                <option key={index} value={upazila.name}>
                  {upazila.name}
                </option>
              ))}
            </select>
          </div>
        </div>

    <div className="flex justify-end">
   
    <input
          type="submit"
          value={"Search"}
          className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        ></input>
    </div>
      </form>

      <div>

      </div>
    </div>
  );
};

export default SearchForm;
