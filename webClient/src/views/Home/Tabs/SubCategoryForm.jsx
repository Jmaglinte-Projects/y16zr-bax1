import React, { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import FileBase64 from 'react-file-base64';
import { Box } from '@mui/joy';

// project imports
import FileInput from '@/components/FileInput';
import AutoComplete from '@/components/AutoComplete';

import { getSubCategories, updateSubCategory } from '@/actions/subCategoryAction';

const SubCategoryForm = () => {
	const dispatch = useDispatch();
	
	const subCategoryOption = useSelector((state) => state.subCategories)
		.map(c => ({ label: c.name, id: c._id, poster: c.poster }));
		
	const [formData, setFormData] = useState({
		id: null,
		poster: null,
	});
	const [result, setResult] = useState([])
	const [hasPoster, setHasPoster] = useState(false)

	useEffect(() => {
		return () => dispatch(getSubCategories());
	}, [dispatch]);

	const handleChangeSubCategory = (e, subCat = null) => {
		
		if(subCat === null) {
			setFormData({ ...formData, id: null});
			setResult([]);
			setHasPoster(false);
			return;
		}
		
		let filteredData = subCategoryOption.filter(data => data.id === subCat.id);
		setFormData({ ...formData, id: subCat.id })

		if(filteredData.length > 0 && filteredData[0]?.poster) {
			setResult(filteredData);
			setHasPoster(true);	
			return;
		}

		
		setResult([]);
		setHasPoster(false);	

	}

	const handleSubmit = () => {
		if(!formData.id) {
			alert('Please select subcategory from listing')
			return;
		}

		dispatch(updateSubCategory(formData.id, { ...formData }))
	}

	return (
		<>
			<div className='appForm'>
				<div className='field'>
					<label htmlFor='categoryName'>Sub Category Lists</label>
					<AutoComplete options={subCategoryOption} onChange={handleChangeSubCategory} />
					{
						hasPoster ? (<Box sx={{mt: 1}}>Poster for is already added.</Box>) : ''
					}
				</div>
				<div className='field'>
					<label htmlFor="subCategoryPoster">Poster</label>
					{<FileBase64 name="subCategoryPoster" onDone={(e) => {
						const file = e.file;
						const fileExtension = file.type.split('/').pop().toLowerCase();
						const acceptedExtensions = ["jpg", "jpeg", "png"];
						
						if (!acceptedExtensions.includes(fileExtension)) {
							// Show an error message to the user
							alert("Only JPG and PNG files are accepted.");
							return;
						}
						setFormData({...formData, poster: e.base64});
					}} />}
				</div>
				<button onClick={handleSubmit} >UPLOAD</button>
			</div>
			{
				formData.poster ? (
					<Box sx={{ mt: '25px', boxShadow: '0 0 0 10px #413f3f14', borderRadius: 3 }}>
						<img src={formData.poster} />
					</Box>
				): ''
			}
			
		</>
	)
}

export default SubCategoryForm