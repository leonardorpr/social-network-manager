import React, { memo, useMemo, useCallback } from 'react';

import { SocialNetwork } from 'core/enums/SocialNetwork';
import { ISchedulePostSocialNetwork } from 'core/interfaces/ISchedulePost';

import PostPreviewInstagram from './components/PostPreviewInstagram';
import PostPreviewLinkedin from './components/PostPreviewLinkedin';
import PostPreviewNoContent from './components/PostPreviewNoContent';
import { PostPreviewContainer } from './PostPreview.styles';

interface IPostPreviewProps {
  socialNetworks: ISchedulePostSocialNetwork[];
  image?: string;
  description: string;
}

const PostPreview: React.FC<IPostPreviewProps> = ({ socialNetworks, image, description }) => {
  const hasSocialNetworkSelected = useMemo(() => socialNetworks.find((socialNetwork) => socialNetwork.selected), [
    socialNetworks,
  ]);

  const selectedSocialNetworks = useMemo(() => socialNetworks.filter((socialNetwork) => socialNetwork.selected), [
    socialNetworks,
  ]);

  const renderSocialNetworks = useCallback(() => {
    const mappedSocialNetworks = selectedSocialNetworks.map((socialNetwork) => {
      if (socialNetwork.id === SocialNetwork.Instagram) {
        return <PostPreviewInstagram description={description} image={image} />;
      }

      return <PostPreviewLinkedin description={description} image={image} />;
    });

    return mappedSocialNetworks;
  }, [selectedSocialNetworks, description, image]);

  return (
    <PostPreviewContainer>
      {!hasSocialNetworkSelected && <PostPreviewNoContent />}
      {hasSocialNetworkSelected && renderSocialNetworks()}
    </PostPreviewContainer>
  );
};

export default memo(PostPreview);
