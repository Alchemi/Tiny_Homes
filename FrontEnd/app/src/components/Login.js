import React from "react";
import { Form, Button, Card, FormGroup, Input, Label } from "reactstrap";
import GoogleButton from "react-google-button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import {Link} from "react-router-dom"

export default function Login(){
    return(
        <div className="p-4 box">
    <h2 className="text-center mb-4">Log In</h2>
    <Card className="card">
    <Form className="form">
      <FormGroup>
        <Label for="email">Username</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
            />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
            <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            />
      </FormGroup>
    <Button>Login</Button>
    
    
    <div>
        <br></br>
        <GoogleButton className="g-btn" type="dark"/>
    </div>
  </Form>
        <div className="w-100 text-center mt-3">
            Forgot Password?
        </div>
</Card>
        <div className="w-100 text-center mt-2">
            Don't have an account? <Link to="/signup">Sign up</Link>
        </div>
</div>
    )
}
