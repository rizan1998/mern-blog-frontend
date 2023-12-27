import React, { useState } from "react";
import Cropper from "react-easy-crop";

const CropEasy = ({ photo }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setcroppedAreaPixels] = useState(null);

  const handleCropComplete = (croppedArea, croppedAreaPixels) => {
    setcroppedAreaPixels(croppedAreaPixels);
  };

  return (
    <div className="fixed z-[1000] inset-e bg-black/50 flex justify-center p-5 overflow-auto">
      {" "}
      <div className="bg-white h-fit w-full sm: max-w-[350px] p-5 rounded-lg">
        <h2 className="font-semibold text-dark-hard mb-2">Crop Image</h2>
        <div className="relative w-full aspect-square rounded-1g overflow-hidden">
          <Cropper image={photo?.url} crop={crop} zoom={zoom} aspect={1} onZoomChange={setZoom} onCropChange={setCrop} onCropComplete={handleCropComplete} />
        </div>
      </div>
    </div>
  );
};
export default CropEasy;
