import { useQuery } from "@tanstack/react-query";
import useAxiosPublic from "../../Hooks/useAxiosPublic";
import BloodDonationCard from "../../Components/Public/BloodDonationCard";
import SectionTitle from "../../Components/Header/SectionTitle";

const BloodDonationRequest = () => {
    const axiosPublic=useAxiosPublic()
    const { data: AllPandingDonationRequest  } = useQuery({
        queryKey: ["AllPandingDonationRequest",],
        queryFn: async () => {
    
          const res = await axiosPublic.get(`/blood_donation_request`);
      
          return res.data;
        },
      });
      console.log(AllPandingDonationRequest);
    return (
       <div>
        {/* <div>
        <SectionTitle
        heading="request blood donation"
        subHeading="Blood Donation And Save Life?"
      ></SectionTitle>
        </div> */}
         <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4 justify-center pt-10">
            
            {
             AllPandingDonationRequest?.map((donation)=>
               
                 <BloodDonationCard donation={donation} key={donation._id}></BloodDonationCard>)
            }
             </div>
       </div>
    );
};

export default BloodDonationRequest;