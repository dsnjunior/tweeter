import clsx from 'clsx';

export type PostActionProps = {
  icon: React.ReactNode;
  label: string;
  counter?: string;
  hoverColor?: 'brand' | 'green' | 'red';
  onClick: () => void;
};

const classesByHoverColor = {
  brand: 'hover:text-brand',
  green: 'hover:text-[#0B7]',
  red: 'hover:text-[#F18]'
};

export function PostAction({ icon, label, counter, hoverColor = 'brand', onClick }: PostActionProps) {
  const hoverColorClasses = classesByHoverColor[hoverColor];

  return (
    <button aria-label={label} className={clsx('group mr-5 flex items-center', hoverColorClasses)} onClick={onClick}>
      <span className="relative -m-2 p-2 after:absolute after:inset-0 after:rounded-full after:bg-current after:opacity-0 after:transition-opacity after:group-hover:opacity-30">
        {icon}
      </span>
      {counter && <span className="ml-2 text-xs">{counter}</span>}
    </button>
  );
}
