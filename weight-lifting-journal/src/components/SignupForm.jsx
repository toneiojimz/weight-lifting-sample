import React, {useEffect, useState} from 'react';
import {withFormik, Form, Field} from 'formik';
import * as yup from 'yup';
import axios from 'axios';
import styled from 'styled-components';
import bulma from 'bulma';
import { unstable_renderSubtreeIntoContainer } from 'react-dom';

const SignupForm =({ values, errors, touched, status}) => {
    const[user, setUser]= useState([]);

    useEffect(() => {
        status && setUser(users =>[...users, status]);
    }, [status]);

    return (
        <div>
           
                <h3>Wanna Register?</h3>
                <Form>
                    <Field type="text" name="username" placeholder="Create Username here"/>
                    {touched.username && errors.username && (
                        <p className="errors">{errors.username}</p>
                    )}
                    <Field type="text" name="first_last" placeholder="First and Last Name"/>
                    {touched.first_last && errors.first_last && (
                        <p className="errors">{errors.first_last}</p>
                    )}
                    <Field type="password" name="password" placeholder="Create Password"/>
                    {touched.password && errors.password && (
                        <p className="errors">{errors.password}</p>
                    )}
                    <button onClick='/login'>Sign Up</button>

                </Form>
            
        </div>
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

