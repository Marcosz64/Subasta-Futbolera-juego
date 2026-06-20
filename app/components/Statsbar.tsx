export default function StatsBar() {
  return (
    <section className="grid grid-cols-2 md:grid-cols-2 gap-8 py-16">

      <div className="text-center border-l border-r border-green-700 pr-8">
        <p className="text-green-400 text-2xl">1,248</p>
        <strong className="text-green-400">Futbolistas en el Mercado</strong>
      </div>

      <div className="text-center border-l border-r border-green-700 pl-8">
        <p className="text-green-400 text-2xl">15.4K</p>
        <strong className="text-green-400">Managers en línea</strong>
      </div>

    </section>
  );
}