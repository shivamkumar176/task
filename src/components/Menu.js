import { Button, Col, Container, Modal, Row } from "react-bootstrap";
import React from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { add, remove } from "../reduxData/actions";


function Menu(props) {
  let data = useSelector((state) => {
    return state.cartAdd;
  });

  const dispatch = useDispatch();

  console.log(data);

  let totalCost = 0;
  console.log(props);
  return (
    <div>
      <div>
        <Container>
          <Row className="justify-content-md-center">
            <Col xs lg="3">
            </Col>
            <Col md="auto">
              <ol style={{ display: "flex", flexWrap: "wrap" }}>
              {data.map((ele, index) => {
                return (
                  <li key={index} style={{ width: "30%" }}>
                    <img
                      style={{ "max-width": "80%", height: "50%" }}
                      className="d-block w-100"
                      src={require(`./${ele.image}`)}
                      alt="First slide"
                    />
                    <h4>{ele.name}</h4>
                    <p>Price: {ele.price}</p>
                    {ele.count > 0 ? <p>Total: {ele.count}</p> : <></>}
                    {ele.count > 0 ? (
                      <p>Cost (INR): {ele.cost * ele.count}</p>
                    ) : (
                      <></>
                    )}
                    <button
                      className="btn bg-primary ms-2 me-2"
                      onClick={() => {
                        dispatch(add(data, ele));

                      }}
                    >
                      +
                    </button>
                    <button
                      className="btn bg-danger"
                      onClick={() => {
                        dispatch(remove(data, ele));
                      }}
                    >
                      -
                    </button>
                  </li>
                );
              })}
            </ol></Col>
            <Col xs lg="2">
            </Col>
          </Row>
          </Container>
      </div>
      <>
        <Modal show={props.show} onHide={props.show} animation={true}>
          <Modal.Header closeButton>
            <Modal.Title>Product Added</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {data.map((ele, index) => {
              totalCost = totalCost + ele.price * ele.count;
              return ele.count ? (
                <li key={index}>
                  {ele.name}---{ele.count}---
                  <button
                    className="btn bg-primary"

                    onClick={() => {
                      dispatch(add(data, ele));
                    }}
                  >
                    +
                  </button>
                  <button
                    className="btn bg-danger"

                    onClick={() => {
                      dispatch(remove(data, ele));
                    }}
                  >
                    -
                  </button>
                </li>
              ) : (
                <></>
              );
            })}
            totalCost: {totalCost}
          </Modal.Body>
          <Modal.Footer>
            <Button variant="primary" onClick={props.handleClose1}>
              Save and Checkout
            </Button>
            <Button variant="light" onClick={props.handleClose}>
              Cancel
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    </div>
  );
}

export default Menu;
