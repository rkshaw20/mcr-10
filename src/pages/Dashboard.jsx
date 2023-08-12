import { Box, Card, Flex, Heading, Text } from '@chakra-ui/react';
import { ColorModeSwitcher } from '../ColorModeSwitcher';
import { useDataContext } from '../context/DataContextProvider';

const Dashboard = () => {
  const { totalStocks, totalDelivered, lowStockItem } = useDataContext();

  return (
    <Flex  flexDir="column">
      <Flex w="full" h="full" justifyContent="space-between">
        <Heading>Home</Heading>
        <ColorModeSwitcher justifySelf="flex-end" />
      </Flex>
      <Flex height="full" justifyContent="space-around">
        <Card  bgColor='gray.400' height='100px' w='150px' >
          {' '}
          <Flex gap={2} m={2} >
            <Text>{totalStocks}</Text>
            <Text>Total stocks</Text>
          </Flex>
        </Card>

        <Card bgColor='gray.400' height='100px' w='150px'>
          <Flex gap={2} m={2}>
            <Text>{totalDelivered}</Text>
            <Text>Total Delivered</Text>
          </Flex>
        </Card>
        <Card bgColor='gray.400' height='100px' w='150px'>
          {' '}
          <Flex gap={2} m={2}>
            <Text>{lowStockItem}</Text>
            <Text>Low stock Item</Text>
          </Flex>
        </Card>
  
      </Flex>
    </Flex>
  );
};

export default Dashboard;
