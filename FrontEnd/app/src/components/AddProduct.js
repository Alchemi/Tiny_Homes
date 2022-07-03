import React, { useState, useEffect } from "react";
import { Form, Alert, InputGroup, Button, ButtonGroup } from "react-bootstrap";
import ProductDataService from "../services/property.services"

const AddProduct = ({ id, setProductId }) => {
    
  const [houseName, setHouseName] = useState("");
  const [location, setLocation] = useState("");
  const [rooms, setRooms] = useState("");
  const [baths, setBaths] = useState("");
  const [price, setPrice] = useState("");
  const [size, setSize] = useState("");
  const [furnished,SetFurnished] = useState(true);
  const [status, setStatus] = useState("Available")
  const [flag, setFlag] = useState(true);
  const {message, setMessage} = useState({error: false, msg: "" })
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");
    if (houseName === "" || location === "" || rooms === "" || baths === ""|| price === ""|| size === "" || furnished === "") {
      setMessage({ error: true, msg: "All fields are mandatory!" });
      return;
    }
    const newProduct = {
      houseName,
      location,
      rooms,
      baths,
      price,
      size,
      furnished,
      status
    };
    console.log(newProduct);

    try {
      if (id !== undefined && id !== "") {
        await ProductDataService.updateProduct(id, newProduct);
        setProductId("");
        setMessage({ error: false, msg: "Updated successfully!" });
      } else {
        await ProductDataService.addProducts(newProduct);
        setMessage({ error: false, msg: "New Property added successfully!" });
      }
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }

    setHouseName("");
    setLocation("");
    setBaths("");
    setRooms("");
    setPrice("");
    setSize("");
    SetFurnished(true/false);
  };

  const editHandler = async () => {
    setMessage("");
    try {
      const docSnap = await ProductDataService.getProduct(id);
      console.log("the record is :", docSnap.data());
      setHouseName(docSnap.data().houseName);
      setLocation(docSnap.data().location);
      setBaths(docSnap.data().baths);
      setRooms(docSnap.data().rooms);
      setPrice(docSnap.data().price);
      setSize(docSnap.data().size);
      SetFurnished(docSnap.data().furnished);
      setStatus(docSnap.data().status);
    } catch (err) {
      setMessage({ error: true, msg: err.message });
    }
  };

  useEffect(() => {
    console.log("The id here is : ", id);
    if (id !== undefined && id !== "") {
      editHandler();
    }
  }, [id]);
  return (
    <>
      <div className="p-4 box">
        {message?.msg && (
          <Alert
            variant={message?.error ? "danger" : "success"}
            dismissible
            onClose={() => setMessage("")}
          >
            {message?.msg}
          </Alert>
        )}

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formPropertyName">
            <InputGroup>
              <InputGroup.Text id="formPropertyName">N</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Property Name"
                value={houseName}
                onChange={(e) => setHouseName(e.target.value)}
              />
            </InputGroup>
          </Form.Group>

          <Form.Group className="mb-3" controlId="formPropertyLocation">
            <InputGroup>
              <InputGroup.Text id="formPropertyLocation">L</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Property Location"
                value={location}
                onChange={(e) => setLocation(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPropertyRooms">
            <InputGroup>
              <InputGroup.Text id="formPropertyRooms">R</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Property Rooms"
                value={rooms}
                onChange={(e) => setRooms(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPropertyBaths">
            <InputGroup>
              <InputGroup.Text id="formPropertyBaths">B</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Property Baths"
                value={baths}
                onChange={(e) => setBaths(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPropertyPrice">
            <InputGroup>
              <InputGroup.Text id="formPropertyPrice">Pr</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Property Price"
                value={price}
                onChange={(e) => setPrice(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPropertySize">
            <InputGroup>
              <InputGroup.Text id="formPropertySize">S</InputGroup.Text>
              <Form.Control
                type="text"
                placeholder="Property Size"
                value={size}
                onChange={(e) => setSize(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPropertyFurnished">
            <InputGroup>
              <InputGroup.Text id="formPropertyFurnished">F</InputGroup.Text>
              <Form.Control
                type="boolean"
                placeholder="Property Furnished"
                value={furnished}
                onChange={(e) => SetFurnished(e.target.value)}
              />
            </InputGroup>
          </Form.Group>
          <ButtonGroup aria-label="Basic example" className="mb-3">
            <Button
              disabled={flag}
              variant="success"
              onClick={(e) => {
                setStatus("Available");
                setFlag(true);
              }}
            >
              Available
            </Button>
            <Button
              variant="danger"
              disabled={!flag}
              onClick={(e) => {
                setStatus("Not Available");
                setFlag(false);
              }}
            >
              Not Available
            </Button>
          </ButtonGroup>
          <div className="d-grid gap-2">
            <Button variant="primary" type="Submit">
              Add/ Update
            </Button>
          </div>
        </Form>
      </div>
    </>
  );
};

export default AddProduct;