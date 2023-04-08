export type FormAttachmentProps = {
  icon: React.ReactNode;
  label: string;
  onClick: () => void;
};

export function FormAttachment({ icon, label, onClick }: FormAttachmentProps) {
  return (
    <button aria-label={label} title={label} className="group mr-4 flex items-center" onClick={onClick}>
      <span className="relative -m-1 p-1 after:absolute after:inset-0 after:rounded-full after:bg-current after:opacity-0 after:transition-opacity after:group-hover:opacity-30">
        {icon}
      </span>
    </button>
  );
}
