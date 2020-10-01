import React, { memo } from 'react';

import { faCommentAlt, faThumbsUp } from '@fortawesome/free-regular-svg-icons';
import { faShare } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { logoLinkedin } from 'assets/images';

import {
  PostPreviewLinkedinContainer,
  PostPreviewLinkedinInformations,
  PostPreviewLinkedinAvatarContainer,
  PostPreviewLinkedinAvatarImage,
  PostPreviewLinkedinAvatarName,
  PostPreviewLinkedinPhoto,
  PostPreviewLinkedinActionsContainer,
  PostPreviewLinkedinDescription,
  PostPreviewLinkedinComments,
  PostPreviewLinkedinPublicationDate,
} from './PostPreviewLinkedin.styles';

interface IPostPreviewLinkedinProps {
  description: string;
  image?: string;
}

const PostPreviewLinkedin: React.FC<IPostPreviewLinkedinProps> = ({ description, image }) => (
  <PostPreviewLinkedinContainer>
    <PostPreviewLinkedinAvatarContainer>
      <picture>
        <PostPreviewLinkedinAvatarImage src={logoLinkedin} alt="logo do Linkedin" />
      </picture>
      <PostPreviewLinkedinInformations>
        <PostPreviewLinkedinAvatarName>Anselmo Carlos</PostPreviewLinkedinAvatarName>
        <PostPreviewLinkedinPublicationDate>06 de setembro</PostPreviewLinkedinPublicationDate>
      </PostPreviewLinkedinInformations>
    </PostPreviewLinkedinAvatarContainer>
    <PostPreviewLinkedinDescription>{description}</PostPreviewLinkedinDescription>
    <PostPreviewLinkedinPhoto src={image} alt="imagem da postagem" />
    <PostPreviewLinkedinComments>5 comentários</PostPreviewLinkedinComments>
    <PostPreviewLinkedinActionsContainer>
      <span aria-label="preview do botão de curtir">
        <FontAwesomeIcon icon={faThumbsUp} width="16px" height="16px" color={theme.colors.accent[800]} />
      </span>
      <span aria-label="preview do botão de comentar">
        <FontAwesomeIcon icon={faCommentAlt} width="16px" height="16px" color={theme.colors.accent[800]} />
      </span>
      <span aria-label="preview do botão de compartilhar">
        <FontAwesomeIcon icon={faShare} width="16px" height="16px" color={theme.colors.accent[800]} />
      </span>
    </PostPreviewLinkedinActionsContainer>
  </PostPreviewLinkedinContainer>
);

export default memo(PostPreviewLinkedin);
