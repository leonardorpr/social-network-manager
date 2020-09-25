import styled from 'styled-components';

export const AvatarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const AvatarPicture = styled.img`
  width: 45px;
  height: 45px;
`;

export const AvatarLabel = styled.span`
  font-size: 14px;
  line-height: 21px;
  color: ${({ theme }) => theme.colors.accent[1000]};
  margin-left: 8px;
`;
