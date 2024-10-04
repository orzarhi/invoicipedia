'use client';

import { useFormStatus } from 'react-dom';
import { Button } from './ui/button';
import { cn } from '@/lib/utils';

interface SubmitButtonProps {
  className?: string;
  variant?: 'default' | 'outline' | 'ghost' | 'link' | 'secondary' | 'destructive';
}

export const SubmitButton = ({ className, variant }: SubmitButtonProps) => {
  const { pending } = useFormStatus();
  console.log(' pending:', pending);
  return (
    <Button type="submit" className={cn(className)} variant={variant} disabled={pending}>
      {pending ? 'Submitting...' : 'Submit'}
    </Button>
  );
};
