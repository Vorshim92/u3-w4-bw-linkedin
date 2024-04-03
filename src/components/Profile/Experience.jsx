import { Card } from "react-bootstrap";

const Experience = ({ data }) => {
  return (
    <>
      <div className="d-flex">
        <div className="position-relative">
          <img className=" mx-2" src={data.image} alt="" style={{ width: "60px", height: "60px" }} />
        </div>
        <button className="position-absolute">
          <svg viewBox="0 0 24 24" id="edit-medium" role="none" data-supported-dps="24x24" fill="#000000" fillOpacity="0.9" width="16" height="16">
            <path d="M21.13 2.86a3 3 0 00-4.17 0l-13 13L2 22l6.19-2L21.13 7a3 3 0 000-4.16zM6.77 18.57l-1.35-1.34L16.64 6 18 7.35z" fillOpacity="0.9"></path>
          </svg>
        </button>
        <div className="d-flex flex-column">
          <p className="sidebarTitle m-0">{data.role}</p>
          <p className="m-0">{data.company}</p>
          <p className="dataLavoro">
            {data.startDate} - {data.endDate}
            <button>
              <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
                <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
              </svg>
            </button>
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
