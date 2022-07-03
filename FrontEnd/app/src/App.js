import React, { useState } from "react"
import Signup from "./components/auth/Signup";
import ForgotPassword from "./components/auth/ForgotPassword";

import { Route, Routes } from "react-router-dom";
import Login from "./components/auth/Login";
import { Col, Row, Container} from "reactstrap";
import { UserAuthContextProvider } from "./contexts/UserAuthContext";
import { Home } from "./components/Home";

function App() {

  return (
    <>
    <Container>
      <Row>
        <Col>
          
          <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/login" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
            <Route path="/forgotpassword" element={<ForgotPassword/>}/>
          </Routes>
          </UserAuthContextProvider>
          
        </Col>
      </Row>
    </Container>
    </>
  )
}

export default App;
