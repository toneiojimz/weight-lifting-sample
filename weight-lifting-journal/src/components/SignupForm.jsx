import React, {useEffect, useState} from 'react';
import {withFormik, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import bulma from 'bulma';

const Page = styled.div`
    display:flex;
    justify-contents:center;
    align-items: center;
    margin-top: 200px;
    margin-left: 600px;
    max-width: 400px;
    background-color: papayawhip;
`;


const SignupForm =({ values, errors, touched, status}) => {
    const[user, setUser]= useState([]);

    useEffect(() => {
        status && setUser(users =>[...users, status]);
    }, [status]);

    
    return (
        <Page className="card is-center">
           
                <div className="card-content register">
                <p className="title">Wanna Register?</p>
                    <label className="label">Username</label>
                    <Field className="field"
                        type="text" name="username" placeholder="Create Username"/>
                        {touched.username && errors.username && (
                        <p className="errors">{errors.username}</p>
                    )}
                    <label className="label">Password</label>
                    <Field className="field" 
                        type="password" name="password" placeholder="Create Password"/>
                        {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                    <div>
                        <button className="button is-primary" type="submit">Sign Up</button>
                    </div>
                </div>
                {user.map(user => (
                    <ul key={user.id}>
                        <li>Username: {user.username}</li>
                        <li>Password: {user.password}</li>
                    </ul>
                ))}
            
        </Page>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, password}){
        return{
            username: username || "",
            password: password || ""
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        password: yup.string().required()
    }),

    handleSubmit(values, {setStatus, props}){

        axios
            .post("https://authbackend121.herokuapp.com/api/auth/register", values)
            .then(response => {
                console.log(response);
                setStatus(response.data);
                props.history.push("/login")

            })
            .catch(error =>(
                console.log("what went wrong?", error.response)))
    }
})(SignupForm);

export default FormikUserForm;

