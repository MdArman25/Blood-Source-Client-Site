// // import Member1 from '../assets/Team Member/young-handsome-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-132662.jpg';
// // import Member2 from '../assets/Team Member/side-view-portrait-young-african-american-man-singing-microphone-emotionally-while-standing-stage-lights_236854-25447.jpg';
// // import Member3 from '../assets/Team Member/1000_F_70707324_jnKeIrlYPXMsSyRbtJ3JqWrx6LoRHBzq.jpg';
// // import Member4 from '../assets/Team Member/attractive-guy-black-playing-electric-bass_58409-5778.jpg';
// // import Member5 from '../assets/Team Member/emotional-portrait-rock-guitar-player-with-long-hair-beard-plays-smoke-background_136403-15631.jpg';
// // import Member6 from '../assets/Team Member/asian-couple-singers-recording-studio-using-studio-microphone-with-passion-music-recording-studio_33413-1601.jpg';
// import { FaFacebook, FaInstagram, FaTwitter, FaGithub } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import AOS from "aos";
// import "aos/dist/aos.css";
// import { useEffect } from "react";

// const OurTeam = () => {
//   useEffect(() => {
//     AOS.init({
//       duration: 1000, // Animation duration in milliseconds
//       once: false, // Whether to trigger the animation only once
//     });
//   }, []);
//   return (
//     <div className="mt-20 ">
//       <h1 className="text-2xl font-bold flex justify-center  my-10 ">
//         OUR Team Members
//       </h1>
//       <div className="grid md:grid-cols-2 justify-center md:justify-between md:ml-32 gap-14 md:gap-9 ">
//         <Link to="/about">
//           <div
//             data-aos="zoom-out-right"
//             className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg h-60 w-full"
//                 src={
//                   "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&q=80&w=1470&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
//                 }
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Elvis Presley
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <div>
//                 <Link className="flex justify-center gap-4 my-5">
//                   <FaFacebook></FaFacebook>
//                   <FaInstagram></FaInstagram>
//                   <FaTwitter></FaTwitter>
//                   <FaGithub></FaGithub>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Link>

//         <Link to="/about">
//           <div
//             data-aos="zoom-out-left"
//             className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg h-60 w-full"
//                 src={
//                   "https://plus.unsplash.com/premium_photo-1661762742902-11e0bbc0b863?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fHdvcmtlcnxlbnwwfHwwfHx8MA%3D%3D"
//                 }
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Elvis Presley
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <div>
//                 <Link className="flex justify-center gap-4 my-5">
//                   <FaFacebook></FaFacebook>
//                   <FaInstagram></FaInstagram>
//                   <FaTwitter></FaTwitter>
//                   <FaGithub></FaGithub>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Link>
//         <Link to="/about">
//           <div
//             data-aos="fade-down-right"
//             className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg h-60 w-full"
//                 src={
//                   "https://plus.unsplash.com/premium_photo-1683133939916-e59d8b80378d?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTN8fEhvbWUlMjBzZWN1cml0eXxlbnwwfHwwfHx8MA%3D%3D"
//                 }
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Elvis Presley
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <div>
//                 <Link className="flex justify-center gap-4 my-5">
//                   <FaFacebook></FaFacebook>
//                   <FaInstagram></FaInstagram>
//                   <FaTwitter></FaTwitter>
//                   <FaGithub></FaGithub>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Link>

//         <Link to="/about">
//           <div
//             data-aos="fade-up-left"
//             className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg h-60 w-full"
//                 src={
//                   "https://plus.unsplash.com/premium_photo-1661679796494-61408229a764?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D"
//                 }
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Elvis Presley
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <div>
//                 <Link className="flex justify-center gap-4 my-5">
//                   <FaFacebook></FaFacebook>
//                   <FaInstagram></FaInstagram>
//                   <FaTwitter></FaTwitter>
//                   <FaGithub></FaGithub>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Link>
//         <Link to="/about">
//           <div
//             data-aos="zoom-out-up"
//             className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg h-60 w-full"
//                 src={
//                   "https://plus.unsplash.com/premium_photo-1663040339019-d46f6fa9b1ae?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8ZHJ5d2FsbCUyMHJlcGFpcnxlbnwwfHwwfHx8MA%3D%3D"
//                 }
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Elvis Presley
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <div>
//                 <Link className="flex justify-center gap-4 my-5">
//                   <FaFacebook></FaFacebook>
//                   <FaInstagram></FaInstagram>
//                   <FaTwitter></FaTwitter>
//                   <FaGithub></FaGithub>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Link>
//         <Link to="/about">
//           <div
//             data-aos="zoom-out-down"
//             className="max-w-sm  bg-slate-100 border  border-gray-200 rounded-lg shadow dark:bg-gray-800 dark:border-gray-700"
//           >
//             <a href="#">
//               <img
//                 className="rounded-t-lg h-60 w-full"
//                 src={
//                   "https://plus.unsplash.com/premium_photo-1661679796494-61408229a764?auto=format&fit=crop&q=60&w=700&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTd8fGludGVyaW9yJTIwZGVzaWduZXJ8ZW58MHx8MHx8fDA%3D"
//                 }
//                 alt=""
//               />
//             </a>
//             <div className="p-5">
//               <a href="#">
//                 <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
//                   Elvis Presley
//                 </h5>
//               </a>
//               <p className="mb-3 font-normal text-gray-700 dark:text-gray-400">
//                 Here are the biggest enterprise technology acquisitions of 2021
//                 so far, in reverse chronological order.
//               </p>
//               <div>
//                 <Link className="flex justify-center gap-4 my-5">
//                   <FaFacebook></FaFacebook>
//                   <FaInstagram></FaInstagram>
//                   <FaTwitter></FaTwitter>
//                   <FaGithub></FaGithub>
//                 </Link>
//               </div>
//             </div>
//           </div>
//         </Link>
//       </div>
//     </div>
//   );
// };

// export default OurTeam;
