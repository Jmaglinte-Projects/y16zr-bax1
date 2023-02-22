import React from 'react'

const index = ({...props}) => {
  return (
	<>
		<input id="upload"  type="file" {...props} />
	</>
  )
}

export default index
