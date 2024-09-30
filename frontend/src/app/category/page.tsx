"use client";
import { ProductCard } from "@/components/product-card";
import { products } from "@/lib/data";

export default function category() {
  return (
    <section className="flex mx-20 justify-between ">
      <div>
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Default</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="default"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Retro</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="retro"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Cyberpunk</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="cyberpunk"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Valentine</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="valentine"
            />
          </label>
        </div>
        <div className="form-control">
          <label className="label cursor-pointer gap-4">
            <span className="label-text">Aqua</span>
            <input
              type="radio"
              name="theme-radios"
              className="radio theme-controller"
              value="aqua"
            />
          </label>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-6">
        {products.map((product, index) => {
          return (
            <>
              <ProductCard
                key={index}
                name={product.name}
                price={product.price}
                image={product.image}
                discount={product.discount}
              />
            </>
          );
        })}
      </div>
    </section>
  );
}
