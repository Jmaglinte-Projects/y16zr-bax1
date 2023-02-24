import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TabSection from './TabSection';

import { getSubCategories } from '@/actions/subCategoryAction';

const index = () => {
	return (
		<>
			<TabSection />
		</>
	)
}

export default index