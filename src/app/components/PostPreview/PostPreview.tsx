import React, { memo } from 'react';

import PostPreviewInstagram from './components/PostPreviewInstagram';
import PostPreviewLinkedin from './components/PostPreviewLinkedin';
// import PostPreviewNoContent from './components/PostPreviewNoContent';
import { PostPreviewContainer } from './PostPreview.styles';

const PostPreview: React.FC = () => (
  <PostPreviewContainer>
    <PostPreviewInstagram />
    <PostPreviewLinkedin />
  </PostPreviewContainer>
);

export default memo(PostPreview);
