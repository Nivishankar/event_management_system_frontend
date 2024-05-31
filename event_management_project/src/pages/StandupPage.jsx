import Cards from "../components/Cards";
import NavBars from "../components/NavBars";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/esm/Col";
import Container from "react-bootstrap/esm/Container";
import Filters from "../components/Filters";

function StandUpPage() {
  return (
    <>
      <NavBars />
      <Container>
        <Row>
          <Col sm={3}>
            <Filters />
          </Col>
          <Col sm={9}>
            <div className="d-flex justify-content-center pt-5 mt-3">
              <Cards
                img={
                  "https://i0.wp.com/montreal.citycrunch.ca/wp-content/uploads/sites/9/2022/05/stand-up-comedy-neon-sign.jpeg"
                }
                title={"Stand Up Comedy"}
                text={
                  "Comedy Show Stand Up invitation is a neon sign. Logo, Emblem Bright flyer, light poster. ₹700"
                }
              />

              <Cards
                img={
                  "https://cdn.podimo.com/images/1dfb8efe-b6ad-41f2-ad81-91f07e83cfb6_400x400.png"
                }
                title={"Stand Up Event"}
                text={
                  "Comedy Show Stand Up invitation is a neon sign. Logo, Emblem Bright flyer, light poster. ₹700"
                }
              />

              <Cards
                img={
                  "https://play-lh.googleusercontent.com/ZFEdWR7oVxxKYuuAqWeb2Bs0RliNS66EQBd-jiPH32rKtyKQXZUSGEHQeq1N8ywsvJQ"
                }
                title={"Best Stand Up Comedy"}
                text={
                  "Stand-up show set. Speech by men and girls with a microphone. logo  banner invitaion  ₹1000"
                }
              />
            </div>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default StandUpPage;
