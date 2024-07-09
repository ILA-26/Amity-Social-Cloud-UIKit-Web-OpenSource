import React, { useState, useCallback, ReactNode } from 'react';
import styled from 'styled-components';
import cx from 'clsx';
import { notification } from '~/core/components/Notification';
import { FormattedMessage } from 'react-intl';

// equals to 50 MB
const MAX_FILE_SIZE = 52428800;
const MIN_FILES_LIMIT = 1;

export const FileLoaderContainer = styled.label`
  cursor: pointer;
  background: rgb(235 236 239 / 60%);
  transition: background 0.1s;
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  align-items: center;
  justify-content: center;

  &:hover,
  &:focus,
  &:active {
    background: rgb(235 236 239);
  }

  &.disabled {
    cursor: not-allowed;
  }

  > svg {
    height: 1.125rem;
    width: 1.125rem;
    font-size: 1.125rem;
  }
`;

const FileInput = styled.input.attrs({ type: 'file' })`
  &&& {
    display: none;
  }
`;

interface FileLoaderProps {
  className?: string;
  'data-qa-anchor'?: string;
  mimeType?: string;
  multiple?: boolean;
  disabled?: boolean;
  fileLimitRemaining?: number | null;
  children?: ReactNode;
  onChange?: (files: File[]) => void;
}

const FileLoader: React.FC<FileLoaderProps> = ({
  className = '',
  'data-qa-anchor': dataQaAnchor = '',
  mimeType,
  multiple,
  disabled,
  onChange,
  fileLimitRemaining = 0,
  children,
}) => {
  const [uniqId] = useState(`_${(Date.now() * Math.random()).toString(36)}`);
  const [hover, setHover] = useState(false);

  const onMaxFilesLimit = useCallback(
    () =>
      notification.info({
        content: <FormattedMessage id="upload.attachmentLimit" />,
      }),
    [],
  );

  const onFileSizeLimit = useCallback(
    () =>
      notification.info({
        content: <FormattedMessage id="upload.fileSizeLimit" />,
      }),
    [],
  );

  const onInvalidFileType = useCallback(
    () =>
      notification.info({
        content: <FormattedMessage id="upload.invalidFileType" />,
      }),
    [],
  );

  const getLimitFiles = useCallback(
    (targetFiles) => targetFiles.slice(0, multiple ? fileLimitRemaining : MIN_FILES_LIMIT),
    [fileLimitRemaining, multiple],
  );

  const checkFileSizeLimit = (targetFiles: File[]) =>
    targetFiles.some((file) => file.size > MAX_FILE_SIZE);
  const checkFilesLimit = useCallback(
    (targetFiles) => (fileLimitRemaining || 0) < targetFiles.length,
    [fileLimitRemaining],
  );

  const ila26_checkFilesTypes = (targetFiles: File[]) => {
    if (!mimeType) return targetFiles;
    const allowedTypes = new Set(mimeType.replace(/\s+/g, '').split(','));
    return targetFiles.filter((file) => allowedTypes.has(file.type));
  };

  const onDragEnter = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) return;

      e.dataTransfer.setData(mimeType, uniqId);
      setHover(true);
    },
    [disabled, mimeType, uniqId],
  );

  const onDragLeave = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();

      if (disabled) return;
      setHover(false);
    },
    [disabled],
  );

  const onLoad: React.ChangeEventHandler<HTMLInputElement> = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;
      const targetFiles = e.target.files ? [...e.target.files] : [];

      const isFileSizeLimitReached = checkFileSizeLimit(targetFiles);
      const isFilesLimitReached = checkFilesLimit(targetFiles);
      const limitFiles = getLimitFiles(targetFiles);
      const filteredByTypeFiles = ila26_checkFilesTypes(limitFiles);

      if (filteredByTypeFiles.length < limitFiles.length) {
        onInvalidFileType?.();
      }

      if (isFileSizeLimitReached) {
        // e.target.value = null;
        onFileSizeLimit?.();
      } else if (filteredByTypeFiles.length) {
        onChange?.(filteredByTypeFiles);
      }

      // Attempted to upload more files than allowed meaning some have been removed.
      if (isFilesLimitReached) {
        onMaxFilesLimit?.();
      }
    },
    [checkFilesLimit, disabled, getLimitFiles, onChange, onFileSizeLimit, onMaxFilesLimit],
  );

  const onDrop: React.DragEventHandler<HTMLLabelElement> = useCallback(
    (e) => {
      e.preventDefault();
      e.stopPropagation();
      if (disabled) return;

      const exprs = (mimeType || '')
        .split(',')
        .map((expr) => expr.replace('*', '.*'))
        .map((expr) => new RegExp(expr));

      const allowedFiles = Array.from(e.dataTransfer.files).filter((file) =>
        exprs.some((expr) => expr.test(file.type)),
      );

      const limitFiles = getLimitFiles(allowedFiles);

      if (limitFiles.length) onChange?.(limitFiles);
      setHover(false);
    },
    [disabled, getLimitFiles, mimeType, onChange],
  );

  const onClick: React.MouseEventHandler<HTMLInputElement> = (ev) => {
    // e.target.value = null;
  };

  return (
    <FileLoaderContainer
      data-qa-anchor={`${dataQaAnchor}`}
      id={uniqId}
      className={cx(className, { hover, disabled })}
      onDragEnter={onDragEnter}
      onDragOver={onDragEnter}
      onDragLeave={onDragLeave}
      onDrop={onDrop}
    >
      <FileInput
        accept={mimeType}
        multiple={multiple}
        disabled={disabled}
        onChange={onLoad}
        onClick={onClick}
      />
      {children}
    </FileLoaderContainer>
  );
};

export default FileLoader;
