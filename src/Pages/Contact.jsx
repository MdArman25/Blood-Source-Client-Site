import { Helmet } from "react-helmet-async";
import ContactFrom from "../Components/ContactForm";
import GoogleMap from "../Components/GoogleMap";



const Contact = () => {
    return (
        <div className="pt-24">
            <Helmet>
        <title> Blood Source || ABOUT</title>
      </Helmet>
        
            <ContactFrom></ContactFrom>
            <div className='w-full'>
    <GoogleMap></GoogleMap>
</div>
 </div>
    );
};

export default Contact;