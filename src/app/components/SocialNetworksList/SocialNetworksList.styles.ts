/* eslint-disable */

import styled from 'styled-components';

export const SocialNetworksListContainer = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const SocialNetworksListItem = styled.li`
  &:not(:last-child) {
    margin-right: 15px;
  }
`;

export const SocialNetworksListButton = styled.button<{ selected: boolean }>`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 33px;
  border-radius: 16px;
  border: ${({ theme, selected }) => `1px solid ${selected ? '#ef9f2e' : theme.colors.accent[500]}`};
  background: ${({ theme, selected }) =>
    selected ? 'linear-gradient(135deg, #ef9f2e 25%, #e02b4b 105.56%)' : theme.colors.accent[100]};
  transition: all 0.2s ease 0s;

  svg {
    transition: color 0.2s ease 0s;
    color: ${({ theme, selected }) => (selected ? theme.colors.accent[100] : theme.colors.accent[900])};
  }

  &:hover {
    background: ${({ selected }) => (selected ? 'linear-gradient(135deg, #ef9f2e 25%, #e02b4b 105.56%)' : '#fff3e0')};
    border-color: #ef9f2e;

    svg {
      transition: color 0.2s ease 0s;
      color: ${({ theme, selected }) => (selected ? theme.colors.accent[100] : '#ef9f2e')};
    }
  }

  &:disabled {
    background: ${({ theme }) => theme.colors.accent[400]};
    border-color: ${({ theme }) => theme.colors.accent[500]};

    svg {
      color: #989898;
    }
  }
`;
