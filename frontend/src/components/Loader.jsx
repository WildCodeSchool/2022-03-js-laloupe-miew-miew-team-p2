import "../pages/sass/loader.scss";

export default function Loader() {
  return (
    <section className="loader--container">
      <div id="container">
        <div id="square" className="shimmer" />
        <div id="content">
          <div id="title" className="shimmer" />
          <div id="desc">
            <div className="line shimmer" />
            <div className="line shimmer" />
            <div className="line shimmer" />
            <div className="line shimmer" />
          </div>
        </div>
      </div>
    </section>
  );
}
