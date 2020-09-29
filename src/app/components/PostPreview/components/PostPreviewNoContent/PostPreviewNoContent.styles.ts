import styled from 'styled-components';

export const PostPreviewNoContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export const PostPreviewNoContentDescription = styled.h4`
  font-size: ${({ theme }) => theme.typography.size.large};
  line-height: ${({ theme }) => theme.typography.lineHeight.large};
  color: ${({ theme }) => theme.colors.accent[700]};
  text-align: center;
  width: 380px;
  margin-bottom: 20px;
`;

export const PostPreviewNoContentImage = styled.img`
  width: 300px;
  height: 370px;
`;
