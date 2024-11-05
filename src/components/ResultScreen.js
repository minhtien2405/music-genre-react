import React from 'react';

function ResultScreen({ result }) {
  return (
    <div>
      <h2>Classification Result:</h2>
      <p>{result}</p>
    </div>
  );
}

export default ResultScreen;