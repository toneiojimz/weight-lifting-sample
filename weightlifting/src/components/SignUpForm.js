import React, { useState, useEffect } from 'react';
import { withFormik, Form, Field } from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from "styled-components";

const Main = styled.div`
height: 89vh;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
`

const FormRegister = styled(Form)`
display: flex;
flex-direction: column;
border: 3px solid #17A2B8;
background-color: #ffffff;
padding: 20px 40px 40px 40px;
`

const TitleRegister = styled.h3`
text-align: center;
margin: 10%;
`

const ContentRegister = styled.div`
display: flex;
flex-direction: column;
align-items: flex-start;
padding: 10px 0 40px 0;
`

const TextRegister = styled.p`
display: flex;
flex-direction: column;
`

const InputRegister = styled(Field)`
padding: 5px 0;
width: 100%;
`

const ButtonRegister = styled.button`
background-color: #17A2B8;
border-radius: 8px;
font-size: 1rem;
margin-top: 10%;
width: 200px;
height: 35px;
color: white;
`

const SignupForm = ({ values, errors, touched, status }) => {
    const [user, setUser] = useState([]);

    useEffect(() => {
        status && setUser(users => [...users, status]);
    }, [status]);


    return (

        <Main className="user-form">
            <FormRegister >
                <TitleRegister>Let's Get Some Info Before We Start Lifting:</TitleRegister>
                <ContentRegister>
                <TextRegister><label className="label">Username</label></TextRegister>
                <InputRegister type="text" name="username" placeholder=" Create a Username" />
                {touched.username && errors.username && (
                    <p className="errors"> {errors.username}</p>
                )}
                <TextRegister><label className="Password">Password</label></TextRegister>
                <InputRegister type="password" name="password" placeholder=" Create a Password " />
                {touched.password && errors.password && (
                    <p className="errors"> {errors.password}</p>
                )}
                
                <ButtonRegister>
                    Register New User
                </ButtonRegister>
                </ContentRegister>
            </FormRegister>
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
                props.history.push("/login")

            })
            .catch(err => console.log(err.response));
    }

})(SignupForm);

export default FormikUserForm;