import React, { memo } from 'react';

import { faHeart, faComment, faBookmark } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { logoInstagram } from 'assets/images';

import {
  PostPreviewInstagramContainer,
  PostPreviewInstagramAvatarContainer,
  PostPreviewInstagramAvatarImage,
  PostPreviewInstagramAvatarName,
  PostPreviewInstagramPhoto,
  PostPreviewInstagramActionsContainer,
  PostPreviewInstagramDescription,
} from './PostPreviewInstagram.styles';

interface IPostPreviewInstagramProps {
  description: string;
  image?: string;
}

const PostPreviewInstagram: React.FC<IPostPreviewInstagramProps> = ({ description, image }) => (
  <PostPreviewInstagramContainer>
    <PostPreviewInstagramAvatarContainer>
      <picture>
        <PostPreviewInstagramAvatarImage src={logoInstagram} alt="logo do Instagram" />
      </picture>
      <PostPreviewInstagramAvatarName>Anselmo Carlos</PostPreviewInstagramAvatarName>
    </PostPreviewInstagramAvatarContainer>
    <PostPreviewInstagramPhoto src={image} alt="imagem da postagem" />
    <PostPreviewInstagramActionsContainer>
      <div>
        <span aria-label="preview do botão de curtir">
          <FontAwesomeIcon icon={faHeart} size="lg" color={theme.colors.accent[800]} />
        </span>
        <span aria-label="preview do botão de comentar">
          <FontAwesomeIcon icon={faComment} size="lg" color={theme.colors.accent[800]} />
        </span>
      </div>
      <span aria-label="preview do botão de salvar postagem">
        <FontAwesomeIcon icon={faBookmark} size="lg" color={theme.colors.accent[800]} />
      </span>
    </PostPreviewInstagramActionsContainer>
    <PostPreviewInstagramDescription>{description}</PostPreviewInstagramDescription>
  </PostPreviewInstagramContainer>
);

export default memo(PostPreviewInstagram);
