import React, { useState } from 'react';

function AudioUpload({ onChange }) {
  const [fileName, setFileName] = useState('');

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setFileName(file.name);
      onChange(file);
    }
  };

  return (
    <div>
      <label>Upload Audio File: </label>
      <input type="file" accept="audio/*" onChange={handleFileChange} />
      {fileName && <p>Selected File: {fileName}</p>}
    </div>
  );
}

export default AudioUpload;