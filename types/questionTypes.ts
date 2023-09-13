/*
  Option types
*/
interface BaseOption {
  id: string;
  text: string;
}

interface SingleChoiceOption extends BaseOption {
  icon: string;
  feedback: string;
}

interface MultipleChoiceOption extends BaseOption {
  icon: string;
}

interface RatingOption extends BaseOption {
  text: '';
  value: number;
  emoji: string;
  feedback: string;
}

interface ImageChoiceOption extends BaseOption {
  image: string;
  feedback: string;
}

/*
  Question types
*/
interface BaseQuestion {
  id: string;
  type: string;
  question: string;
}

interface SingleChoiceQuestion extends BaseQuestion {
  type: 'single-choice';
  options: SingleChoiceOption[];
}

interface MultipleChoiceFeedback {
  range: [number, number];
  text: string;
}

interface MultipleChoiceQuestion extends BaseQuestion {
  type: 'multiple-choice';
  options: MultipleChoiceOption[];
  feedback: MultipleChoiceFeedback[];
}

interface RatingQuestion extends BaseQuestion {
  type: 'rating';
  options: RatingOption[];
}

interface ImageChoiceQuestion extends BaseQuestion {
  type: 'image-choice';
  options: ImageChoiceOption[];
}

type Question = SingleChoiceQuestion | MultipleChoiceQuestion | RatingQuestion | ImageChoiceQuestion;

/*
  Question properties
*/

interface BaseOptionsProps {
  onOptionSelect: (optionId: string | string[] | number) => void;
}

interface SingleChoiceOptionsProps extends BaseOptionsProps {
  options: SingleChoiceOption[];
  selectedOptionId?: string; // ID of the selected option
}

interface MultipleChoiceOptionsProps extends BaseOptionsProps {
  options: MultipleChoiceOption[];
  feedback: MultipleChoiceFeedback[];
  selectedOptionIds?: string[]; // IDs of the selected options
}

interface RatingOptionsProps extends BaseOptionsProps {
  options: RatingOption[];
  selectedOptionId?: string; // Selected rating value
}

interface ImageChoiceOptionsProps extends BaseOptionsProps {
  options: ImageChoiceOption[];
  selectedOptionId?: string; // ID of the selected option
}

type OptionsProps = SingleChoiceOptionsProps | MultipleChoiceOptionsProps | RatingOptionsProps | ImageChoiceOptionsProps;
