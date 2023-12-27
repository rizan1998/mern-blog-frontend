import React, { useState } from "react";
import { HiOutlineCamera } from "react-icons/hi";

import { stables } from "../constants";
import CropEasy from "./crop/cropEasy";
import { createPortal } from "react-dom";

const ProfilePicture = ({ avatar }) => {
  const [openCrop, setOpenCrop] = useState(false);
  const [photo, setPhoto] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.file[0];
    setPhoto({
      url: URL.createObjectURL(file),
      file: file,
    });
    setOpenCrop(true);
  };

  return (
    <>
      {openCrop && createPortal(<CropEasy photo={photo} setOpenCrop={setOpenCrop} />, document.getElementById("portal"))}
      <div className="w-full flex items-center gap-x-4">
        <div className="relative w-20 h-20 rounded-full outline outline-offset-2 outline-1 lutline-primary overflow-hidden ">
          <label htmlFor="profilePicture" className="cusor-pointer absolute inset-0 rounded-full bg-transparent">
            {avatar ? (
              <img src={stables.UPLOAD_FOLDER_BASE_URL + avatar} alt="" className="w-full h-full object-cover" />
            ) : (
              <div className="w-full h-full bg-blue-50/50 flex justify-center items-center">
                <HiOutlineCamera className="w-7 h-auto text-primary" />
              </div>
            )}
          </label>
        </div>
        <input type="file" className="sr-only" id="profilePicture" onChange={handleFileChange()} />
        <button type="button" className="border border-red-500 rounded-lg px-4 py-2 text-red-500">
          Delete
        </button>
      </div>
    </>
  );
};

export default ProfilePicture;
