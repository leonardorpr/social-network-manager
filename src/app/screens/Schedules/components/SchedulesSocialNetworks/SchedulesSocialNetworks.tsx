import React, { memo, useCallback } from 'react';

import { schedulesLinkedin, schedulesInstagram } from 'assets/images';

import { SocialNetwork } from 'core/enums/SocialNetwork';

import { SchedulesSocialNetworksContainer, SchedulesSocialNetworksImage } from './SchedulesSocialNetworks.styles';

const socialNetworksLogo: { [key: number]: string } = {
  [SocialNetwork.Instagram]: schedulesInstagram,
  [SocialNetwork.Linkedin]: schedulesLinkedin,
};

interface ISchedulesSocialNetworksProps {
  socialNetworks: number[];
}

const SchedulesSocialNetworks: React.FC<ISchedulesSocialNetworksProps> = ({ socialNetworks }) => {
  const renderSocialNetworksLogo = useCallback(() => {
    const mappedSocialNetworks = socialNetworks.map((socialNetwork) => (
      <SchedulesSocialNetworksImage
        key={socialNetwork}
        src={socialNetworksLogo[socialNetwork]}
        alt="Logo da rede social"
      />
    ));

    return mappedSocialNetworks;
  }, [socialNetworks]);

  return <SchedulesSocialNetworksContainer>{renderSocialNetworksLogo()}</SchedulesSocialNetworksContainer>;
};

export default memo(SchedulesSocialNetworks);
