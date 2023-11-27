const SectionTitle = ({ heading, subHeading }) => {
  return (
    <div className="mx-auto text-center my-8 grid items-center ">
      <p className="  font-mono">---"""" {subHeading} """"---</p>
      <h3 className="text-2xl uppercase border-y-4 py-4">{heading}</h3>
    </div>
  );
};

export default SectionTitle;
