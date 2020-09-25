import React from 'react';

import { avatar } from 'assets/images';

import useIsMobile from 'core/hooks/useIsMobile';

import { AvatarContainer, AvatarPicture, AvatarLabel } from './Avatar.styles';

const Avatar: React.FC = () => {
  const isMobile = useIsMobile();

  return (
    <AvatarContainer>
      <picture>
        <AvatarPicture src={avatar} alt="Seu avatar de usuário" />
      </picture>
      {!isMobile && <AvatarLabel>Anselmo Carlos</AvatarLabel>}
    </AvatarContainer>
  );
};

export default Avatar;
