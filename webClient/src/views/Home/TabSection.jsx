import React from 'react'

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';


import FormSection from './Tabs/Form';
import SubCategoryForm from './Tabs/SubCategoryForm';

const TabSection = () => {
  return (
	<>
		<Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
			<TabList variant="solid" color="primary">
				<Tab>Excel Import</Tab>
				<Tab>Add Sub Category Poster</Tab>
			</TabList>
			<TabPanel value={0} sx={{ p: 2 }}>
				<FormSection />
			</TabPanel>
			<TabPanel value={1} sx={{ p: 2 }}>
				<SubCategoryForm />
			</TabPanel>
		</Tabs>
	</>
  )
}

export default TabSection