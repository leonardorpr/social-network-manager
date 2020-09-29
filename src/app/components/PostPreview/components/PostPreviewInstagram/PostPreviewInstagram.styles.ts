import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

export const PostPreviewInstagramContainer = styled.article`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 535px;
  background-color: ${({ theme }) => theme.colors.accent[100]};
  border: 1px solid #bdbdbd;
  border-radius: 4px;

  ${MediaQueries.BIGGER_THAN_SMALL} {
    width: 370px;
  }
`;

export const PostPreviewInstagramAvatarContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
`;

export const PostPreviewInstagramAvatarImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 12px;
`;

export const PostPreviewInstagramAvatarName = styled.h5`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[1000]};
`;

export const PostPreviewInstagramPhoto = styled.img`
  width: 100%;
  height: 370px;
  margin-top: 14px;
  margin-bottom: 9px;
`;

export const PostPreviewInstagramActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0px 13px;
  margin-bottom: 12px;

  div span {
    margin-right: 15px;
  }
`;

export const PostPreviewInstagramDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[800]};
  padding: 0px 13px;
`;
