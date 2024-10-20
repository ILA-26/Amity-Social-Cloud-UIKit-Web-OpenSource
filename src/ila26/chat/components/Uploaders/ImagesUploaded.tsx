import React from 'react';
import styled, { css } from 'styled-components';

import Image from '~/core/components/Uploaders/Image';
import useFileUpload, { isAmityFile } from '~/core/hooks/useFileUpload';

const Gallery = styled('div')<{ uploadLoading?: boolean }>`
  display: flex;
  max-height: 100px;
  &:first-child div {
    max-width: 150px;
    max-height: 100px;
  }
  &:first-child div:not(:last-child) {
    margin-right: 5px;
  }
  ${({ uploadLoading }) =>
    uploadLoading &&
    css`
      cursor: wait !important;
    `}
`;

interface ImagesGalleryProps {
  allFiles: Array<Amity.File | File>;
  progress: { [key: string]: number };
  rejected: string[];
  uploadLoading: boolean;
  removeFile: (file: File | Amity.File) => void;
  retry: (file: File) => void;
}

const ImagesGallery = ({
  allFiles,
  progress,
  removeFile,
  uploadLoading,
  rejected,
  retry,
}: ImagesGalleryProps) => {
  return (
    <Gallery uploadLoading={uploadLoading}>
      {allFiles.map((file) => {
        if (!isAmityFile(file)) {
          return (
            <Image
              key={file?.name}
              data-qa-anchor="post-creator-uploaded-image"
              file={file}
              progress={progress[file?.name]}
              isRejected={rejected.includes(file?.name)}
            />
          );
        }
        const { fileId } = file;
        return (
          <Image
            key={fileId}
            fileId={fileId}
            data-qa-anchor="post-creator-uploaded-image"
            onRemove={() => removeFile(file)}
          />
        );
      })}
    </Gallery>
  );
};

interface ImagesUploadedProps {
  files: File[];
  uploadedFiles: Amity.File[];
  onChange: (data: { uploaded: Array<Amity.File>; uploading: Array<File> }) => void;
  onLoadingChange: (loading: boolean) => void;
  uploadLoading: boolean;
  onError: (error: string) => void;
}

const ImagesUploaded = ({ files, uploadedFiles, onChange, onLoadingChange, uploadLoading, onError }: ImagesUploadedProps) => {
  const useFileUploadProps = useFileUpload({
    files,
    uploadedFiles,
    onChange,
    onLoadingChange,
    onError,
  });

  const { allFiles } = useFileUploadProps;

  if (allFiles.length === 0) return null;

  return <ImagesGallery {...useFileUploadProps} uploadLoading={uploadLoading} />
};

export default ImagesUploaded;
