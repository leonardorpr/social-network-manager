import React, { memo } from 'react';

import { emojiLike } from 'assets/images';

import {
  SchedulePostSuccessModalImage,
  SchedulePostSuccessModalText,
  SchedulePostSuccessModalButton,
} from './SchedulePostSuccessModal.styles';

const SchedulePostSuccessModal: React.FC = () => (
  <>
    <SchedulePostSuccessModalImage src={emojiLike} alt="emoji de curtir" />
    <SchedulePostSuccessModalText>Agendado com sucesso!</SchedulePostSuccessModalText>
    <SchedulePostSuccessModalButton
      label="Ok"
      element="link"
      to="/agendamentos"
      variant="solid"
      size="large"
      color="secondary"
    />
  </>
);

export default memo(SchedulePostSuccessModal);
