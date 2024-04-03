import { Card } from "react-bootstrap";

const Experience = ({ data }) => {
  return (
    <>
      <div className="d-flex">
        <img className=" mx-2" src={data.image} alt="#" style={{ width: "45px", height: "45px" }} />

        <div className="d-flex flex-column">
          <p className="sidebarTitle m-0">{data.role}</p>
          <p className="m-0">{data.company}</p>
          <p className="dataLavoro">
            {data.startDate} - {data.endDate}
          </p>
        </div>
      </div>

      {/* div di divisione con border */}
      <div className="border-top border-1 "></div>
    </>
  );
};

// fetchUserExp

export default Experience;
