import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';
import { cn } from '@/lib/utils';

const buttonVariants = cva('inline-flex items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition', {
  variants: {
    variant: {
      default: 'bg-forest text-white hover:bg-forest/90',
      outline: 'border border-forest text-forest hover:bg-forest hover:text-white',
      gold: 'bg-gold text-forest hover:bg-gold/90'
    }
  },
  defaultVariants: { variant: 'default' }
});

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement>, VariantProps<typeof buttonVariants> {}

export function Button({ className, variant, ...props }: ButtonProps) {
  return <button className={cn(buttonVariants({ variant }), className)} {...props} />;
}
