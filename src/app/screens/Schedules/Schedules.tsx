/* eslint-disable */

import React, { useState, useMemo, useCallback, useEffect, useRef } from 'react';
import { useDispatch } from 'react-redux';

import { format, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useSelector from 'core/hooks/useSelector';
import { fetchSchedulesRequest, fetchPostStatusRequest } from 'core/store/slices/schedules';

import { DataTable, Modal, PostPreview } from 'app/components';

import SchedulesFilterButton from './components/SchedulesFilterButton';
import SchedulesSocialNetworks from './components/SchedulesSocialNetworks';
import SchedulesStatus from './components/SchedulesStatus';
import {
  SchedulesContainer,
  SchedulesTitleContainer,
  SchedulesTitle,
  SchedulesSelectStatus,
  SchedulesPostImage,
  ScheduleDate,
  SchedulePreviewButton,
  SchedulesContainerPostPreview,
} from './Schedules.styles';
import useIsMobile from 'core/hooks/useIsMobile';
import { IModalHandles } from 'app/components/Modal/Modal';
import { ISchedule } from 'core/interfaces/ISchedule';

const Schedules: React.FC = () => {
  const dispatch = useDispatch();
  const isMobile = useIsMobile();
  const modalRef = useRef<IModalHandles>(null);

  const [schedulePreview, setSchedulePreview] = useState<ISchedule>({
    id: 0,
    statusKey: 0,
    publicationDate: '',
    text: '',
    media: '',
    socialNetworkKey: [],
  });
  const [statusFilter, setFilterStatus] = useState('');
  const [order, setOrder] = useState<'ascending' | 'descending'>('ascending');

  const schedules = useSelector((state) => state.schedules.schedules);
  const recentSchedules = useSelector((state) => state.schedules.recentSchedules);
  const status = useSelector((state) => state.schedules.status);

  const socialNetworksParser = useMemo(
    () => ({
      ...schedulePreview,
      socialNetworkKey: schedulePreview.socialNetworkKey.map((socialNetwork) => ({
        id: socialNetwork,
        selected: true,
      })),
    }),
    [schedulePreview],
  );

  const allSchedules = useMemo(() => {
    const currentSchedules = [...recentSchedules, ...schedules];

    if (order === 'ascending') {
      return currentSchedules.sort((prevSchedule, nextSchedule) =>
        isAfter(new Date(prevSchedule.publicationDate), new Date(nextSchedule.publicationDate)) ? -1 : 1,
      );
    }

    return currentSchedules.sort((prevSchedule, nextSchedule) =>
      !isAfter(new Date(prevSchedule.publicationDate), new Date(nextSchedule.publicationDate)) ? -1 : 1,
    );
  }, [recentSchedules, schedules, order]);

  const filteredSchedules = useMemo(() => {
    if (!statusFilter) {
      return allSchedules;
    }

    const filterSchedules = allSchedules.filter((schedule) => schedule.statusKey === Number(statusFilter));

    return filterSchedules;
  }, [statusFilter, allSchedules]);

  const statusOptions = useMemo(() => {
    const mappedStatus = status.map((currentStatus) => ({ label: currentStatus.name, value: currentStatus.id }));
    const blankOption = { label: 'Todos', value: '' };

    return [blankOption, ...mappedStatus];
  }, [status]);

  const handleSetSchedulePreview = useCallback(
    (schedule: ISchedule) => {
      setSchedulePreview(schedule);

      if (isMobile) {
        modalRef.current?.openModal();
      }
    },
    [setSchedulePreview, isMobile],
  );

  const handleSetOrder = useCallback(() => {
    setOrder((currentOrder) => (currentOrder === 'ascending' ? 'descending' : 'ascending'));
  }, [setOrder]);

  const handleSetStatusFilter = useCallback(
    (value: string) => {
      setFilterStatus(value);
    },
    [statusFilter],
  );

  const fetchSchedules = useCallback(() => {
    dispatch(fetchSchedulesRequest());
  }, [dispatch]);

  const fetchScheduleStatus = useCallback(() => {
    dispatch(fetchPostStatusRequest());
  }, [dispatch]);

  useEffect(() => {
    fetchSchedules();
  }, [fetchSchedules]);

  useEffect(() => {
    fetchScheduleStatus();
  }, [fetchScheduleStatus]);

  return (
    <SchedulesContainer>
      <SchedulesTitleContainer>
        <SchedulesTitle>Listagem de agendamento</SchedulesTitle>
        <SchedulesSelectStatus
          value={statusFilter}
          onSelectChange={(event) => handleSetStatusFilter(event.currentTarget.value)}
          options={statusOptions}
        />
      </SchedulesTitleContainer>
      <DataTable
        config={[
          {
            key: 'socialNetworkKey',
            name: 'Redes sociais',
            centralized: true,
            DataComponent: (row: any) => <SchedulesSocialNetworks socialNetworks={row.socialNetworkKey} />,
          },
          {
            key: 'media',
            name: 'Mídia',
            centralized: true,
            DataComponent: (row: any) => <SchedulesPostImage src={row.media} alt="Imagem da postagem" />,
          },
          { key: 'text', name: 'Texto', centralized: false },
          {
            key: 'publicationDate',
            name: 'Data',
            centralized: false,
            HeaderComponent: () => (
              <SchedulesFilterButton
                description="Data"
                isAscendingOrder={order === 'ascending'}
                onClick={handleSetOrder}
              />
            ),
            DataComponent: (row: any) => (
              <ScheduleDate>
                {format(new Date(row.publicationDate), "dd/MM/yyyy 'às' HH:mm", { locale: ptBR })}h
              </ScheduleDate>
            ),
          },
          {
            key: 'actions',
            name: 'Ações',
            centralized: true,
            DataComponent: (row: any) => (
              <SchedulePreviewButton type="button" onClick={() => handleSetSchedulePreview(row)}>
                Preview
              </SchedulePreviewButton>
            ),
          },
          {
            key: 'statusKey',
            name: 'Status',
            centralized: false,
            DataComponent: (row: any) => <SchedulesStatus status={row.statusKey} />,
          },
        ]}
        rows={filteredSchedules}
      />

      {isMobile && (
        <Modal ref={modalRef} title="Visualização do post">
          <SchedulesContainerPostPreview>
            <PostPreview
              socialNetworks={socialNetworksParser.socialNetworkKey}
              description={socialNetworksParser.text}
              image={socialNetworksParser.media}
            />
          </SchedulesContainerPostPreview>
        </Modal>
      )}
    </SchedulesContainer>
  );
};

export default Schedules;
