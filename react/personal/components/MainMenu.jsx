export function MainMenu({ items }) {
  return (
    <div className="hidden sm:flex">
      {items.map((item) => (
        <a key={item.id} className=" px-4 py-2" href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
