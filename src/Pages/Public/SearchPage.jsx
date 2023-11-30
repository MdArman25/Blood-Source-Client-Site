import { Helmet } from "react-helmet-async";
import SectionTitle from "../../Components/Header/SectionTitle";
import SearchForm from "../../Components/Public/SearchForm";

const SearchPage = () => {
    return (
        <div className="pt-10">
            <Helmet>
        <title> Blood Source || Search Donation</title>
      </Helmet>
               <SectionTitle
          heading="Search For Blood Source Donation"
          subHeading="Blood Donation And Save Life?"
        ></SectionTitle>
            <SearchForm></SearchForm>
        </div>
    );
};

export default SearchPage;