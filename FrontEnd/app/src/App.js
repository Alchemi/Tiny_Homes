import React, { useState } from "react"
import Signup from "./components/Signup";
import ForgotPassword from "./components/ForgotPassword";
import { Route, Routes } from "react-router-dom";

import Login from "./components/Login"
import { Col, Row, Container} from "reactstrap";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import AddProduct from "./components/AddProduct";

function App() {

  const [productId, setProductId] = useState("");

  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
