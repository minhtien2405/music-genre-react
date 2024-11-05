import './App.css';
import React, { useState } from 'react';
import AudioUpload from './components/AudioUpload';
import axios from 'axios';

function App() {
  const [selectedModel, setSelectedModel] = useState('');
  const [audioFile, setAudioFile] = useState(null);
  const [result, setResult] = useState('');

  const models = ["Ensemble", "MFCC_1DCNN", "STFT_1DCNN", "STFT_CNN_LSTM"];

  const handleModelChange = (event) => {
    setSelectedModel(event.target.value);
  };

  const handleAudioChange = (file) => {
    setAudioFile(file);
  };

  const handleSubmit = async () => {
    if (!selectedModel) {
      alert("Please select a model.");
      return;
    }

    if (!audioFile) {
      alert("Please upload an audio file.");
      return;
    }

    const formData = new FormData();
    formData.append('file', audioFile);

    try {
      const response = await axios.post(`http://localhost:8000/predict/?model_name=${selectedModel}`, formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      setResult(response.data.result);
    } catch (error) {
      console.error("Error:", error);
      alert("An error occurred during prediction.");
    }
  };

  return (
    <div>
      <header>
        <div>
          <h1>Music Genre Classification</h1>
        </div>
      </header>
      <main>
        <div className="upload-section">
          <h2>Upload Audio File</h2>
          <AudioUpload onChange={handleAudioChange} />
          <select value={selectedModel} onChange={handleModelChange}>
            <option value="">Select Model</option>
            {models.map((model) => (
              <option key={model} value={model}>{model}</option>
            ))}
          </select>
          <button onClick={handleSubmit}>Classify Genre</button>
        </div>
        {result && (
          <div className="result-section">
            <h2>Classification Result</h2>
            <p>{result}</p>
          </div>
        )}
      </main>
    </div>
  );
}

export default App;
