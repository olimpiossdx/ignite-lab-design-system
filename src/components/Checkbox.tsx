import { ReactNode } from 'react';
import { Check } from 'phosphor-react';
import * as CheckboxPrimitive from "@radix-ui/react-checkbox";
import { clsx } from 'clsx';

export interface ICheckboxProps {
  children: ReactNode;
};

export function Checkbox({ children }: ICheckboxProps) {

  return (<CheckboxPrimitive.Checkbox className={clsx("w-6 h-6 p-[2px] bg-gray-800 rounded", {})} >
    <CheckboxPrimitive.Indicator asChild>
      <Check weight='bold' className='h-5 w-5 text-cyan-500' />
    </CheckboxPrimitive.Indicator>
  </CheckboxPrimitive.Checkbox>);
};
