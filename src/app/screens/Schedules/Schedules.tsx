/* eslint-disable */

import React, { useState, useMemo, useCallback, useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { format, isAfter } from 'date-fns';
import { ptBR } from 'date-fns/locale';

import useSelector from 'core/hooks/useSelector';
import { fetchSchedulesRequest, fetchPostStatusRequest } from 'core/store/slices/schedules';

import { DataTable } from 'app/components';

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
} from './Schedules.styles';

const Schedules: React.FC = () => {
  const dispatch = useDispatch();

  const [statusFilter, setFilterStatus] = useState('');
  const [order, setOrder] = useState<'ascending' | 'descending'>('ascending');

  const schedules = useSelector((state) => state.schedules.schedules);
  const recentSchedules = useSelector((state) => state.schedules.recentSchedules);
  const status = useSelector((state) => state.schedules.status);

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
            DataComponent: () => <SchedulePreviewButton type="button">Preview</SchedulePreviewButton>,
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
    </SchedulesContainer>
  );
};

export default Schedules;
