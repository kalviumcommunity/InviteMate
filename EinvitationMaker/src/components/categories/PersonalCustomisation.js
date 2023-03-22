import React, { useRef, useEffect, useState } from 'react';
import fabric from 'fabric';

function PersonalCustomization() {
  const canvasRef = useRef(null);
  const [canvas, setCanvas] = useState(null);

  // Initialize the canvas on component mount
  useEffect(() => {
    const canvasObj = new fabric.Canvas(canvasRef.current);
    setCanvas(canvasObj);
  }, []);

  // Define a function to handle changes to the canvas
  function handleCanvasChange() {
    // Do something with the updated canvas state
  }

  // Render the canvas and options for editing it
  return (
    <div>
      <canvas ref={canvasRef} width={400} height={400} />
      <button onClick={() => {
        // Add a rectangle to the canvas
        const rect = new fabric.Rect({
          left: 100,
          top: 100,
          width: 200,
          height: 100,
          fill: 'red'
        });
        canvas.add(rect);
        // Trigger the canvas change event
        handleCanvasChange();
      }}>Add Rectangle</button>
    </div>
  );

//   return(
//     <>
//     handleCanvasChange()
//     </>
//   )
}

export default PersonalCustomization;
