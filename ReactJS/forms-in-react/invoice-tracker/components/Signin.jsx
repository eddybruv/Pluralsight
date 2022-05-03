import React from "react";
import { Formik, Field, Form, ErrorMessage } from "formik";
import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
  align-items: center;
`;
const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 600px;
  margin-top: 50px;
`;

const Title = styled.h1`
  white-space: pre-line;
`;

const SignInForm = styled(Form)`
  display: flex;
  flex-direction: column;
  padding: 30px;
  border: 1px solid black;
`;

const Label = styled.label`
  margin-top: 20px;
  font-size: 24px;
`;

const EmailField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const PasswordField = styled(Field)`
  height: 40px;
  font-size: 24px;
`;

const CheckboxContainer = styled.div`
  display: flex;
  height: 50px;
  align-items: center;
`;

const CheckboxLabel = styled(Label)`
  margin-top: 7px;
  margin-left: 10px;
`;

const RememberMeCheckboxField = styled(Field)`
  margin-top: 10px;
`;

const SubmitButton = styled.input`
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid #666666;
  border-radius: 4px;
  font-weight: 600;
  cursor: pointer;
  margin-top: 40px;
`;

const ErrorLable = styled.div`
  font-size: 26px;
  color: red;
`;

class SignInComponent extends React.Component {
  constructor(props) {
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleValidation = this.handleValidation.bind(this);
  }

  handleSubmit(values, actions) {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve();
        alert(JSON.stringify(values));
      }, 5000);
    });
  }

  handleValidation(values) {
    const errors = {};

    if (!values.email) {
      errors.email = "Email can't be empty";
    }
    if (!values.password) {
      errors.password = "Password can't be empty";
    } else if (values.password.length < 8) {
      errors.password = "Password should be at least 8 characters";
    }
    return errors;
  }

  render() {
    return (
      <Container>
        <ContentContainer>
          <Title>{"Sign In"}</Title>
          <Formik
            initialValues={{ email: "", password: "", rememberMe: false }}
            onSubmit={this.handleSubmit}
            validate={this.handleValidation}
          >
            {props => (

              <SignInForm>
                <Label>Email</Label>
                <EmailField name="email" type="email"/>
              </SignInForm>
            )}
          </Formik>
        </ContentContainer>
      </Container>
    );
  }
}
