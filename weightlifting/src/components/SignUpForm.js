import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";
<<<<<<< HEAD
import bulma from 'bulma';


=======
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8

const Main = styled.div`
height: 89vh;
background-color: #fff;
display: flex;
align-items: center;
justify-content: center;
flex-direction: column;
text-align: center;
`

const Form2 = styled(Form)`
border: 3px solid black;
background-color: #ffffff;
padding: 20px;
`;

<<<<<<< HEAD
const Input = styled(Field)`
margin: 3%;
`
=======
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8
const Title = styled.h3`
text-align: center;
margin: 10%;
`
const Text = styled.div`
display: flex;
flex-direction: column;
padding: 60px;
`

const Input2 = styled(Field)`
width: 100%;
margin-top: 5%;
margin-bottom: 5%;
`

<<<<<<< HEAD
const Buttonc = styled.div`
display: flex;
align-items: center;
justify-content: center;
`



=======
const ButtonReg = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #17A2B8;
`

>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8
const SignupForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(users => [...users, status]);
    }, [status]);


    return (

        <Main className="user-form">
            <Form2 >
<<<<<<< HEAD
                <Title>Wanna Register?</Title>
=======
                <Title>Let's Get Some Info Before We Start Lifting:</Title>
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8
                <Text>
                <label className="label">Username</label>
                <Input2 type="text" name="username" placeholder="Create a Username" />
                {touched.username && errors.username && (
                    <p className="errors"> {errors.username}</p>
                )}
                <label className="Password">Password</label>
                <Input2 type="password" name="password" placeholder="Create a Password " />
                {touched.password && errors.password && (
                    <p className="errors"> {errors.password}</p>
                )}
                
<<<<<<< HEAD
                <Buttonc>
                    <button className="button is-primary">Sign Up</button>
                </Buttonc>
                </Text>
            </Form2>

=======
                <ButtonReg>
                    <button>Reigster New User</button>
                </ButtonReg>
                </Text>
            </Form2>
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8
        </Main>
    );
};


const FormikUserForm = withFormik({
    mapPropsToValues({ username, password}) {
        return {
            username: username || "",
            password: password || ""  

        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()

    }),
    handleSubmit(values, { setStatus, props }) {
        axios
            .post("https://authbackend121.herokuapp.com/api/auth/register", values)
            .then(response => {
                console.log(response);
                setStatus(response.data);
                props.history.push('/login')

            })
            .catch(err => console.log(err.response));
    }

<<<<<<< HEAD

=======
>>>>>>> 6430b0088ae98fa3792fd729fab361ec4d6399c8
})(SignupForm);

export default FormikUserForm;