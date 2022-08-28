import React from "react"
import { Box, Button, Flex, FormControl, FormLabel, Img, Input, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, Text, useDisclosure } from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import { useContext, useState } from "react";
import { AppContext } from "../Context/AppContext";

function Shopwhat() {
    const { isOpen, onOpen, onClose } = useDisclosure()

  const initialRef = React.useRef(null)
  const finalRef = React.useRef(null)
  const [fromState, setFormState] = useState({
    email: "",
    password: ""
  });
  const auth = useContext(AppContext);
  const navigate = useNavigate();

  function handleChange(e) {
    const { name, value } = e.target;
    setFormState({
      ...fromState,
      [name]: value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    fetch("https://reqres.in/api/users?page=2", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      }
      // body: JSON.stringify(formState)
    })
      .then((res) => res.json())
      .then((res) => {
        alert("Login_Success");
        console.log(res);
        auth.handleLogin(res.token);
        navigate("/");
      })
      .catch((err) => {});
  }


    return (
        <div>
        <Box marginTop="30px" >
            <Text fontWeight="bold" fontSize="xl">Shop what you love—faster and easier.</Text>

            <Button marginTop="3" onClick={onOpen}>Sign In or Create an Account</Button>
            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sign In</ModalHeader>
          <Text marginLeft="6">New to Nordstrom? Create an account.</Text>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Email</FormLabel>
              <Input ref={initialRef } placeholder='Enter Email' onChange={handleChange} />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel>Password</FormLabel>
              <Input placeholder='Enter Password' type="password" onChange={handleChange} />
            </FormControl>
            <Text>Forgot password?</Text>
          </ModalBody>
          <Box marginLeft="6" marginRight="6" bgColor="chakra-body-bg">
            <input type="checkbox"/>
            Keep me sign in
            <Text marginLeft="4" fontSize="smaller">You won't need to sign in as often. Only do this if you're on your personal device. Just sign out if you change your mind.</Text>
          </Box>
          <Text marginLeft="6" marginRight="6" padding="5" fontSize="small">By signing in to your account, you agree to our Privacy Policy and Terms & Conditions.</Text>

          <ModalFooter>
            <Button color="white" bgColor="black" colorScheme="blue" margin="auto" width="full" onClick={handleSubmit} >
              Sign In
            </Button>
            {/* <Button onClick={onClose}>Cancel</Button> */}
          </ModalFooter>
        </ModalContent>
      </Modal>
        </Box>

        </div>
    )
}

export default Shopwhat