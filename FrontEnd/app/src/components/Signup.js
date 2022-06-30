import React, { useRef} from "react"
import { Form, Button, Card, FormGroup, Input, Label } from "reactstrap";
import 'bootstrap/dist/css/bootstrap.min.css';
import './Form.css';

export default function Signup() {
    const emailRef = useRef()
    const passwordRef = useRef()
    const passwordConfirmRef = useRef()

  return (
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
          <FormGroup>
            <Label for="confirmpassword">Confirm Password</Label>
                <Input
                type="password"
                name="confirmpassword"
                id="confirmPassword"
                placeholder="********"
                />
          </FormGroup>
        <Button>Submit</Button>
      </Form>
    </Card>
      
    
  )
}
