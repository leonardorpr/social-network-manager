import React, { memo } from 'react';

import { attention } from 'assets/images';

import {
  SchedulePostAttentionModalImage,
  SchedulePostAttentionModalText,
  SchedulePostAttentionModalTextNormal,
  SchedulePostAttentionModalButtonsContainer,
  SchedulePostAttentionModalButton,
} from './SchedulePostAttentionModal.styles';

interface ISchedulePostAttentionModalProps {
  onCancelClick(): void;
}

const SchedulePostAttentionModal: React.FC<ISchedulePostAttentionModalProps> = ({ onCancelClick }) => (
  <>
    <SchedulePostAttentionModalImage src={attention} alt="ícone de atenção" />
    <SchedulePostAttentionModalText>Atenção</SchedulePostAttentionModalText>
    <SchedulePostAttentionModalTextNormal>
      Ao prosseguir irá perder o conteúdo inserido, deseja continuar?
    </SchedulePostAttentionModalTextNormal>
    <SchedulePostAttentionModalButtonsContainer>
      <SchedulePostAttentionModalButton
        label="Fechar"
        element="button"
        variant="outlined"
        size="large"
        color="secondary"
        onClick={onCancelClick}
      />
      <SchedulePostAttentionModalButton
        label="Sim, prosseguir"
        element="link"
        to="/"
        variant="solid"
        size="large"
        color="secondary"
      />
    </SchedulePostAttentionModalButtonsContainer>
  </>
);

export default memo(SchedulePostAttentionModal);
