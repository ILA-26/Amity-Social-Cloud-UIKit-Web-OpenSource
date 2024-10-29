import React from 'react';
import {
  DetailsContainer,
  PreviewContainer,
  PreviewImage,
  SubTitle,
  Title,
  UnstyledLink,
} from './styles';

const YouTubePreview = ({ thumbnail, provider, title, author, url }: Props) => {
  return (
    <UnstyledLink href={url} rel="noopener noreferrer" target="_blank">
      <PreviewContainer>
        <PreviewImage src={thumbnail} alt={`thumbail of a video titled as: ${title}`} />
        <DetailsContainer>
          <SubTitle>{provider}</SubTitle>
          <Title>{title}</Title>
          <SubTitle>{author}</SubTitle>
        </DetailsContainer>
      </PreviewContainer>
    </UnstyledLink>
  );
};

export type Props = {
  provider: string;
  title: string;
  author: string;
  thumbnail: string;
  url: string;
};

export type YouTubeOEmbedResponse = {
  title: string;
  url: string;
  author_name: string;
  author_url: string;
  type: string;
  height: number;
  width: number;
  version: string;
  provider_name: string;
  provider_url: string;
  thumbnail_height: number;
  thumbnail_width: number;
  thumbnail_url: string;
  html: string;
};

export default YouTubePreview;
