import React, { useState} from "react"
import { Form, Button, Card, FormGroup, Input, Label, Alert } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import {Link, useNavigate} from "react-router-dom"
import {useUserAuth} from "../contexts/UserAuthContext"

const Signup=()=> {
   
    const [error, setError] = useState("");
    
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const [confirmpassword, setConfirmPassword]=useState("");
    const {signUp}=useUserAuth();
    let navigate = useNavigate();
    
    const handleSubmit= async (e)=> {
        e.preventDefault();
        setError("");
        if (password !== confirmpassword) {
           setError("Passwords do not match")
           
        }
    
        try {
          setError("")
          await signUp(email, password)
          navigate("/")
        } catch (err){
          setError(err.message)
          
        }
      };
  
    return (
    <div className="p-4 box">
    <h2 className="text-center mb-4">Sign Up</h2>
    {error && <Alert variant="danger">{error}</Alert>}
    <Card className="card">
        <Form className="form" onSubmit={handleSubmit}>
          <FormGroup>
            <Label for="email">Username</Label>
                <Input
                    type="email"                 
                    placeholder="example@example.com"
                    onChange={(e)=>setEmail(e.target.value)}
                />
          </FormGroup>
          <FormGroup>
            <Label for="password">Password</Label>
                <Input 
                type="password"
                placeholder="********"
                onChange={(e)=>setPassword(e.target.value)}
                />
          </FormGroup>
          <FormGroup>
            <Label for="confirmpassword">Confirm Password</Label>
                <Input    
                type="password"
                placeholder="********"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                />
          </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Card>
        <div className="w-100 text-center mt-2">
            Already have an account? <Link to="/">Log In</Link>
        </div>
    </div>
    
  )
}
export default Signup;
