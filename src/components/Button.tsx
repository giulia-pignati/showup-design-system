import { ButtonHTMLAttributes, forwardRef } from 'react';

/**
 * Button
 *
 * Three variants, used deliberately:
 *
 * - primary:   Main CTA on a screen. Dark (ink) background. Use ONE per screen.
 *              "Confirm attendance", "Create event", "Sign in".
 *
 * - secondary: Supporting actions. Outlined, ink text. Use freely alongside primary.
 *              "Cancel", "View details", "Edit".
 *
 * - ghost:     Tertiary or inline actions. No border, just ink text.
 *              "Skip", "Maybe later", utility links.
 *
 * Note on the accent color: the accent (#D1F471) is NEVER used as a button
 * background. Buttons that represent quorum-confirmation moments use the
 * QuorumIndicator component instead, which is a status display, not an action.
 */

type ButtonVariant = 'primary' | 'secondary' | 'ghost';
type ButtonSize = 'sm' | 'md' | 'lg';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
}

const variantStyles: Record<ButtonVariant, string> = {
  primary:
    'bg-ink text-surface-raised hover:bg-ink-secondary active:bg-ink',
  secondary:
    'bg-surface-raised text-ink border border-border-strong hover:bg-surface-sunken',
  ghost:
    'bg-transparent text-ink hover:bg-surface-sunken',
};

const sizeStyles: Record<ButtonSize, string> = {
  sm: 'h-8  px-3 text-small',
  md: 'h-10 px-4 text-body',
  lg: 'h-12 px-5 text-lead',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ variant = 'primary', size = 'md', className = '', ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={`
          inline-flex items-center justify-center gap-2
          rounded font-medium
          transition-colors duration-DEFAULT
          focus:outline-none focus:shadow-focus
          disabled:opacity-40 disabled:cursor-not-allowed
          ${variantStyles[variant]}
          ${sizeStyles[size]}
          ${className}
        `}
        {...props}
      />
    );
  }
);

Button.displayName = 'Button';
