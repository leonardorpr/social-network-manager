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

export const SocialNetworksListButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 33px;
  width: 33px;
  border-radius: 16px;
  border: ${({ theme }) => `1px solid ${theme.colors.accent[500]}`};
  background-color: ${({ theme }) => theme.colors.accent[100]};
  transition: all 0.2s ease 0s;

  &:hover {
    background-color: #fff3e0;
    border-color: #ef9f2e;

    svg {
      transition: color 0.2s ease 0s;
      color: #ef9f2e;
    }
  }

  &:disabled {
    background-color: ${({ theme }) => theme.colors.accent[400]};
    border-color: ${({ theme }) => theme.colors.accent[500]};

    svg {
      color: #989898;
    }
  }
`;
