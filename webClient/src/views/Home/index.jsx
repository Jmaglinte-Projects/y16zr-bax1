import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import TabSection from './TabSection';

import { getSubCategories } from '@/actions/subCategoryAction';

const index = () => {
	const dispatch = useDispatch();
	const subCategories = useSelector((state) => state.subCategories);

	useEffect(() => {
		return () => dispatch(getSubCategories());
	}, [dispatch]);
	
	console.log(subCategories);
	

	return (
		<>
			<TabSection />
		</>
	)
}

export default index