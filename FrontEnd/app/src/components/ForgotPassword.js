import React, {useState} from "react";
import { Form, Button, Card, FormGroup, Input, Label, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";

import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import {Link} from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

export default function ForgotPassword(){ 
    const [message, setMessage]  = useState("");
    const [error, setError] = useState("");
    const [email, setEmail] = useState("");
    const { resetPassword}=useUserAuth();
    const navigate = useNavigate();

    async function handleSubmit(e) {
        e.preventDefault()
        
        try {
            setMessage("")
            setError("")
          await resetPassword(email)
          setMessage("Check your inbox for further instructions")
        } catch {
          setError("Failed to reset password")
        }
      }
    
      return (
        <>
          <Card>
              <h2 className="text-center mb-4">Password Reset</h2>
              {error && <Alert variant="danger">{error}</Alert>}
              {message && <Alert variant="success">{message}</Alert>}
              <Form onSubmit={handleSubmit}>
                <FormGroup id="email">
                  <Label>Email</Label>
                  <Input type="email"
                   onChange={(e)=> setEmail(e.target.value)}
                  required 
                  />
                </FormGroup>
                <Button >
                  Reset Password
                </Button>
              </Form>
              <div className="w-100 text-center mt-3">
                <Link to="/">Login</Link>
              </div>
          </Card>
          <div className="w-100 text-center mt-2">
            Need an account? <Link to="/signup">Sign Up</Link>
          </div>
        </>
      )
    }