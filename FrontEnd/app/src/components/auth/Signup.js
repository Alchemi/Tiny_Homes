import React, { useState} from "react"
import { Form, Button, Card, FormGroup, Input,Alert } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';
import {Link, useNavigate} from "react-router-dom"
import {useUserAuth} from "../../contexts/UserAuthContext"
import UserDataService from "../../services/user.services";

const Signup=()=> {
 
   
    const [error, setError] = useState("");
   
    const [email, setEmail] = useState("");
    const [firstName, setFirstName]=useState("");
    const [lastName, setLastName]=useState("");
    const [password, setPassword]=useState("");
    const [confirmpassword, setConfirmPassword]=useState("");
    const [phone, setPhone] = useState("");
    const [username, setUsername] = useState("");
    const [zipcode, setZipcode] = useState("");
    const {signUp}=useUserAuth();
    const navigate = useNavigate();
    
    const handleSubmit= async (e)=> {
        e.preventDefault();
        if (await(password!== confirmpassword)){
          return setError("Passwords do not match");
        }
        if (email==="" || firstName===""||lastName===""||password===""||
        confirmpassword===""||phone===""||username===""||zipcode===""){
          setError("All fields are mandatory!");
          return;
        }
        const newUser ={
          email,
          firstName,
          lastName,
          password,
          phone,
          username,
          zipcode
        }
        try {
          setError("")
          await signUp(email, password)
          await UserDataService.addUser(newUser);
          
          
          navigate("/")
        } catch (err){
          setError("err.message")
          
        }
      };
  
    return (
    <div className="p-4 box">
    <h2 className="text-center mb-4">Tiny Homes Sign Up</h2>
    {error && <Alert varient="Danger">{error}</Alert>}
    <Card className="card">
        <Form className="form" onSubmit={handleSubmit}>
          <span>
          <FormGroup className="fname">
           
                <Input
                    value={firstName}
                    type="text"                 
                    placeholder="First Name"
                    onChange={(e)=>setFirstName(e.target.value)}
                    required
                />
                </FormGroup>
                
            <FormGroup className="lname">
                <Input 
                value={lastName}
                type="text"
                placeholder="Last Name"
                onChange={(e)=>setLastName(e.target.value)}
                required
                />
          </FormGroup>
          </span>
          <FormGroup>
            
                <Input
                    value={email}
                    type="email"                 
                    placeholder="Email"
                    onChange={(e)=>setEmail(e.target.value)}
                    required
                />
          </FormGroup>
          <FormGroup>
            
                <Input
                value={username}   
                type="text"
                placeholder="Username"
                onChange={(e)=>setUsername(e.target.value)}
                required
                />
          </FormGroup>
          <FormGroup>
            
                <Input 
                value={password}  
                type="password"
                placeholder="Password"
                onChange={(e)=>setPassword(e.target.value)}
                required
                />
          </FormGroup>
          <FormGroup>
            
                <Input    
                type="password"
                placeholder="Re-enter Password"
                onChange={(e)=>setConfirmPassword(e.target.value)}
                required
                />
          </FormGroup>
          <FormGroup>
            
                <Input 
                value={phone}   
                type="text"
                placeholder="Phone Number"
                onChange={(e)=>setPhone(e.target.value)}
                required
                />
          </FormGroup>
          <FormGroup>
            
                <Input 
                value={zipcode}   
                type="text"
                placeholder="ZIP code"
                onChange={(e)=>setZipcode(e.target.value)}
                required
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
