import React, { useState } from "react";
import { StyleSheet, Image, ActivityIndicator } from "react-native";
import * as Yup from "yup";
import Screen from "../components/Screen";
import Snackbar from "../components/Snackbar";
import {
  ErrorMessage,
  Form,
  FormField,
  SubmitButton,
} from "../components/forms";

import defaultStyles from "../config/styles";

const validationSchema = Yup.object().shape({
  userid: Yup.string()
    .required("لطفا کد کاربری را وارد نمایید")
    .label("User Id"),
  userpass: Yup.string()
    .required("لطفا رمز عبور را وارد نمایید")
    .min(4)
    .label("Password"),
});

function LoginScreen(props) {
  const [loginFailed, setLoginFailed] = useState(false);
  const [submiting, setSubmiting] = useState(false);
  const [snackbar, setSnackbar] = useState({
    msg: "",
    open: false,
    backColor: defaultStyles.colors.success,
  });
  const handleSubmit = async ({ userid, userpass }) => {
    try {
      setSubmiting(true);
      //const result = await axios.post("/login", { userid, userpass });
      setLoginFailed(false);
      setSubmiting(false);      
    } catch (err) {
      setSubmiting(false);
      setSnackbar({
        msg: "خطا ورود به برنامه",
        open: true,
        backColor: defaultStyles.colors.danger,
      });
      setLoginFailed(true);
    }
  };

  return (
    <Screen style={styles.container}>
      <Image style={styles.logo} source={require("../assets/company.jpg")} />

      <Form
        initialValues={{ userid: "", userpass: "" }}
        onSubmit={handleSubmit}
        validationSchema={validationSchema}
      >
        <ErrorMessage
          error="کدکاربری و یا رمز عبور اشتباه میباشد"
          visible={loginFailed}
        />
        <FormField
          autoCorrect={false}
          icon="account"
          name="userid"
          placeholder="کد کاربری"
        />
        <FormField
          autoCorrect={false}
          icon="account"
          name="age"
          placeholder="سن"
        />
        <FormField
          autoCapitalize="none"
          autoCorrect={false}
          icon="lock"
          name="userpass"
          placeholder="رمز عبور"
          secureTextEntry
          textContentType="password"
        />
        {submiting ? (
          <ActivityIndicator visible={submiting} color="#777" size="large" />
        ) : (
          <SubmitButton title="Login" />
        )}
      </Form>
      <Snackbar
        time={5000}
        open={snackbar.open}
        msg={snackbar.msg}
        backColor={snackbar.backColor}
        onPress={() => setSnackbar({ ...snackbar, open: false })}
      />
    </Screen>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
  },
  logo: {
    width: 200,
    height: 50,
    alignSelf: "center",
    marginTop: 50,
    marginBottom: 20,
  },
});

export default LoginScreen;
