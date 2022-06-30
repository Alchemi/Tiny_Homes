import React from "react"
import Signup from "./Signup";
import { Route, Routes } from "react-router-dom";

import Login from "./Login"
import { Col, Row, Container} from "reactstrap";
import { UserAuthContextProvider } from "../contexts/UserAuthContext";

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <UserAuthContextProvider>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/signup" element={<Signup/>}/>
          </Routes>
          </UserAuthContextProvider>
        </Col>
      </Row>
    </Container>
  )
}

export default App;
