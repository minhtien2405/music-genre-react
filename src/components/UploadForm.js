// src/components/UploadForm.js
import React from 'react';

function UploadForm({ onAudioChange, onGenreChange }) {
  const handleAudioChange = (e) => {
    onAudioChange(e.target.files[0]);
  };

  const handleGenreChange = (e) => {
    onGenreChange(e.target.value);
  };

  return (
    <div className="upload-section">
      <h2>Upload Your Audio File</h2>
      <input type="file" accept="audio/*" onChange={handleAudioChange} required />
      <label htmlFor="genre">Select Genre:</label>
      <select onChange={handleGenreChange} required>
        <option value="Pop">Pop</option>
        <option value="Rock">Rock</option>
        <option value="Jazz">Jazz</option>
        <option value="Classical">Classical</option>
      </select>
      <button type="submit">Submit</button>
    </div>
  );
}

export default UploadForm;