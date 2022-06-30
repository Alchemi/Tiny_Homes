import React, {useState} from "react";
import { Form, Button, Card, FormGroup, Input, Label, Alert } from "reactstrap";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import {Link} from "react-router-dom";
import { useUserAuth } from "../contexts/UserAuthContext";

export default function Login(){
    const [error, setError] = useState("");    
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const {logIn}=useUserAuth();
    const navigate = useNavigate();
    
    const handleSubmit= async (e)=> {
        e.preventDefault();
        setError("");
        try {
          await logIn(email, password)
          navigate("/signup")
        } catch (err){
          setError(err.message)
          
        }
      };

    return(
    <div className="p-4 box">
    <h2 className="text-center mb-4">Tiny Homes Log In</h2>
    {error && <Alert varient="Danger">{error}</Alert>}
    <Card className="card">
    <Form className="form" onSubmit={handleSubmit}>
      <FormGroup >
        <Label for="email">Email</Label>
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="example@example.com"
                onChange={(e)=> setEmail(e.target.value)}
                required
                
            />
      </FormGroup>
      <FormGroup>
        <Label for="password">Password</Label>
            <Input
            type="password"
            name="password"
            id="password"
            placeholder="********"
            onChange={(e)=> setPassword(e.target.value)}
            required
         
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
