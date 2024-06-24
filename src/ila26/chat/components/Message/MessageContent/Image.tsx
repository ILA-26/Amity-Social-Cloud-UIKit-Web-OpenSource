import { FileRepository } from '@amityco/ts-sdk';
import React, { useEffect, useState } from 'react';

const Image = ({ data }: { data: { fileId: string } }) => {
  const [imageUrl, setImageUrl] = useState<string>();

  useEffect(() => {
    const fn = async () => {
      const avatarFile = await FileRepository.getFile(data.fileId);
      const url = FileRepository.fileUrlWithSize(avatarFile.data.fileUrl, 'medium');
      setImageUrl(url);
    };
    fn();
  }, []);

  return imageUrl ? <img src={imageUrl} alt="image in message" loading="eager" /> : <p>⏳</p>;
};

export default Image;
