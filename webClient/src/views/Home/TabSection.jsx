import React from 'react'

import Tabs from '@mui/joy/Tabs';
import TabList from '@mui/joy/TabList';
import Tab from '@mui/joy/Tab';
import TabPanel from '@mui/joy/TabPanel';


import FormSection from './Form';

const TabSection = () => {
  return (
	<>
		<Tabs aria-label="Basic tabs" defaultValue={0} sx={{ borderRadius: 'lg' }}>
			<TabList variant="solid" color="primary">
				<Tab>Excel Import</Tab>
				<Tab>...</Tab>
			</TabList>
			<TabPanel value={0} sx={{ p: 2 }}>
				<FormSection />
			</TabPanel>
			<TabPanel value={1} sx={{ p: 2 }}>
				<b>Second</b> tab panel
			</TabPanel>
		</Tabs>
	</>
  )
}

export default TabSection