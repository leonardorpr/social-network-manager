import styled from 'styled-components';
import { MediaQueries } from 'utils/mediaQueries';

export const PostPreviewLinkedinContainer = styled.article`
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

export const PostPreviewLinkedinAvatarContainer = styled.header`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 13px;
`;

export const PostPreviewLinkedinAvatarImage = styled.img`
  height: 40px;
  width: 40px;
  margin-right: 12px;
`;

export const PostPreviewLinkedinInformations = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PostPreviewLinkedinAvatarName = styled.h5`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[1000]};
`;

export const PostPreviewLinkedinPhoto = styled.img`
  width: 100%;
  height: 370px;
  margin-top: 14px;
`;

export const PostPreviewLinkedinActionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 6px 13px 9px 13px;
  border-top: 1px solid #bdbdbd;

  span {
    margin-right: 15px;
  }
`;

export const PostPreviewLinkedinDescription = styled.p`
  font-size: ${({ theme }) => theme.typography.size.normal};
  line-height: ${({ theme }) => theme.typography.lineHeight.normal};
  color: ${({ theme }) => theme.colors.accent[800]};
  padding: 0px 13px;
`;

export const PostPreviewLinkedinComments = styled.p`
  font-size: ${({ theme }) => theme.typography.size.small};
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  color: ${({ theme }) => theme.colors.accent[700]};
  font-weight: 400;
  padding: 3px 13px;
`;

export const PostPreviewLinkedinPublicationDate = styled.time`
  font-size: ${({ theme }) => theme.typography.size.small};
  font-weight: 400;
  line-height: ${({ theme }) => theme.typography.lineHeight.small};
  color: ${({ theme }) => theme.colors.accent[700]};
`;
