import React from 'react';

import { postPreview } from 'assets/images';

import {
  PostPreviewNoContentContainer,
  PostPreviewNoContentDescription,
  PostPreviewNoContentImage,
} from './PostPreviewNoContent.styles';

const PostPreviewNoContent: React.FC = () => (
  <PostPreviewNoContentContainer>
    <PostPreviewNoContentDescription>
      Aguardando conteúdo. Informe os canais e as mídias desejadas para visualização.
    </PostPreviewNoContentDescription>
    <PostPreviewNoContentImage src={postPreview} />
  </PostPreviewNoContentContainer>
);

export default PostPreviewNoContent;
