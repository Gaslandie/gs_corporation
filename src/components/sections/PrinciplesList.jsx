export default function PrinciplesList({ items }) {
  return (
    <ol className="gs-principles">
      {items.map((item, index) => (
        <li key={item.title}>
          <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
          <div><h3>{item.title}</h3><p>{item.description}</p></div>
        </li>
      ))}
    </ol>
  );
}
