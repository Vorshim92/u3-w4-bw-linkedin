import { Button, Card } from "react-bootstrap";
import { Col } from "react-bootstrap";

const SidebarRight = () => {
  return (
    <Col lg={3}>
      {/* ---> Inizio prima card <--- */}
      <Card className="rounded-3 m-3">
        <Card.Body className="p-3">
          <Card.Title className="d-flex justify-content-between">
            <p>Lingua del profilo</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </Card.Title>
          <Card.Text>Italiano</Card.Text>
          {/* div di bordo */}
          <div className="border-top border-1 "></div>
          {/* fine div di bordo */}
          <Card.Title className="d-flex justify-content-between pt-3">
            {" "}
            <p>Profilo pubblico e URL</p>
            <svg xmlns="http://www.w3.org/2000/svg" width="19" height="19" fill="currentColor" className="bi bi-pencil" viewBox="0 0 16 16">
              <path d="M12.146.146a.5.5 0 0 1 .708 0l3 3a.5.5 0 0 1 0 .708l-10 10a.5.5 0 0 1-.168.11l-5 2a.5.5 0 0 1-.65-.65l2-5a.5.5 0 0 1 .11-.168zM11.207 2.5 13.5 4.793 14.793 3.5 12.5 1.207zm1.586 3L10.5 3.207 4 9.707V10h.5a.5.5 0 0 1 .5.5v.5h.5a.5.5 0 0 1 .5.5v.5h.293zm-9.761 5.175-.106.106-1.528 3.821 3.821-1.528.106-.106A.5.5 0 0 1 5 12.5V12h-.5a.5.5 0 0 1-.5-.5V11h-.5a.5.5 0 0 1-.468-.325" />
            </svg>
          </Card.Title>
          <Card.Text>link dell'utente</Card.Text>
        </Card.Body>
      </Card>
      {/* ---> fine prima card<--- */}

      {/* --->Inzio card Altri profili simili<--- */}
      <Card className="rounded-3 m-3">
        <Card.Body className="p-3">
          <Card.Title>
            {" "}
            <p>Altri profili simili</p>
          </Card.Title>

          <div className="d-flex">
            <img
              className="rounded-circle mx-2"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1712060568~exp=1712061168~hmac=9463e6dab35187c32959e9c3282930a512192ff0839fe4aa5391fd5e4731ded4"
              alt="avatar"
              style={{ width: "45px", height: "45px" }}
            />

            <div className="d-flex flex-column">
              <p className="sidebarTitle m-0">
                Mario Rossi <span className="sidebarSpan">• 3° +</span>
              </p>
              <p>Developer presso IT Baobab Enterprice</p>{" "}
              <div>
                <Button className="rounded-4 bg-light text-dark border-secondary d-flex">
                  Collegati
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill mx-2 mb-1" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>

        {/* div di bordo */}
        <div className="border-top border-1 "></div>
        {/* fine div di bordo */}
      </Card>

      {/* --->fine card Altri profili simili<---  */}

      {/* --->Inizio card persone che potresti conoscere<--- */}
      <Card className="rounded-3 m-3">
        <Card.Body className="p-3">
          <Card.Title>
            {" "}
            <p>
              Persone che potresti conoscere <span className="sidebarSpan fs-6 d-block">Dalla tua scuola o università</span>
            </p>
          </Card.Title>

          <div className="d-flex">
            <img
              className="rounded-circle mx-2"
              src="https://img.freepik.com/free-psd/3d-illustration-person-with-sunglasses_23-2149436188.jpg?w=740&t=st=1712060568~exp=1712061168~hmac=9463e6dab35187c32959e9c3282930a512192ff0839fe4aa5391fd5e4731ded4"
              alt="avatar"
              style={{ width: "45px", height: "45px" }}
            />

            <div className="d-flex flex-column">
              <p className="sidebarTitle m-0">
                Mario Rossi <span className="sidebarSpan">• 3° +</span>
              </p>
              <p>Developer presso IT Baobab Enterprice</p>{" "}
              <div>
                <Button className="rounded-4 bg-light text-dark border-secondary d-flex">
                  Collegati
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-person-plus-fill mx-2 mb-1" viewBox="0 0 16 16">
                    <path d="M1 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6" />
                    <path fillRule="evenodd" d="M13.5 5a.5.5 0 0 1 .5.5V7h1.5a.5.5 0 0 1 0 1H14v1.5a.5.5 0 0 1-1 0V8h-1.5a.5.5 0 0 1 0-1H13V5.5a.5.5 0 0 1 .5-.5" />
                  </svg>
                </Button>
              </div>
            </div>
          </div>
        </Card.Body>

        {/* div di bordo */}
        <div className="border-top border-1 "></div>
        {/* fine div di bordo */}
      </Card>
    </Col>
  );
};

export default SidebarRight;
