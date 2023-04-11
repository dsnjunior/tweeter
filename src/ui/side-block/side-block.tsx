export type SideBlockProps = {
  title: string;
  label: string;
  children: JSX.Element[];
};

export function SideBlock({ title, label, children }: SideBlockProps) {
  return (
    <aside aria-label={label} className="rounded-2xl bg-gray-dark text-white">
      <h1 className="p-4 text-xl font-black">{title}</h1>
      <ul>
        {children.map((child) => (
          <li key={`${child.key}-wrapper`} className="border-t border-gray-medium p-4">
            {child}
          </li>
        ))}
      </ul>
    </aside>
  );
}
