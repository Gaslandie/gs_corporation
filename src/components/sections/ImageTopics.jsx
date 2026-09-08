import ServiceCard from "@/components/cards/ServiceCard";

export default function ImageTopics({ items }) {
  const columns = items.length === 3 ? "col-12 col-md-4" : "col-12 col-sm-6 col-lg-3";
  return (
    <div className="row g-4 justify-content-center">
      {items.map((item) => <div className={columns} key={item.title}><ServiceCard service={item} /></div>)}
    </div>
  );
}
