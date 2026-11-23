import CategoryButton from "./CategoryButton";

export default function ProductPageHeader({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  return (
    <header className="flex flex-col items-center gap-5">
      <h2 className="font-bold text-4xl">Men's clothing collection</h2>
      <p>
        find everything you need to look and feel your best and shop the latest
        men's fashion and lifestyle products
      </p>
      <div className="flex w-full justify-center gap-5">
        <CategoryButton label={"All"} onSelectCategory={onSelectCategory} selectedCategory={selectedCategory} category={null}/>
        {categories.map((category, index) => {
          return (
            <CategoryButton
              key={index}
              label={category}
              selectedCategory={selectedCategory}
              onSelectCategory={onSelectCategory}
              category={category}
            />
          );
        })}
      </div>
    </header>
  );
}
