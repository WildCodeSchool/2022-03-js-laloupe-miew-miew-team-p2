export default function CatsCard({ cat }) {
  return (
    <section className="card">
      <img src={cat.image_link} alt={cat.name} className="image-chat" />
      <h2>{cat.name}</h2>
      <div className="details">
        <h2>Origin : {cat.origin}</h2>
        <h2>Family Friendly : {cat.family_friendly}</h2>
        <h2>Length : {cat.length}</h2>
        <h2>Min Weight: {cat.min_weight}</h2>
        <h2>Children Friendly : {cat.children_friendly}</h2>
      </div>
    </section>
  );
}
