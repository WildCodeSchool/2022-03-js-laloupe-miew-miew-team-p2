export default function CatsCard({ cat }) {
  return (
    <section className="card">
      <img src={cat.image_link} alt={cat.name} className="image-chat" />
      <h2 className="cat-name">{cat.name}</h2>
      <div className="details">
        <h2 className="cat-details">Origin : {cat.origin}</h2>
        <h2 className="cat-details">Family Friendly : {cat.family_friendly}</h2>
        <h2 className="cat-details">Length : {cat.length}</h2>
        <h2 className="cat-details">Min Weight: {cat.min_weight}</h2>
        <h2 className="cat-details">
          Children Friendly : {cat.children_friendly}
        </h2>
      </div>
    </section>
  );
}
