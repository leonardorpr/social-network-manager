import React, { useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { faClock } from '@fortawesome/free-solid-svg-icons';

import useIsMobile from 'core/hooks/useIsMobile';
import { socialNetworksRequest } from 'core/store/slices/schedulePost';

import { TextArea, Uploader, SocialNetworksList, PostPreview /* Modal */ } from 'app/components';

// import SchedulePostSuccessModal from './components/SchedulePostSuccessModal';
import {
  SchedulePostPage,
  SchedulePostForm,
  SchedulePostGrid,
  SchedulePostPublicationDateContainer,
  SchedulePostCard,
  SchedulePostFooter,
  SchedulePostButton,
  SchedulePostViewPostButton,
  SchedulePostDatePicker,
  SchedulePostTime,
  // SchedulePostContainerPostPreview,
} from './SchedulePost.styles';
/* <SchedulePostSuccessModal /> */

/* <Modal title="Visualização do post">
          <SchedulePostContainerPostPreview>
            <PostPreview />
          </SchedulePostContainerPostPreview>
        </Modal> */
const SchedulePost: React.FC = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();

  const fetchSocialNetworks = useCallback(() => {
    dispatch(socialNetworksRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchSocialNetworks();
  }, [fetchSocialNetworks]);

  return (
    <>
      <SchedulePostPage>
        <SchedulePostForm>
          <SchedulePostGrid>
            <SchedulePostCard title="Redes sociais">
              <SocialNetworksList />
            </SchedulePostCard>

            <SchedulePostCard title="Data de publicação">
              <SchedulePostPublicationDateContainer>
                <SchedulePostDatePicker date={null} onSelectDate={() => null} />
                <SchedulePostTime type="time" value="" onChange={() => null} icon={faClock} />
              </SchedulePostPublicationDateContainer>
            </SchedulePostCard>

            <SchedulePostCard title="Texto do post">
              <TextArea
                value=""
                placeholder="Digite o texto do post"
                onChangeText={() => null}
                onSelectEmoji={() => null}
              />
            </SchedulePostCard>

            <SchedulePostCard title="Upload de imagem">
              <Uploader onUpload={() => null} />
            </SchedulePostCard>

            {isMobile && (
              <SchedulePostViewPostButton
                label="Visualizar post"
                element="button"
                variant="solid"
                color="primary"
                size="normal"
              />
            )}
          </SchedulePostGrid>

          {!isMobile && (
            <SchedulePostGrid>
              <SchedulePostCard id="post-preview" title="Visualizar post">
                <PostPreview />
              </SchedulePostCard>
            </SchedulePostGrid>
          )}
        </SchedulePostForm>
      </SchedulePostPage>

      <SchedulePostFooter>
        <SchedulePostButton
          label="Cancelar"
          element="button"
          variant="text"
          size={isMobile ? 'small' : 'large'}
          color="secondary"
        />
        <SchedulePostButton
          label={isMobile ? 'Rascunho' : 'Salvar rascunho'}
          element="button"
          variant="outlined"
          size={isMobile ? 'small' : 'large'}
          color="secondary"
        />
        <SchedulePostButton
          label="Agendar"
          element="button"
          variant="solid"
          size={isMobile ? 'small' : 'large'}
          color="secondary"
        />
      </SchedulePostFooter>
    </>
  );
};

export default SchedulePost;
