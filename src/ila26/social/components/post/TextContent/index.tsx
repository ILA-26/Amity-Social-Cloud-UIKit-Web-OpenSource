import React, { useState, useMemo, useEffect } from 'react';
import { FormattedMessage } from 'react-intl';
import Truncate from 'react-truncate-markup';
import styled from 'styled-components';

import { processChunks } from '~/core/components/ChunkHighlighter';
import Button from '~/core/components/Button';
import Linkify from '~/core/components/Linkify';
import MentionHighlightTag from '~/core/components/MentionHighlightTag';
import { Mentioned, findChunks } from '~/helpers/utils';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import { getYouTubeOEmbedFromText } from '~/ila26/utils';
import YouTubePreview, {
  YouTubeOEmbedResponse,
} from '~/ila26/social/components/post/TextContent/YouTubePreview';

export const PostContent = styled.div`
  overflow-wrap: break-word;
  color: ${({ theme }) => theme.palette.neutral.main};
  white-space: pre-wrap;
  ${({ theme }) => theme.typography.body}
`;

export const ReadMoreButton = styled(Button).attrs({ variant: 'secondary' })`
  color: ${({ theme }) => theme.palette.primary.main};
  padding: 4px;
  display: inline-block;
`;

interface TextContentProps {
  text?: string;
  postMaxLines?: number;
  mentionees?: Mentioned[];
  hasChildrenPosts: boolean;
}

const TextContent = ({ text, postMaxLines, mentionees, hasChildrenPosts }: TextContentProps) => {
  const [oembed, setOembed] = useState<YouTubeOEmbedResponse | null>();
  const chunks = useMemo(
    () => processChunks(text || '', findChunks(mentionees)),
    [mentionees, text],
  );

  useEffect(() => {
    if (text) {
      getYouTubeOEmbedFromText(text).then((res) =>
        setOembed(res),
      );
    }
  }, []);

  const textContent = text ? (
    <PostContent data-qa-anchor="post-text-content">
      <Truncate.Atom>
        {chunks.map((chunk) => {
          const key = `${text}-${chunk.start}-${chunk.end}`;
          const sub = text.substring(chunk.start, chunk.end);
          if (chunk.highlight) {
            const mentionee = mentionees?.find((m) => m.index === chunk.start);
            if (mentionee) {
              return (
                <MentionHighlightTag key={key} mentionee={mentionee}>
                  {sub}
                </MentionHighlightTag>
              );
            }
            return <span key={key}>{sub}</span>;
          }
          return <Linkify key={key}>{sub}</Linkify>;
        })}
      </Truncate.Atom>
    </PostContent>
  ) : null;

  const [isExpanded, setIsExpanded] = useState(false);
  const onExpand = () => setIsExpanded(true);

  if (!textContent) return null;

  if (isExpanded) return textContent;

  return (
    <>
      <Truncate
        lines={postMaxLines}
        ellipsis={
          <ReadMoreButton onClick={onExpand}>
            <FormattedMessage id="post.readMore" />
          </ReadMoreButton>
        }
      >
        {textContent}
      </Truncate>
      {oembed && !hasChildrenPosts && (
        <YouTubePreview
          thumbnail={oembed.thumbnail_url}
          provider={oembed.provider_name}
          title={oembed.title}
          author={oembed.author_name}
          url={oembed.url}
        />
      )}
    </>
  );
};

export default (props: TextContentProps) => {
  const CustomComponentFn = useCustomComponent<TextContentProps>('UITextContent');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <TextContent {...props} />;
};
