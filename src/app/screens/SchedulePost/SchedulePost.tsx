import React, { useState, useCallback, useEffect, useRef, useMemo } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { faClock } from '@fortawesome/free-solid-svg-icons';
import { formatISO } from 'date-fns';
import { parseFullTimeDate } from 'utils/dates';

import useIsMobile from 'core/hooks/useIsMobile';
import useSelector from 'core/hooks/useSelector';
import { ISchedulePost } from 'core/interfaces/ISchedulePost';
import { socialNetworksRequest, setDraft } from 'core/store/slices/schedulePost';
import { setRecentSchedules } from 'core/store/slices/schedules';

import { TextArea, Uploader, SocialNetworksList, PostPreview, Modal } from 'app/components';
import { IModalHandles } from 'app/components/Modal/Modal';

import SchedulePostSuccessModal, {
  ISchedulePostSuccessModalHandles,
} from './components/SchedulePostSuccessModal/SchedulePostSuccessModal';
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

const SchedulePost: React.FC = () => {
  const isMobile = useIsMobile();
  const dispatch = useDispatch();
  const history = useHistory();
  const modalRef = useRef<IModalHandles>(null);
  const modalSuccessRef = useRef<ISchedulePostSuccessModalHandles>(null);

  const allSocialNetworks = useSelector((state) => state.schedulePost.socialNetworks);
  const draft = useSelector((state) => state.schedulePost.draft);

  const [schedule, setSchedule] = useState<ISchedulePost>({
    publicationDate: null,
    publicationTime: '',
    socialNetworks: [],
    text: '',
    media: '',
  });

  const socialNetworksSelected = useMemo(
    () => schedule.socialNetworks.find((socialNetwork) => socialNetwork.selected),
    [schedule],
  );
  const scheduleButtonIsDisable = useMemo(
    () => !schedule.publicationTime || !schedule.publicationDate || !socialNetworksSelected,
    [schedule, socialNetworksSelected],
  );

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
    [setScheduleField, schedule],
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

  const handleSaveDraft = useCallback(() => {
    dispatch(setDraft(schedule));
  }, [dispatch, schedule]);

  const handleCreateSchedule = useCallback(() => {
    const socialNetworkKey = schedule.socialNetworks
      .filter((socialNetwork) => socialNetwork.selected)
      .map((socialNetwork) => socialNetwork.id);

    const date = formatISO(schedule.publicationDate || new Date(), { representation: 'date' });
    const time = formatISO(parseFullTimeDate(schedule.publicationTime), { representation: 'time' });
    const publicationDate = `${date}T${time}`;

    const recentSchedule = {
      id: Math.floor(Math.random() * 10) + 1,
      socialNetworkKey,
      media: schedule.media,
      text: schedule.text,
      publicationDate,
      statusKey: 1,
    };

    dispatch(setRecentSchedules(recentSchedule));
    modalSuccessRef.current?.openModal();
  }, [dispatch, modalSuccessRef, schedule]);

  const handleCancelSchedule = useCallback(() => history.push('/'), [history]);

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

        <SchedulePostSuccessModal ref={modalSuccessRef} />
      </SchedulePostPage>

      <SchedulePostFooter>
        <SchedulePostButton
          label="Cancelar"
          element="button"
          variant="text"
          size={isMobile ? 'small' : 'large'}
          color="secondary"
          onClick={handleCancelSchedule}
        />
        <SchedulePostButton
          label={isMobile ? 'Rascunho' : 'Salvar rascunho'}
          element="button"
          variant="outlined"
          size={isMobile ? 'small' : 'large'}
          color="secondary"
          onClick={handleSaveDraft}
        />
        <SchedulePostButton
          label="Agendar"
          element="button"
          variant="solid"
          size={isMobile ? 'small' : 'large'}
          color="secondary"
          disabled={scheduleButtonIsDisable}
          onClick={handleCreateSchedule}
        />
      </SchedulePostFooter>
    </>
  );
};

export default SchedulePost;
