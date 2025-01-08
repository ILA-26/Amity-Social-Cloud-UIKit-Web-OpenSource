import React, { useState, useMemo } from 'react';
import { FormattedMessage } from 'react-intl';
import Truncate from 'react-truncate-markup';

import { processChunks } from '~/core/components/ChunkHighlighter';
import Linkify from '~/core/components/Linkify';
import MentionHighlightTag from '~/core/components/MentionHighlightTag';
import { Mentioned, findChunks } from '~/helpers/utils';
import { useCustomComponent } from '~/core/providers/CustomComponentsProvider';
import Post from '~/social/components/post/Post';
import { PostContent, ReadMoreButton } from './styles';

interface ShareContentProps {
  text?: string;
  originPostId: string;
  postMaxLines?: number;
  mentionees?: Mentioned[];
}

const ShareContent = ({ text, postMaxLines, mentionees, originPostId }: ShareContentProps) => {
  const chunks = useMemo(
    () => processChunks(text || '', findChunks(mentionees)),
    [mentionees, text],
  );

  const TextContent = text ? (
    <PostContent data-qa-anchor="post-share-content">
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

  return (
    <>
      {!isExpanded
        ? TextContent && (
            <Truncate
              lines={postMaxLines}
              ellipsis={
                <ReadMoreButton onClick={onExpand}>
                  <FormattedMessage id="post.readMore" />
                </ReadMoreButton>
              }
            >
              {TextContent}
            </Truncate>
          )
        : text}
      <Post postId={originPostId} readonly={true} />
    </>
  );
};

export default (props: ShareContentProps) => {
  const CustomComponentFn = useCustomComponent<ShareContentProps>('UIShareContent');

  if (CustomComponentFn) return CustomComponentFn(props);

  return <ShareContent {...props} />;
};
