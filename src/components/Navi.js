import React, { useEffect, useState } from "react";
import { Container, Navbar } from "react-bootstrap";
import { useSelector } from "react-redux";
import { Link, Route } from "react-router-dom";
import { withRouter } from "react-router-dom/cjs/react-router-dom.min";
import CheckOut from "./CheckOut";
import Menu from "./Menu";

function Navi(props) {
  const [show1, setshow1] = useState(false);
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const handleClose1 = () => {
    setShow(false);
    props.history.push("/check");
  };
  const data = useSelector((state) => {
    return state.cartAdd;
  });
  useEffect(() => {
    for (let i = 0; i < data.length; i++) {
      if (data[i].count) {
        console.log("ok");
        setshow1(true);
        break;
      } else {
        setshow1(false);

        console.log("false");
      }
    }
  });

  return (
    <div>
      <Navbar collapseOnSelect expand="lg" bg="primary" variant="primary">
        <Container>
          <Navbar.Brand as={Link} to="/" style={{ color: "white" }}><i class="fa fa-cutlery" aria-hidden="true"></i>
Food's Resturant</Navbar.Brand>
          
      {show1 ? <button onClick={handleShow} className="btn bg-success" style={{borderRadius: "20px"}}>Cart</button> : <></>}
        </Container>
      </Navbar>
      <br/>
      <Route path="/menu">
        <Menu
          handleShow={handleShow}
          handleClose={handleClose}
          show={show}
          handleClose1={handleClose1}
        />
      </Route>
      <Route path="/check" component={CheckOut} />
    </div>
  );
}

export default withRouter(Navi);
