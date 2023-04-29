import {
  Box,
  Container,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
//import React from 'react'
import Login from "../components/Authentication/login";
import Signup from "../components/Authentication/signup";
//import { useHistory } from 'react-router-dom';
import { useHistory, useEffect } from "react";
//import React, { useEffect } from 'react';
const Homepage = () => {
  const history = useHistory;
  useEffect(()=> {
    const user = JSON.parse(localStorage.getItem("userInfo"));
    if(user) history.push("/chats");
  }, [history]);
  return (
  <Container maxW="xl" centerContent>
    <Box
        d="flex"
        justifyContent="center"
        p={3}
        bg="white"
        w="100%"
        m="40px 0 15px 0"
        borderRadius="lg"
        borderWidth="1px"
        >
        <Text style={{textAlign: "center"}} fontSize="4xl" fontFamily="Work sans" >
            Talk-A-Tive
            </Text>
    </Box>
     <Box bg="white" w="100%" p={4} borderRadius="lg" color='black' borderWidth="1px">
        <Tabs variant="soft-rounded" >
          <TabList mb="1em">
            <Tab width= "50%">Login</Tab>
            <Tab width= "50%">Sign Up</Tab>
          </TabList>
          <TabPanels>
            <TabPanel>
              <Login />
            </TabPanel>
            <TabPanel>
              <Signup />
            </TabPanel>
          </TabPanels>
        </Tabs>
        </Box> 
    </Container>
    );
};

export default Homepage;
