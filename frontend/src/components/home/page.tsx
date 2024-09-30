import { products } from "@/lib/data";
import { FeaturedProductCard, ProductCard } from "../product-card";

export const HomePage = () => {
  return (
    <div>
      {" "}
      <section
        style={{
          backgroundImage: `url('/img/homepage.png')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          height: "60vh",
          position: "relative",
        }}
      >
        <div className="absolute bottom-5 left-28">
          <h1 className="text-2xl font-medium">Wildflower Hoodie</h1>
          <h1 className="font-bold text-2xl">120’000₮</h1>
        </div>
      </section>
      <div className="mt-6 mb-24 max-w-[1100px] mx-auto grid grid-cols-4 gap-y-12 gap-x-5">
        {products.map((product, index) => {
          return (
            <>
              {index === 6 || index === 7 ? (
                <FeaturedProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  discount={product.discount}
                />
              ) : (
                <ProductCard
                  key={index}
                  name={product.name}
                  price={product.price}
                  image={product.image}
                  discount={product.discount}
                />
              )}
            </>
          );
        })}
      </div>
    </div>
  );
};
