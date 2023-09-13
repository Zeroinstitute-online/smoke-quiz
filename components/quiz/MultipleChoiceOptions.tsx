import React from 'react';

const MultipleChoiceOptions: React.FC<MultipleChoiceOptionsProps> = ({ 
    options, 
    selectedOptionIds, 
    onOptionSelect 
  }) => {
    return (
      <>
        {options.map(option => (
          <button 
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className={(selectedOptionIds || []).includes(option.id) ? 'selected' : ''}
          >
            {option.text}
          </button>
        ))}
      </>
    );
  };

export default MultipleChoiceOptions;