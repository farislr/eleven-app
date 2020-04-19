import React from 'react'

export default function UploadButton({ label, onUpload, id }) {
  let fileInput = null
  // If no id was specified, generate a random one
  const uid = id || Math.random().toString(36).substring(7)

  return (
    <span>
      <label htmlFor={uid} className='ui icon button'>
        <i className='upload icon'></i>
        {label}
      </label>
      <input
        type='file'
        id={uid}
        style={{ display: 'none' }}
        onChange={() => {
          onUpload(fileInput.files[0])
        }}
        ref={(input) => {
          fileInput = input
        }}
      />
    </span>
  )
}
