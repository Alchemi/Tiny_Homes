import React, {useState} from "react";
import { Form, Button, Card, FormGroup, Input, Alert, Navbar} from "reactstrap";
import { useNavigate } from "react-router-dom";
import GoogleButton from "react-google-button";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import {Link} from "react-router-dom";
import { useUserAuth } from "../../contexts/UserAuthContext";

export default function Login(){
    const [error, setError] = useState("");    
    const [email, setEmail] = useState("");
    const [password, setPassword]=useState("");
    const {logIn, googleSignIn}=useUserAuth();
    const navigate = useNavigate();
    
    const handleSubmit= async (e)=> {
        e.preventDefault();
        setError("");
        try {
          await logIn(email, password)
          navigate("/")
        } catch (err){
          setError(err.message)
          
        }
      };
    const handleGoogleSignin = async (e) => {
        e.preventDefault();
        try{
            await googleSignIn();
            navigate("/")

        } catch(err){
            setError(err.message)

        }

    };
    return(
      <div>
        
        
        
        <Navbar className="nav">
        <text >Languages</text>
        
        <span className="title mx-auto">THP</span>
        </Navbar>
    <div className="p-4 box">
    <h2 className="text-center mb-4">Welcome back user</h2>
    {error && <Alert varient="Danger">{error}</Alert>}
    <Card className="card">
    <Form className="form" onSubmit={handleSubmit}>
      <FormGroup >
       
            <Input
                type="email"
                name="email"
                id="email"
                placeholder="Email"
                onChange={(e)=> setEmail(e.target.value)}
                required
                
            />
      </FormGroup>
      <FormGroup>
        
            <Input
            type="password"
            name="password"
            id="password"
            placeholder="Password"
            onChange={(e)=> setPassword(e.target.value)}
            required
         
            />
      </FormGroup>
    <Button className="button">Login</Button>
    
    
    <div>
        <br></br>
        <GoogleButton className="g-btn" type="dark" onClick={handleGoogleSignin}/>
    </div>
  </Form>
        <div className="w-100 text-center mt-3">
           <Link to="/forgotpassword">Forgot Password?</Link> 
        </div>
</Card>
        <div className="w-100 text-center mt-2">
            New user? Sign up below 
            <br></br>
            <button className="button">
            <Link className="link" to="/signup">Sign up</Link>
            </button>
        </div>
</div>
</div>
    )
}
