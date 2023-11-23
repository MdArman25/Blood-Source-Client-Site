import { Parallax } from 'react-parallax';

const  Cover = ({img,tittle,subtittle}) => {
    return (
        <Parallax
        blur={{ min: -40, max: 10 }}
        bgImage={img}
        bgImageAlt="the dog"
        strength={-200}
    >

        <div >
           <div className="hero min-h-[600px]">
  <div className="hero-overlay bg-opacity-60"></div>
  <div className="hero-content text-center text-neutral-content">
    <div className="max-w-md">
      <h1 className="mb-5 text-5xl font-bold">{tittle}</h1>
      <p className="mb-5">{subtittle}</p>
      <button className="btn btn-primary">Get Started</button>
    </div>
  </div>
</div> 
        </div>
    </Parallax>
    );
};

export default Cover;