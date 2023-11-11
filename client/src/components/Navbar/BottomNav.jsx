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
    <FacePage
      title = " Best Beauty Care Products" p1= "Hair Oil"
      p2 = "Face Srum" p3 = "Hair gel"
      p4 = " Face Cream" p5 = "Hair Wash"
      />
      
    </TabPanel>
    <TabPanel>
   
       <FacePage
      title = " Best Hair Care Products" p1= "Hair Oil"
      p2 = "Hair Srum" p3 = "Hair gel"
      p4 = " Hair Cream" p5 = "Hair Wash"
      />
     
    </TabPanel>
    <TabPanel>
      <FacePage
      title = " Best Skin Care Products" p1= "Face Toner"
      p2 = "Face Srum" p3 = "Face gel"
      p4 = " Face Cream" p5 = "Face Wash"
      />
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
