import React, { memo, useCallback } from 'react';

import {
  faInstagram,
  faLinkedinIn,
  faYoutube,
  faPinterest,
  faTwitter,
  faFacebookF,
} from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import theme from 'configs/theme';

import { SocialNetwork } from 'core/enums/SocialNetwork';
import { ISchedulePostSocialNetwork } from 'core/interfaces/ISchedulePost';

import {
  SocialNetworksListContainer,
  SocialNetworksListItem,
  SocialNetworksListButton,
} from './SocialNetworksList.styles';

const socialNetworkIcons: { [key: number]: any } = {
  [SocialNetwork.Facebook]: faFacebookF,
  [SocialNetwork.Linkedin]: faLinkedinIn,
  [SocialNetwork.Instagram]: faInstagram,
  [SocialNetwork.Youtube]: faYoutube,
  [SocialNetwork.Pinterest]: faPinterest,
  [SocialNetwork.Twitter]: faTwitter,
};

interface ISocialNetworksListProps {
  socialNetworks: ISchedulePostSocialNetwork[];
  onSocialNetworkClick(id: number, value: boolean): void;
}

const SocialNetworksList: React.FC<ISocialNetworksListProps> = ({ socialNetworks, onSocialNetworkClick }) => {
  const renderSocialNetworks = useCallback(() => {
    const mappedSocialNetworks = socialNetworks.map((socialNetwork) => (
      <SocialNetworksListItem key={socialNetwork.id}>
        <SocialNetworksListButton
          selected={socialNetwork.selected}
          type="button"
          disabled={socialNetwork.status === 'disabled'}
          onClick={() => onSocialNetworkClick(socialNetwork.id, !socialNetwork.selected)}
        >
          <FontAwesomeIcon
            icon={socialNetworkIcons[socialNetwork.id]}
            height="16px"
            width="16px"
            color={theme.colors.accent[900]}
          />
        </SocialNetworksListButton>
      </SocialNetworksListItem>
    ));

    return mappedSocialNetworks;
  }, [socialNetworks, onSocialNetworkClick]);

  return <SocialNetworksListContainer>{renderSocialNetworks()}</SocialNetworksListContainer>;
};

export default memo(SocialNetworksList);
