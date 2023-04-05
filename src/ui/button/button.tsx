import clsx from 'clsx';

export type ButtonProps = {
  label: string;
  variant?: 'outlined' | 'filled';
  size?: 'medium' | 'large';
  disabled?: boolean;
  fullWidth?: boolean;
  onClick?: () => void;
};

const classesByVariant = {
  outlined: 'bg-transparent text-brand',
  filled: 'bg-brand text-white'
};

const classesBySize = {
  medium: 'text-xs py-2',
  large: 'text-sm py-4'
};

export function Button({ label, variant = 'filled', size = 'medium', disabled, fullWidth, onClick }: ButtonProps) {
  const variantClasses = classesByVariant[variant];
  const sizeClasses = classesBySize[size];

  return (
    <button
      className={clsx(
        'rounded-full border border-brand px-6 font-semibold text-brand hover:opacity-80',
        variantClasses,
        sizeClasses,
        {
          'opacity-50 hover:opacity-50': disabled,
          'w-full': fullWidth
        }
      )}
      disabled={disabled}
      onClick={onClick}
    >
      {label}
    </button>
  );
}
