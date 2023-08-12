import { Card, Flex, Heading, Link, Text } from "@chakra-ui/react";
import { Link as ReachLink } from "react-router-dom";
const Departments=()=>{
    return (
        <Flex flexDir='column' >
            <Flex w='full' justifyContent='space-between' >
            <Heading>Departments</Heading>
            </Flex>
            <Flex height="full" justifyContent="space-around" m={2} >
        <Card  bgColor='gray.400' height='100px' w='150px' >
          {' '}
          <Link as={ReachLink} to='/products/Kitchen'>
          <Flex gap={2} m={2} >
            <Text>Kitchen</Text>
          </Flex>
          </Link>
          
        </Card>

        <Card bgColor='gray.400' height='100px' w='150px'>
        <Link as={ReachLink} to='/products/Clothing'>
          <Flex gap={2} m={2} >
            <Text>Clothing</Text>
          </Flex>
          </Link>
        </Card>
        <Card bgColor='gray.400' height='100px' w='150px'>
        <Link as={ReachLink} to='/products/Toys'>
          <Flex gap={2} m={2} >
            <Text>Toys</Text>
          </Flex>
          </Link>
        </Card>
  
      </Flex>

        </Flex>
    )
}

export default Departments;