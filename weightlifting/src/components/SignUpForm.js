import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";
<<<<<<< HEAD
=======

import desktopRegisterImage from '../images/register.jpg';
import mobileRegisterImage from '../images/register-mobile.jpg'
>>>>>>> 7bcb5f480ffa66586445d44c0f4099af01a8fe15

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
=======
const Input = styled(Field)`
margin: 3%;
`
>>>>>>> 7bcb5f480ffa66586445d44c0f4099af01a8fe15
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
const ButtonReg = styled.div`
display: flex;
align-items: center;
justify-content: center;
background-color: #17A2B8;
`

=======
const Buttonc = styled.div`
display: flex;
align-items: center;
justify-content: center;
`



>>>>>>> 7bcb5f480ffa66586445d44c0f4099af01a8fe15
const SignupForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(users => [...users, status]);
    }, [status]);

    const imageUrl = useWindowWidth() >= 650 ? desktopRegisterImage : mobileRegisterImage;

    return (

        <Main className="user-form" style={{backgroundImage: `url(${imageUrl})` }}>
            <Form2 >
<<<<<<< HEAD
                <Title>Let's Get Some Info Before We Start Lifting:</Title>
=======
                <Title>Wanna Register?</Title>
>>>>>>> 7bcb5f480ffa66586445d44c0f4099af01a8fe15
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
                <ButtonReg>
                    <button>Reigster New User</button>
                </ButtonReg>
                </Text>
            </Form2>
=======
                <Buttonc>
                    <button className="button is-primary">Sign Up</button>
                </Buttonc>
                </Text>
            </Form2>

>>>>>>> 7bcb5f480ffa66586445d44c0f4099af01a8fe15
        </Main>
    );
};

const useWindowWidth = () => {
    const [windowWidth, setWindowWidth ] = useState(window.innerWidth);

    const handleWindowResize = () => {
        setWindowWidth(window.innerWidth);
    };

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize);
        return () => window.removeEventListener('resize', handleWindowResize);
    },[]);

    return windowWidth;
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

})(SignupForm);

export default FormikUserForm;