import React, { memo } from 'react';

import PostPreviewInstagram from './components/PostPreviewInstagram';
import PostPreviewLinkedin from './components/PostPreviewLinkedin';
// import PostPreviewNoContent from './components/PostPreviewNoContent';

const PostPreview: React.FC = () => (
  <div style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}>
    <div style={{ marginRight: 20 }}>
      <PostPreviewInstagram />
    </div>
    <PostPreviewLinkedin />
  </div>
);

export default memo(PostPreview);
