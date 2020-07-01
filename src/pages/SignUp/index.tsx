import React, { useRef } from "react";
import {
  Image,
  View,
  ScrollView,
  KeyboardAvoidingView,
  Platform,
} from "react-native";
import Icon from "react-native-vector-icons/Feather";
import { useNavigation } from "@react-navigation/native";
import { Form } from "@unform/mobile";
import { FormHandles } from "@unform/core";

import Input from "../../components/Input";
import Button from "../../components/Button";
import logoImg from "../../assets/logo.png";
import { Container, Title, BackToSignIn, BackToSignInText } from "./styles";

const SignUp: React.FC = () => {
  const formRef = useRef<FormHandles>(null);
  const navigation = useNavigation();

  return (
    <>
      <KeyboardAvoidingView
        style={{ flex: 1 }}
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        enabled
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
          contentContainerStyle={{ flex: 1 }}
        >
          <Container>
            <Image source={logoImg} />
            <View>
              <Title>Register</Title>
            </View>
            <Form
              ref={formRef}
              onSubmit={(data) => {
                console.log(FormData);
              }}
            >
              <Input name="name" icon="user" placeholder="Name" />

              <Input name="email" icon="mail" placeholder="Email" />

              <Input name="password" icon="lock" placeholder="Password" />

              <Button
                onPress={() => {
                  formRef.current?.submitForm();
                }}
              >
                Enter
              </Button>
            </Form>
          </Container>
        </ScrollView>
        <BackToSignIn onPress={() => navigation.goBack()}>
          <Icon name="arrow-left" size={20} color="#fff" />
          <BackToSignInText>Go back</BackToSignInText>
        </BackToSignIn>
      </KeyboardAvoidingView>
    </>
  );
};

export default SignUp;
