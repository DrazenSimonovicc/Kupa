import React from "react";
import {
  View,
  StyleSheet,
  TextInput,
  Text,
  Alert,
  Pressable,
} from "react-native";
import { colors } from "../../../colors/colors";
import AccountScreenHeader from "../../components/AccountScreenHeader";
import { Formik } from "formik";
import * as Yup from "yup";

const SignupSchema = Yup.object().shape({
  name: Yup.string()
    .min(6, "Too Short!")
    .max(50, "Too Long!")
    .required("Please enter your full name"),
  email: Yup.string().email("Invalid email").required("Please enter your mail"),
  password: Yup.string()
    .min(8)
    .required("Please enter your password")
    .matches(
      /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
      "Must contain minimum 8 characters, at least one uppercase letter, one lowercase letter, one number and one special character"
    ),
  confirmPassword: Yup.string()
    .min(8, "Confirm Password must be 8 characters long")
    .oneOf([Yup.ref("password")], "Your passwords do not match")
    .required("Confirm password is required"),

  mobile: Yup.string()
    .min(9, "Must be at least 9 digits")
    .max(15, "Mobile number is too long")
    .matches(/^[0-9]+$/, "Must me only digits")
    .required("Please enter your mobile number"),
});

const Settings = () => {
  return (
    <Formik
      initialValues={{
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
        mobile: "",
      }}
      validationSchema={SignupSchema}
      onSubmit={(values) => {
        Alert.alert("Form Values", JSON.stringify(values));
      }}
    >
      {({
        values,
        errors,
        touched,
        handleSubmit,
        handleChange,
        setFieldTouched,
        isValid,
      }) => (
        <View>
          <AccountScreenHeader text="FORMIK FORM" />
          <Text> Sign Up</Text>
          <View style={styles.container}>
            <TextInput
              placeholder="Full Name"
              placeholderTextColor={colors.background}
              style={styles.textInput}
              value={values.name}
              onChangeText={handleChange("name")}
              onBlur={() => setFieldTouched("name")}
            />
            {touched.name && errors.name && <Text>{errors.name}</Text>}
          </View>
          <View style={styles.container}>
            <TextInput
              placeholder="Email"
              placeholderTextColor={colors.background}
              style={styles.textInput}
              autoCapitalize="none"
              value={values.email}
              onChangeText={handleChange("email")}
              onBlur={() => setFieldTouched("email")}
            />
            {touched.email && errors.email && <Text>{errors.email}</Text>}
          </View>
          <View style={styles.container}>
            <TextInput
              placeholder="Password"
              placeholderTextColor={colors.background}
              style={styles.textInput}
              autoCapitalize="none"
              value={values.password}
              onChangeText={handleChange("password")}
              onBlur={() => setFieldTouched("password")}
            />
            {touched.password && errors.password && (
              <Text>{errors.password}</Text>
            )}
          </View>
          <View style={styles.container}>
            <TextInput
              placeholder="Confirm Password"
              placeholderTextColor={colors.background}
              style={styles.textInput}
              autoCapitalize="none"
              value={values.confirmPassword}
              onChangeText={handleChange("confirmPassword")}
              onBlur={() => setFieldTouched("confirmPassword")}
            />
            {touched.confirmPassword && errors.confirmPassword && (
              <Text>{errors.confirmPassword}</Text>
            )}
          </View>
          <View style={styles.container}>
            <TextInput
              placeholder="Mobile No."
              placeholderTextColor={colors.background}
              style={styles.textInput}
              autoCapitalize="none"
              keyboardType="phone-pad"
              value={values.mobile}
              onChangeText={handleChange("mobile")}
              onBlur={() => setFieldTouched("mobile")}
            />
            {touched.mobile && errors.mobile && <Text>{errors.mobile}</Text>}
          </View>
          <Pressable
            onPress={handleSubmit}
            style={[
              styles.button,
              {
                backgroundColor: isValid
                  ? colors.background
                  : colors.lightBackground,
              },
            ]}
            disabled={!isValid}
          >
            <Text style={styles.buttonText}>Submit</Text>
          </Pressable>
        </View>
      )}
    </Formik>
  );
};

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 15,
  },
  textInput: {
    borderBottomColor: colors.background,
    borderBottomWidth: 1,
    color: colors.darkGray,
    padding: 10,
    width: 300,
    backgroundColor: colors.inputColor,
  },
  button: {
    width: 200,
    height: 50,
    borderRadius: 20,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: colors.background,
  },
  buttonText: {
    color: colors.white,
  },
});

export default Settings;
