import * as api from '@/api/subCategoryApi';
import { FETCH } from '@/reducers/subCategorySlice';

export const getSubCategories = () => async (dispatch) => {
    try {
        const { data } = await api.fetchSubCategories()
        dispatch(FETCH(data));
    } catch (error) {
        console.log(error);
        Swal.fire('Error!', 'Something went wrong', 'error');
    }
};












// export const createArea = (area, setFormVisible) => async (dispatch) => {
//     try {
//         const { data } = await api.createArea(area);

//         dispatch(CREATE(data));
//         setFormVisible(false);

//         Swal.fire('Success!', 'Area has been added.', 'success');
//     } catch (error) {
//         console.log(error);
//         Swal.fire('Error!', 'Something went wrong', 'error');
//     }
// };

// export const updateArea = (id, area, setFormVisible) => async (dispatch) => {
//     try {
//         const { data } = await api.updateArea(id, area);

//         dispatch(UPDATE(data));
//         setFormVisible(false);
//         Swal.fire('Success!', 'Area has been updated.', 'success');
//     } catch (error) {
//         console.log(error);
//         Swal.fire('Error!', 'Something went wrong', 'error');
//     }
// };

// export const deleteArea = (id) => async (dispatch) => {
//     try {
//         await api.deleteArea(id);

//         dispatch(DELETE(id));
//         Swal.fire('Success!', 'Area has been deleted.', 'success');
//     } catch (error) {
//         dispatch(ERROR({ isError: true, data: error }));

//         setTimeout(() => {
//             dispatch(UPDATE_ERROR());
//         }, 5000);
//     }
// };
