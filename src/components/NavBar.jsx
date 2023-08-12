import { Flex, Link, Text, useColorModeValue } from "@chakra-ui/react";
import {NavLink as ReachLink} from 'react-router-dom'

const NavBar=()=>{

    return(
        <Flex
      height="full"
      flexDir={{ base: "row", lg: "column" }}
      justifyContent={{ base:'space-between', lg:'flex-start'}}
      gap={4}
      p={{ base: "1rem", lg: "1rem" }}
    >
       <Link as={ReachLink} to='/' >
        <Text>Dashboard</Text>
       </Link>
       <Link as={ReachLink} to='/departments'>
       <Text>Deparments</Text>

       </Link>
      
       <Link as={ReachLink} to={`/products`} >
        <Text>Products</Text>
       </Link>
    </Flex>
    )
}

export default NavBar;