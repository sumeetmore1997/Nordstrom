// import { Box, Flex, Input, Spacer, Text, Img } from "@chakra-ui/react"


// function Navbar() {
//     return (
//       <Box>
//        <Flex>
//          <Box>
//             <Img style={{"width":"250px", "heigth":"10px"}} src="https://1000logos.net/wp-content/uploads/2019/08/Nordstrom-logo-1.jpg" />
//          </Box>
//          <Spacer />
//          <Box>
//           <Input placeholder='Search' />
//          </Box>
//          <Spacer />
//          <Box w='180px' h='10' bg='red.500' />
//        </Flex>
//     </Box>
//     )
// }

// export default Navbar;

import {
  Flex,
  Heading,
  Box,
  Button,
  Spacer,
  ButtonGroup,
  Text,
  Menu,
  MenuItem,
  MenuList,
  MenuButton,
  Input,
  IconButton,
  SearchIcon,
} from "@chakra-ui/react";
import React from "react";
import { Image } from "@chakra-ui/react";
// import theme from "./style";
import { Link, NavLink } from "react-router-dom";


const links = [
  {
    to: "/",
    title: "Sale"
  },
  {
    to: "/women",
    title: "Women"
  },
  {
    to: "/men",
    title: "Men"
  },
  {
    to: "/kids",
    title: "Kids"
  },
  {
    to: "/youngadult",
    title: "youngAdult"
  },
  {
    to: "/activewear",
    title: "Activewear"
  },
  {
    to: "/home",
    title: "Home"
  },
  {
    to: "/beauty",
    title: "Beauty"
  },
  {
    to: "/designer",
    title: "Designer"
  },
  {
    to: "/gifts",
    title: "Gifts"
  },
  {
    to: "/brands",
    title: "Brands"
  }
]

const Navbar = () => {
  const baseStyle = {
    color: "black",
    textDecoration: "none",
  };

  const activeStyle = {
    color: "red",
    textDecoration: "none",
  };
  const handleClick = (event) => {
    event.currentTarget.style.backgroundColor = "teal";
    event.currentTarget.style.color = "white";
    //  event.preventDefault();
    event.currentTarget.classList.add("my-class-1", "my-class-2");
  };

  // handleClick?" true":"false"

  return (
    <div >
      
      <div>
        <Box font="theme" boxShadow="sm" p="6" rounded="md" bg="white">
          <Flex
            justify="space-around"
            minWidth="max-content"
            alignItems="center"
            gap="4"
          >
            <Button
              colorScheme="black"
              variant="ghost"
              ml="1rem"
              fontSize={"30px"}
              fontWeight="bolder"
            >
              <Link to="/">
                <img
                  style={{ height: "85px", width: "200px" }}
                  src="https://1000logos.net/wp-content/uploads/2019/08/Nordstrom-logo-1.jpg"
                />
              </Link>
            </Button>
            <box>
              <Input
                style={{ height: "40px", width: "650px", marginLeft: "100px" }}
                placeholder="Search for product or brands"
              />
            </box>
            <Spacer />

<ButtonGroup gap="2">
              <div style={{ height: "30px", width: "80px" }}>
                {" "}
                <Link to="/signin">
                  {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9txoghgC5ixWdbQJqoUDlh0UgRAN4SEw3Ag&usqp=CAU" /> */}
                  <Text>Sign In</Text>
                </Link>
              </div>
            </ButtonGroup>

            <ButtonGroup gap="2">
              <div style={{ height: "30px", width: "20px" }}>
                <Link to="/AddtoBag">
                  <img src=" data:image/jpeg;base64,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" />
                </Link>
              </div>
            </ButtonGroup>
          </Flex>
        </Box>
      </div>
      <hr />
      <br></br>
      <div style={{display: "flex", gap: "2rem", justifyContent: "space-evenly"}}>
        {links.map((item) => (
          <NavLink
          style={({ isActive}) => (isActive ? activeStyle : baseStyle)}
          to={item.to}
          key={item.to}
          >
            {item.title}
          </NavLink>
        ))}
      </div>
      </div>
  )
}

export default Navbar

