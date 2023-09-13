import React from 'react';

const RatingOptions: React.FC<RatingOptionsProps> = ({ 
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

export default RatingOptions;