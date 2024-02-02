import Image from "next/image";
import { Hero, CustomFilter, SearchBar, Forms } from "@/components";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <Hero />
      <div className="mt-12 padding-x padding-y max-width" id="discover">
        <div className="home__text-container">
          <h1 className="text-4xl font-extrabold">Catálogo de Carros</h1>
            <p>Explore os carros que voce pode gostar</p>
      </div>

      <div className="home__filters">
        <SearchBar />
          <div className="home__filter-container">
                <CustomFilter />
                <CustomFilter /> 
          </div>
      </div>
            </div>
    </main>
  );
}
