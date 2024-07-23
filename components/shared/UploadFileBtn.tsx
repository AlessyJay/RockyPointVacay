"use client";

import React, { useState } from "react";
import { Button } from "../ui/button";
import { useDropzone } from "react-dropzone";
import { UploadIcon, X, TextIcon } from "lucide-react";
import { Input } from "../ui/input";

const UploadFileBtn = () => {
  const [selectedFile, setSelectedFile] = useState<File | null>(null);

  const onDrop = (acceptedFiles: File[]) => {
    if (acceptedFiles.length > 0) {
      setSelectedFile(acceptedFiles[0]);
    }
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
    accept: {
      "application/pdf": [".pdf"],
      "application/vnd.ms-excel": [".xls", ".xlsx"],
      "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet": [
        ".xlsx",
      ],
    },
    multiple: false,
  });

  const removeFile = () => {
    setSelectedFile(null);
  };
  return (
    <div>
      <div
        {...getRootProps()}
        className="cursor-pointer rounded-md border-2 border-dashed border-gray-300 p-8 hover:border-blue-500 dark:text-slate-200"
      >
        <Input {...getInputProps()} />
        <div className="flex flex-col items-center">
          {selectedFile ? (
            <div className="flex items-center">
              <TextIcon className="mr-2 size-6 text-gray-500" />
              <p className="truncate">{selectedFile.name}</p>
              <Button onClick={removeFile} className="ml-2">
                <X className="size-5 text-red-500" />
              </Button>
            </div>
          ) : (
            <div className="flex flex-col items-center">
              <UploadIcon className="mb-2 size-8 text-gray-500" />
              <p>
                {isDragActive
                  ? "Drop the files here..."
                  : "Drag & drop file here, or click to select a file."}
              </p>
            </div>
          )}
        </div>
      </div>
      {selectedFile && (
        <Button disabled className="mt-4">
          Upload File (Not Implemented)
        </Button>
      )}
    </div>
  );
};

export default UploadFileBtn;
