import { InputHTMLAttributes, ReactNode } from 'react';
import { Slot } from "@radix-ui/react-slot";
import { clsx } from 'clsx';


export interface ITextInputProps extends InputHTMLAttributes<HTMLInputElement> {
};

export interface ITextInputRootProps {
  children: ReactNode;
};

export function TextInputRoot(props: ITextInputRootProps) {
  return (<div className={clsx("flex items-center gap-3 h-12 py-4 px-3 rounded bg-gray-800 w-full focus-within:ring-2 ring-cyan-300", {})}>
    {props.children}
  </div>);
};

interface TextInputIcon {
  children: ReactNode;
};

export function TextInputIcon({ children }: TextInputIcon) {
  return (<Slot className='w-6 h-6 text-gray-400'>
    {children}
  </Slot>);
};


export interface ITextInputInputProps extends InputHTMLAttributes<HTMLInputElement> { };

export function TextInputInput(props: ITextInputInputProps) {
  return (<input className='bg-transparent flex-1 text-gray-100 text-xs placeholder:text-gray-400 outline-none '    {...props} />);
};

export const TextInput = {
  Root: TextInputRoot,
  Input: TextInputInput,
  InputIcon: TextInputIcon
};