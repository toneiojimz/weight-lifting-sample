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
                    {/* <Field class="field"  
                        type="text" name="first_last" placeholder="First and Last Name"/>
                        {touched.first_last && errors.first_last && (
                        <p className="errors">{errors.first_last}</p>
                    )} */}
                    <label className="label">Password</label>
                    <Field className="field" 
                        type="password" name="password" placeholder="Create Password"/>
                        {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                    <div>
                        <button className="button is-primary">Sign Up</button>
                    </div>

                </div>
            
        </Page>
    );
};

const FormikUserForm = withFormik({
    mapPropsToValues({ username, first_last, password}){
        return{
            username: username || "",
            first_last: first_last || "",
            password: password || ""
        };
    },
    validationSchema: yup.object().shape({
        username: yup.string().required(),
        first_last: yup.string().required(),
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

