import React, { memo, useState, useCallback } from 'react';

import { faSmile } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import TextAreaEmojiPicker from 'emoji-picker-react';

import theme from 'configs/theme';

import { TextAreaContainer, TextAreaEmojiPickerButton, TextAreaElement } from './TextArea.styles';

interface ITextAreaProps {
  value: string;
  placeholder?: string;
  onChangeText(event: React.ChangeEvent<HTMLTextAreaElement>): void;
  onSelectEmoji(emoji: any): void;
}

const groupNames = {
  smileys_people: 'Sorrisos e Pessoas',
  animals_nature: 'Animais e Natureza',
  food_drink: 'Comidas e Bebidas',
  travel_places: 'Viagem e Lugares',
  activities: 'Atividades',
  objects: 'Objetos',
  symbols: 'Símbolos',
  flags: 'Bandeiras',
  recently_used: 'Mais usados',
};

const TextArea: React.FC<ITextAreaProps> = ({ value, placeholder, onChangeText, onSelectEmoji }) => {
  const [showEmojiPicker, setShowEmojiPicker] = useState(false);

  const handleShowEmojiPicker = useCallback(
    () => setShowEmojiPicker((currentShowEmojiPicker) => !currentShowEmojiPicker),
    [],
  );

  return (
    <TextAreaContainer>
      <TextAreaEmojiPickerButton type="button" onClick={handleShowEmojiPicker}>
        <FontAwesomeIcon icon={faSmile} size="sm" color={theme.colors.accent[500]} />
      </TextAreaEmojiPickerButton>
      <TextAreaElement value={value} onChange={onChangeText} placeholder={placeholder} />
      {showEmojiPicker && (
        <TextAreaEmojiPicker
          groupNames={groupNames}
          onEmojiClick={(event, currentEmoji) => onSelectEmoji(currentEmoji.emoji)}
          disableAutoFocus
        />
      )}
    </TextAreaContainer>
  );
};

export default memo(TextArea);
