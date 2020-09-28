import React, { memo, useCallback } from 'react';
import Dropzone from 'react-dropzone';

import { faCloudUploadAlt, faCheckCircle, faExclamationCircle } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import useIsMobile from 'core/hooks/useIsMobile';

import { UploaderContainer, UploaderMessage, UploaderButton, messageColors } from './Uploader.styles';

interface IUploaderProps {
  onUpload(data: any): void;
}

const Uploader: React.FC<IUploaderProps> = ({ onUpload }) => {
  const isMobile = useIsMobile();

  const renderDragMessageDesktop = useCallback((isDragActive, isDragReject) => {
    if (!isDragActive) {
      return (
        <UploaderMessage type="default">Arraste e solte uma imagem aqui ou clique no botão abaixo</UploaderMessage>
      );
    }

    if (isDragReject) {
      return <UploaderMessage type="error">Arquivo não suportado</UploaderMessage>;
    }

    return <UploaderMessage type="success">Solte o arquivo aqui</UploaderMessage>;
  }, []);

  const renderIconMessageDesktop = useCallback((isDragActive, isDragReject) => {
    if (!isDragActive) {
      return <FontAwesomeIcon icon={faCloudUploadAlt} size="2x" color={messageColors.default} />;
    }

    if (isDragReject) {
      return <FontAwesomeIcon icon={faExclamationCircle} size="2x" color={messageColors.error} />;
    }

    return <FontAwesomeIcon icon={faCheckCircle} size="2x" color={messageColors.success} />;
  }, []);

  return (
    <Dropzone accept="image/*" onDropAccepted={onUpload}>
      {({ getRootProps, getInputProps, isDragActive, isDragReject }) => (
        <UploaderContainer {...getRootProps()} isDragActive={isDragActive} isDragReject={isDragReject}>
          <input {...getInputProps()} />
          {!isMobile && renderIconMessageDesktop(isDragActive, isDragReject)}
          {!isMobile && renderDragMessageDesktop(isDragActive, isDragReject)}
          <UploaderButton
            label="Pesquisar imagens"
            element="button"
            variant="outlined"
            size="normal"
            color="secondary"
          />
        </UploaderContainer>
      )}
    </Dropzone>
  );
};

export default memo(Uploader);
