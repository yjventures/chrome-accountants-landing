import { ButtonHTMLAttributes, ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

const Button = ({ 
  variant = 'primary', 
  size = 'md', 
  className, 
  children, 
  ...props 
}: ButtonProps) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-lg font-semibold transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 hover:shadow-md';
  
  const variants = {
    primary: 'bg-ca-mango text-ca-blue hover:bg-opacity-90 focus:ring-ca-mango',
    secondary: 'bg-ca-blue text-white hover:bg-opacity-90 focus:ring-ca-blue',
    outline: 'border-2 border-ca-blue text-ca-blue hover:bg-ca-blue hover:text-white focus:ring-ca-blue'
  };
  
  const sizes = {
    sm: 'px-4 py-3 text-sm min-h-[44px] min-w-[44px]',
    md: 'px-6 py-3 sm:px-8 sm:py-4 text-sm sm:text-base min-h-[44px] min-w-[44px]',
    lg: 'px-8 py-4 sm:px-10 sm:py-5 text-base sm:text-lg min-h-[48px] min-w-[48px]'
  };
  
  return (
    <button
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
    </button>
  );
};

export default Button;