import { InputHTMLAttributes, forwardRef } from 'react';

/**
 * Input
 *
 * Standard text input with an optional label and helper/error text.
 * Stack: <label> above, <input> below, <helper text> below the input.
 * 
 * Focus uses the accent-tinted shadow (shadow-focus) to give a soft glow
 * — this is one of the few places the accent color appears outside of
 * confirmation moments, and it's intentional: the focus ring signals
 * "active engagement", which thematically aligns with quorum building.
 */

interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  helperText?: string;
  errorText?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, helperText, errorText, id, className = '', ...props }, ref) => {
    const hasError = Boolean(errorText);
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div className="flex flex-col gap-2">
        {label && (
          <label
            htmlFor={inputId}
            className="text-small font-medium text-ink"
          >
            {label}
          </label>
        )}
        <input
          ref={ref}
          id={inputId}
          className={`
            h-11 px-3
            bg-surface-raised
            border ${hasError ? 'border-danger' : 'border-border-strong'}
            rounded text-body text-ink
            placeholder:text-ink-muted
            focus:outline-none focus:shadow-focus focus:border-ink
            transition-shadow duration-DEFAULT
            disabled:bg-surface-sunken disabled:text-ink-muted disabled:cursor-not-allowed
            ${className}
          `}
          {...props}
        />
        {(helperText || errorText) && (
          <p className={`text-caption ${hasError ? 'text-danger' : 'text-ink-tertiary'}`}>
            {errorText || helperText}
          </p>
        )}
      </div>
    );
  }
);

Input.displayName = 'Input';
