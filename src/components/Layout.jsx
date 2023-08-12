import { Grid, GridItem, useColorModeValue } from "@chakra-ui/react";
import NavBar from "./NavBar";
import { Outlet } from "react-router-dom";


const Layout=()=>{
    return(
        <Grid
        bg={useColorModeValue('gray.50', 'gray.800')}
        minH="100dvh"
        templateColumns={{ base: 'auto 1fr', lg: '1fr 4fr' }} 
        templateRows={{
          // base: 'auto calc(100dvh - 56.8px - 82.4px)', 
          lg: '56.8px calc(100dvh - 56.8px)',
        }}
        templateAreas={{
          base: `"main main main"
                  "nav nav nav"`,
          lg: `"nav main"`,
        }}
      >
        
        <GridItem as={'nav'} area="nav">
          <NavBar />
        </GridItem>
        <GridItem
          scrollBehavior="smooth"
          as={'main'}
          area={'main'}
          // overflowY="scroll"
          h='full'
        >
            <Outlet/>
        </GridItem>
      
      </Grid>
    )
    }
    export default Layout;