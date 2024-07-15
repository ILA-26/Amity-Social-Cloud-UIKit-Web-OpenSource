import { FileRepository } from '@amityco/ts-sdk';
import React, { useContext, useEffect, useState } from 'react';
import styled from 'styled-components';
import { PropsContext } from '../../Chat';

const StyledImage = styled.img<{ variant: 'regular' | 'popup' }>`
  ${({ variant }) => (variant === 'regular' ? 'max-width: 350px' : 'max-width: 150px')};
`;

const Image = ({ data }: { data: { fileId: string } }) => {
  const { variant } = useContext(PropsContext);
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const fn = async () => {
      const avatarFile = await FileRepository.getFile(data.fileId);
      const url = FileRepository.fileUrlWithSize(avatarFile.data.fileUrl, 'medium');
      setImageUrl(url);
    };
    fn();
  }, []);

  return imageUrl ? (
    <StyledImage variant={variant} src={imageUrl} alt="image in message" loading="eager" />
  ) : (
    <p>⏳</p>
  );
};

export default Image;
