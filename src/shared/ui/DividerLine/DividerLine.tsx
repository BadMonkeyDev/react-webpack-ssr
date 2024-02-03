import cn from 'classnames';
import React from 'react';

export const DividerLine = ({ className } : {className?: string}) => (
  <div className={cn('border-b-2 border-solid border-gray-200', className)} />
);
