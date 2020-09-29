import React, { memo } from 'react';

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

import {
  SocialNetworksListContainer,
  SocialNetworksListItem,
  SocialNetworksListButton,
} from './SocialNetworksList.styles';

const SocialNetworksList: React.FC = () => (
  <SocialNetworksListContainer>
    <SocialNetworksListItem>
      <SocialNetworksListButton type="button">
        <FontAwesomeIcon icon={faInstagram} height="16px" width="16px" color={theme.colors.accent[900]} />
      </SocialNetworksListButton>
    </SocialNetworksListItem>

    <SocialNetworksListItem>
      <SocialNetworksListButton type="button">
        <FontAwesomeIcon icon={faLinkedinIn} height="16px" width="16px" color={theme.colors.accent[900]} />
      </SocialNetworksListButton>
    </SocialNetworksListItem>

    <SocialNetworksListItem>
      <SocialNetworksListButton type="button" disabled>
        <FontAwesomeIcon icon={faYoutube} height="16px" width="16px" color={theme.colors.accent[900]} />
      </SocialNetworksListButton>
    </SocialNetworksListItem>

    <SocialNetworksListItem>
      <SocialNetworksListButton type="button" disabled>
        <FontAwesomeIcon icon={faPinterest} height="16px" width="16px" color={theme.colors.accent[900]} />
      </SocialNetworksListButton>
    </SocialNetworksListItem>

    <SocialNetworksListItem>
      <SocialNetworksListButton type="button" disabled>
        <FontAwesomeIcon icon={faTwitter} height="16px" width="16px" color={theme.colors.accent[900]} />
      </SocialNetworksListButton>
    </SocialNetworksListItem>

    <SocialNetworksListItem>
      <SocialNetworksListButton type="button" disabled>
        <FontAwesomeIcon icon={faFacebookF} size="1x" color={theme.colors.accent[900]} />
      </SocialNetworksListButton>
    </SocialNetworksListItem>
  </SocialNetworksListContainer>
);

export default memo(SocialNetworksList);
