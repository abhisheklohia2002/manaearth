import { Box } from '@chakra-ui/react'
import React from 'react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Home from '../../pages/Home'
import FacePage from '../../pages/FacePage'
export default function BottomNav({search}) {

  return (
  <Box mt={0}>
<Tabs variant={"enclosed"}  colorScheme='green'>
  <TabList justifyContent={"center"} fontSize={''}>
    <Tab
    
    >Home</Tab>
    <Tab>Beauty</Tab>
    <Tab>Hair</Tab>
<Tab>Face</Tab>
<Tab>Body</Tab>
<Tab>Makeup</Tab>
<Tab>Store</Tab>
<Tab>Ingredient</Tab>
<Tab>Baby</Tab>
<Tab>Gift Pack</Tab>
<Tab>All Products</Tab>
<Tab>Blog</Tab>
<Tab>Plant Goodness</Tab>
  </TabList>
  <TabPanels>
    <TabPanel>
     <Home   info = {search} />
    </TabPanel>
    <TabPanel>
      <p>two!</p>
    </TabPanel>
    <TabPanel>
      <p>Three!</p>
    </TabPanel>
    <TabPanel>
      <FacePage/>
    </TabPanel>
    <TabPanel>
        <p>five</p>
    </TabPanel>
    <TabPanel>
        <p>six</p>
    </TabPanel>
    <TabPanel>
        <p>seven</p>
    </TabPanel>
    <TabPanel>
        eights
    </TabPanel>
    <TabPanel>
        nine
    </TabPanel>
    <TabPanel>
        <p>ten</p>
    </TabPanel>
    <TabPanel>
        eleven
    </TabPanel>
    <TabPanel>
        twelve
    </TabPanel>
    <TabPanel>
        thirtteen
    </TabPanel>
  </TabPanels>
</Tabs>
  </Box>
  )
}
