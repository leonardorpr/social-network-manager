import React, { useState, useCallback, useImperativeHandle, forwardRef } from 'react';

import { emojiLike } from 'assets/images';

import {
  SchedulePostSuccessModalContainer,
  SchedulePostSuccessModalContent,
  SchedulePostSuccessModalImage,
  SchedulePostSuccessModalText,
  SchedulePostSuccessModalButton,
} from './SchedulePostSuccessModal.styles';

export interface ISchedulePostSuccessModalHandles {
  openModal(): void;
}

const SchedulePostSuccessModal: React.ForwardRefRenderFunction<ISchedulePostSuccessModalHandles> = (props, ref) => {
  const [visible, setVisible] = useState(false);

  const handleVisibleModal = useCallback(
    (isVisible: boolean) => {
      setVisible(isVisible);
    },
    [setVisible],
  );

  useImperativeHandle(ref, () => ({ openModal: () => handleVisibleModal(true) }));

  if (!visible) {
    return null;
  }

  return (
    <SchedulePostSuccessModalContainer open={visible}>
      <SchedulePostSuccessModalContent>
        <SchedulePostSuccessModalImage src={emojiLike} alt="emoji de curtir" />
        <SchedulePostSuccessModalText>Agendado com sucesso!</SchedulePostSuccessModalText>
        <SchedulePostSuccessModalButton
          label="Ok"
          element="link"
          to="/agendamentos"
          variant="solid"
          size="large"
          color="secondary"
          onClick={() => handleVisibleModal(false)}
        />
      </SchedulePostSuccessModalContent>
    </SchedulePostSuccessModalContainer>
  );
};

export default forwardRef(SchedulePostSuccessModal);
