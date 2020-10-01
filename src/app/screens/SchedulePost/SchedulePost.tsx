import React, { useState, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { faClock } from '@fortawesome/free-solid-svg-icons';

import useIsMobile from 'core/hooks/useIsMobile';
import useSelector from 'core/hooks/useSelector';
import { ISchedulePost } from 'core/interfaces/ISchedulePost';
import { socialNetworksRequest } from 'core/store/slices/schedulePost';

import { TextArea, Uploader, SocialNetworksList, PostPreview, Modal } from 'app/components';
import { IModalHandles } from 'app/components/Modal/Modal';

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
  SchedulePostContainerPostPreview,
} from './SchedulePost.styles';
/* <SchedulePostSuccessModal /> */

const SchedulePost: React.FC = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const modalRef = useRef<IModalHandles>(null);

  const allSocialNetworks = useSelector((state) => state.schedulePost.socialNetworks);
  const draft = useSelector((state) => state.schedulePost.draft);

  const [schedule, setSchedule] = useState<ISchedulePost>({
    publicationDate: null,
    publicationTime: '',
    socialNetworks: [],
    text: '',
    media: '',
  });

  const setScheduleField = useCallback(
    (field: string, value: any) => {
      setSchedule((prevState) => ({ ...prevState, [field]: value }));
    },
    [setSchedule],
  );

  const setScheduleSocialNetworksField = useCallback(
    (id: number, value: boolean) => {
      const mappedSocialNetworksSchedule = schedule.socialNetworks.map((socialNetwork) => {
        if (socialNetwork.id === id) {
          return { ...socialNetwork, selected: value };
        }

        return socialNetwork;
      });

      setScheduleField('socialNetworks', mappedSocialNetworksSchedule);
    },
    [setSchedule, schedule],
  );

  const setScheduleAllFields = useCallback(
    (values: ISchedulePost) => {
      setSchedule((prevState) => ({ ...prevState, ...values }));
    },
    [setSchedule],
  );

  const fetchSocialNetworks = useCallback(() => {
    dispatch(socialNetworksRequest());
  }, [dispatch]);

  const openModal = useCallback(() => modalRef.current?.openModal(), [modalRef]);

  useEffect(() => {
    fetchSocialNetworks();
  }, [fetchSocialNetworks]);

  useEffect(() => {
    if (draft.publicationDate || draft.publicationTime || draft.media || draft.text || draft.socialNetworks.length) {
      setScheduleAllFields(draft);
    }
  }, [setScheduleAllFields, draft]);

  useEffect(() => {
    if (allSocialNetworks.length) {
      const mappedAllSocialNetworks = allSocialNetworks.map((socialNetwork) => ({
        ...socialNetwork,
        selected: false,
      }));

      setScheduleField('socialNetworks', mappedAllSocialNetworks);
    }
  }, [allSocialNetworks, setScheduleField]);

  return (
    <>
      <SchedulePostPage>
        <SchedulePostForm>
          <SchedulePostGrid>
            <SchedulePostCard title="Redes sociais">
              <SocialNetworksList
                socialNetworks={schedule.socialNetworks}
                onSocialNetworkClick={(id, value) => setScheduleSocialNetworksField(id, value)}
              />
            </SchedulePostCard>

            <SchedulePostCard title="Data de publicação">
              <SchedulePostPublicationDateContainer>
                <SchedulePostDatePicker
                  date={schedule.publicationDate}
                  onSelectDate={(date) => setScheduleField('publicationDate', date)}
                />
                <SchedulePostTime
                  type="time"
                  value={schedule.publicationTime}
                  onChange={(event) => setScheduleField('publicationTime', event.currentTarget.value)}
                  icon={faClock}
                />
              </SchedulePostPublicationDateContainer>
            </SchedulePostCard>

            <SchedulePostCard title="Texto do post">
              <TextArea
                value={schedule.text}
                placeholder="Digite o texto do post"
                onChangeText={(event) => setScheduleField('text', event.target.value)}
                onSelectEmoji={(emoji) => setScheduleField('text', schedule.text.concat(emoji))}
              />
            </SchedulePostCard>

            <SchedulePostCard title="Upload de imagem">
              <Uploader onUpload={([file]) => setScheduleField('media', URL.createObjectURL(file))} />
            </SchedulePostCard>

            {isMobile && (
              <SchedulePostViewPostButton
                label="Visualizar post"
                element="button"
                variant="solid"
                color="primary"
                size="normal"
                onClick={() => openModal()}
              />
            )}
          </SchedulePostGrid>

          {!isMobile && (
            <SchedulePostGrid>
              <SchedulePostCard id="post-preview" title="Visualizar post">
                <PostPreview
                  socialNetworks={schedule.socialNetworks}
                  description={schedule.text}
                  image={schedule.media}
                />
              </SchedulePostCard>
            </SchedulePostGrid>
          )}
        </SchedulePostForm>

        {isMobile && (
          <Modal ref={modalRef} title="Visualização do post">
            <SchedulePostContainerPostPreview>
              <PostPreview
                socialNetworks={schedule.socialNetworks}
                description={schedule.text}
                image={schedule.media}
              />
            </SchedulePostContainerPostPreview>
          </Modal>
        )}
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
