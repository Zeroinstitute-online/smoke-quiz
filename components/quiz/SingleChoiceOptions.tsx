import React from 'react';

const SingleChoiceOptions: React.FC<SingleChoiceOptionsProps> = ({ 
    options, 
    selectedOptionId, 
    onOptionSelect 
  }) => {
    return (
      <>
        {options.map(option => (
          <button 
            key={option.id}
            onClick={() => onOptionSelect(option.id)}
            className={selectedOptionId === option.id ? 'selected' : ''}
          >
            {option.text}
          </button>
        ))}
      </>
    );
  };

export default SingleChoiceOptions;