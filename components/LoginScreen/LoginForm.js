import React from "react";
import {
  Button,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
  Pressable,
} from "react-native";
import { Formik } from "formik";
import * as Yup from "yup";
import Validator from "email-validator";

const LoginForm = () => {
  const LoginFormSchema = Yup.object().shape({
    email: Yup.string().email().required("An email is required"),
    password: Yup.string()
      .required()
      .min(8, "Your Passwird has to be atleast 8 characters"),
  });
  return (
    <View style={styles.wrapper}>
      <Formik
        initialValues={{ email: "", password: "" }}
        onSubmit={(values) => {
          console.log(values);
          console.log("you clicked the submit button");
        }}
        validationSchema={LoginFormSchema}
        validateOnMount={true}
      >
        {({ handleChange, handleBlur, handleSubmit, values, isValid }) => (
          <>
            <View
              style={[
                styles.inputField,
                {
                  borderColor:
                    values.email.length < 1 || Validator.validate(values.email)
                      ? "#ccc"
                      : "red",
                },
              ]}
            >
              <TextInput
                placeholderTextColor="#444"
                placeholder="Phone number, username or email"
                autoComplete="none"
                keyboardType="email-address"
                textContentType="emailAddress"
                autoFocus={false}
                onChange={handleChange("email")}
                onBlur={handleBlur("email")}
                value={values.email}
              />
            </View>
            <View style={styles.inputField}>
              <TextInput
                placeholderTextColor="#444"
                placeholder="Password"
                autoCapitalize="none"
                autoCorrect={false}
                secureTextEntry={true}
                textContentType="password"
                onChange={handleChange("password")}
                onBlur={handleBlur("password")}
                value={values.password}
              />
            </View>
            <View style={{ alignItems: "flex-end", marginBottom: 30 }}>
              <TouchableOpacity>
                <Text style={{ color: "#6BB0F5" }}>Forgot password?</Text>
              </TouchableOpacity>
            </View>
            <View style={styles.button}>
              <Pressable
                style={styles.button(isValid)}
                titleSize={20}
                onPress={handleSubmit}
              >
                <Text style={styles.buttonText}>Login</Text>
              </Pressable>
            </View>
            <View style={styles.signUpContainer}>
              <Text>Don't have an account? </Text>
              <TouchableOpacity>
                <Text style={{ color: "#6880F5" }}>Sign Up</Text>
              </TouchableOpacity>
            </View>
          </>
        )}
      </Formik>
    </View>
  );
};

export default LoginForm;

const styles = StyleSheet.create({
  wrapper: { marginTop: 88 },
  inputField: {
    borderRadius: 4,
    padding: 6,
    backgroundColor: "#FAFAFA",
    marginBottom: 10,
    borderWidth: 2,
    borderColor: "gray",
  },
  button: (isValid) => ({
    backgroundColor: isValid ? "#0096F6" : "#9ACAF7",
    alignItems: "center",
    justifyContent: "center",
    minHeight: 42,
    borderRadius: 4,
    marginTop: 30,
  }),
  buttonText: {
    fontWeight: "600",
    color: "#fff",
    fontSize: 20,
  },
  signUpContainer: {
    flexDirection: "row",
    width: "100%",
    justifyContent: "center",
    marginTop: 50,
  },
});
