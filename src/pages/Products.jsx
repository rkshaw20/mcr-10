import {
  Box,
  Button,
  Checkbox,
  Flex,
  Heading,
  Image,
  Link,
  Select,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  filter,
} from '@chakra-ui/react';
import { useDataContext } from '../context/DataContextProvider';
import { useState } from 'react';
import { useNavigate, useParams, Link as ReachLink } from 'react-router-dom';

const Products = () => {
  const { data } = useDataContext();
  const {department: param}=useParams();
  const navigate=useNavigate()
  const [selectDepartment, setSelectDepartment] = useState('all');
  const [sortValue,setSortValue]=useState('');
  const [low,setLow]=useState(false)

  const paramData=param  ?  data.filter(({department})=>department===param) :data

  const handleChange = e => {
    setSelectDepartment(prev => e.target.value);
  };
const handleSort=(e)=>{
setSortValue((prev)=>e.target.value)
}
const handleCheck=(e)=>{
setLow(!low)
}


const dataSource = param ? paramData : data;

const sortedData = 
    sortValue === 'name' 
    ? [...dataSource].sort((a,b) => a.name.localeCompare(b.name))
    : sortValue === 'price'
    ? [...dataSource].sort((a,b) => a.price - b.price)
    : sortValue === 'stock'
    ? [...dataSource].sort((a,b) => a.stock - b.stock)
    : dataSource;

    const filterLowStock=   low ? sortedData.filter(({ stock }) => stock <= 10) : sortedData;



  const filteredData =
    selectDepartment === 'all'
      ? filterLowStock
      : filterLowStock.filter(({ department }) => department === selectDepartment);


  return (
    <Flex flexDir="column">
      <Flex w="full" justifyContent="space-between" p={2}>
        <Heading>Products</Heading>
       {!param && <Select width='100px' name="department" id="department" onChange={handleChange}>
          <option value="all">All</option>
          <option value="Kitchen">Kitchen</option>
          <option value="Clothing">Clothing</option>
          <option value="Toys">Toys</option>
        </Select> } 

        <Box>
          <Checkbox colorScheme="green" isChecked={low} onChange={handleCheck} >Low Stock Items</Checkbox>
        </Box>
       
       <Select width='100px' name='sort' id='sort' onChange={handleSort} >
          <option value="name">Name</option>
          <option value="price">Price</option>
          <option value="stock">Stock</option>
       </Select>
        <Button bgColor="blue.400"  onClick={()=>navigate('/addNewProduct')} >New</Button>
      </Flex>
      <Flex>
        <TableContainer>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Image</Th>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Price</Th>
                <Th>Stock</Th>
                <Th>Supplier</Th>
              </Tr>
            </Thead>
            <Tbody>
              {filteredData.map(product => (
                <Tr key={product.id}>
                  <Td>
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      w="150px"
                      h="100px"
                    />
                  </Td>
                  <Td>  <Link as={ReachLink} to={`/products/details/${product.id}`} >{product.name}</Link> </Td>
                  <Td>{product.description}</Td>
                  <Td>${product.price}</Td>
                  <Td>{product.stock}</Td>
                  <Td>{product.supplier}</Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </TableContainer>
      </Flex>
    </Flex>
  );
};

export default Products;
