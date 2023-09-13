import React from 'react';
import SingleChoiceOptions from './SingleChoiceOptions';
import MultipleChoiceOptions from './MultipleChoiceOptions';
import RatingOptions from './RatingOptions';
import ImageChoiceOptions from './ImageChoiceOptions';

const QuestionComponent: React.FC<{ data: Question }> = ({ data }) => {

  if (data.type === 'single-choice') {
    return <SingleChoiceOptions 
      options={data.options} 
      onOptionSelect={() => { 
        console.log(''); 
      }} 
    />;

  } else if (data.type === 'multiple-choice') {
    return <MultipleChoiceOptions 
      options={data.options} 
      feedback={data.feedback} 
      onOptionSelect={() => { 
        console.log(''); 
      }} 
    />;

  } else if (data.type === 'rating') {
    return <RatingOptions 
      options={data.options}
      onOptionSelect={() => { 
        console.log(''); 
      }} 
    />;

  } else if (data.type === 'image-choice') {
    return <ImageChoiceOptions 
      options={data.options}
      onOptionSelect={() => { 
        console.log(''); 
      }} 
    />;

  } else {
    return null; // or some default rendering
  }
};

export default QuestionComponent;
