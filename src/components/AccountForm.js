import React, { useState, useEffect } from "react";
import { NavigationEvents } from "react-navigation";
import { Text, Button, Input } from "react-native-elements";
import { StyleSheet } from "react-native";
import Spacer from "./Spacer";

const AccountForm = ({ onSubmit, errorMessage, clearErrorMessage }) => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (errorMessage) setFormSubmitted(false);
  }, [errorMessage]);

  return (
    <>
      <NavigationEvents
        onWillFocus={() => {
          clearErrorMessage();
          setFormSubmitted(false);
          setPassword("");
        }}
      />
      <Spacer>
        <Input
          secureTextEntry
          label="Password"
          value={password}
          onChangeText={setPassword}
          autoCapitalize="none"
          autoCorrect={false}
        />
      </Spacer>
      {errorMessage ? (
        <Spacer>
          <Text style={styles.errorMessage}>{errorMessage}</Text>
        </Spacer>
      ) : null}
      <Spacer>
        <Button
          title="Update"
          onPress={() => {
            clearErrorMessage();
            setFormSubmitted(true);
            onSubmit({ password });
          }}
          disabled={formSubmitted || !password ? true : false}
          loading={formSubmitted ? true : false}
        />
      </Spacer>
    </>
  );
};

const styles = StyleSheet.create({
  errorMessage: {
    fontSize: 16,
    color: "red",
  },
  disabled: {
    backgroundColor: "#cccccc",
  },
});

export default AccountForm;
