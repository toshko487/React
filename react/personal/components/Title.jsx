import { menuItems } from "@/data/menuItems";

export function Title() {
  return (
    <div>
      {menuItems.map((item) => (
        <a key={item.id} className=" px-4 py-2" href={item.link}>
          {item.label}
        </a>
      ))}
    </div>
  );
}
