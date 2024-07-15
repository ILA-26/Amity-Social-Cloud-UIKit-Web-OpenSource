import React from 'react';
import { Content, FileContainer, FileIcon, FileName, FileSize } from './styles';
import useFile from '~/core/hooks/useFile';
import { FileRepository } from '@amityco/ts-sdk';
import filesize from 'filesize';

type FileProps = {
  'data-qa-anchor'?: string;
  fileId?: string;
};

const File = ({ 'data-qa-anchor': dataQaAnchor = '', fileId }: FileProps) => {
  const file = useFile(fileId);

  if (!file) return null;

  const fileUrl = FileRepository.fileUrlWithSize(file?.fileUrl, 'small');
  const size = !isNaN(Number(file.attributes.size)) ? Number(file.attributes.size) : 0;
  const name = file.attributes.name;
  const type = file.attributes.mimeType;

  return (
    <FileContainer href={fileUrl} download data-qa-anchor={dataQaAnchor}>
      <Content>
        <FileIcon file={{ name, type }} />
        <FileName>{name}</FileName> <FileSize>{filesize(size || 0, { base: 2 })}</FileSize>
      </Content>
    </FileContainer>
  );
};

export default File;
