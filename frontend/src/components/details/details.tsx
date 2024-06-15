interface DetailsProps {
  hasMusic: boolean;
}

const Details: React.FC<DetailsProps> = ({ hasMusic }) => {
  return (
    <aside
      className={`w-[350px] bg-neutral-600 p-2 h-screen flex items-end justify-between gap-4 flex-col transition duration-500 rounded-tl-md
      ${hasMusic ? 'translate-x-0' : 'translate-x-[400px]'}`}
    >
    </aside>
  );
};

export { Details };
