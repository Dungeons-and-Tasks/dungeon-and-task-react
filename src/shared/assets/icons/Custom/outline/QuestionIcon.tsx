import { FC } from 'react';
import { Icon, IIcon } from "@/shared/assets/icons/Custom";

import QuestionSvg from '@/shared/assets/icons/svg/outline/outline_question.svg';

export const QuestionIcon: FC<IIcon> = ({ className, alt, id }) => {
  return <Icon icon={QuestionSvg} className={className} alt={alt} id={id} />;
};
