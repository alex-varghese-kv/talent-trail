import React, { LegacyRef } from 'react';

const AcceptedFileType = {
  // Text: '.txt',
  // Gif: '.gif',
  // Jpeg: '.jpg',
  // Png: '.png',
  // Doc: '.doc',
  Pdf: '.pdf',
  // AllImages: 'image/*',
  // AllVideos: 'video/*',
  // AllAudios: 'audio/*',
};
export const FileUpload = () => {
  const fileRef = React.useRef<HTMLInputElement>(null);
  const acceptedFormats = '.pdf';

  const [selectedFiles, setSelectedFiles] = React.useState<File | undefined>();

  const handleFileSelect = (event: any) => {
    setSelectedFiles(event?.target?.files?.[0]);
  };

  const onUpload = () => {
    console.log(selectedFiles);
  };

  const onClear = () => {
    setSelectedFiles(undefined);
  };

  const onUpdate = (event: any) => {
    if (event.target.textContent.trim().toLowerCase() === 'change') {
      onClear();
      fileRef?.current?.click();
      return;
    }
    if (event.target.textContent.trim().toLowerCase() === 'clear') {
      onClear();
      return;
    }
  };

  return (
    <>
      <input
        ref={fileRef}
        hidden
        type="file"
        accept={acceptedFormats}
        onChange={handleFileSelect}
      />
      {!selectedFiles?.name && (
        <div className="button-group d-inline-flex align-items-center ">
          <button
            className="dash-btn-two tran3s me-3"
            // variant="contained"
            // component="label"
            // style={{ textTransform: 'none' }}
            onClick={() => fileRef.current?.click()}
          >
            Choose file to upload
          </button>
        </div>
      )}
      {selectedFiles?.name && (
        <button
          // variant="contained"
          // component="label"
          style={{ textTransform: 'none' }}
          onClick={onUpdate}
          className="flex w-full justify-between items-center"
        >
          <div> {selectedFiles?.name}</div>
          <div className="flex">
            <span className="bg-YELLOW_GREEN rounded-full py-2 px-3">
              Clear
            </span>
          </div>
        </button>
      )}
      {/* <button
        color="primary"
        disabled={!selectedFiles}
        style={{ textTransform: 'none' }}
        onClick={onUpload}
      >
        Upload
      </button> */}
    </>
  );
};
