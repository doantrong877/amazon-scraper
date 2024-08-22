import HeroCarousel from "@/components/HeroCarousel";
import Searchbar from "@/components/Searchbar";
import Image from "next/image";
import { getAllProducts } from "@/lib/actions";
import ProductCard from "@/components/ProductCard";

const Home = async () => {
  const allProducts = await getAllProducts();
  const products = allProducts ?? [];
  return (
    <>
      <section className="px-6 md:px-20 py-24">
        <div className="flex max-xl:flex-col gap-16">
          <div className="flex flex-col justify-center">
            <div className="flex flex-row">
              <h1 className="head-text py-20">
                Unleash the Power of
            
              </h1>
              <Image
                    src="/assets/icons/tracker.svg"
                    width={400}
                    height={0}
                    alt="logo"
                    className="border-solid border-[10px] gap-0 rounded-full mx-10"
                  />
            </div>

            <h4 className="mt-6 italic">
            Advanced self-service analytics for tracking personal prices, helping you monitor, compare, and save more effectively.
            </h4>

            <Searchbar />
          </div>

          {/* <HeroCarousel key='carousel' products={products}/> */}
        </div>
      </section>

      <section className="trending-section">
        <h2 className="section-text">Trending</h2>

        <div className="flex flex-wrap gap-x-8 gap-y-16">
          {allProducts?.map((product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </section>
    </>
  );
};

export default Home;
