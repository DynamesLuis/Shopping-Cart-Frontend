import CategoryButton from "./CategoryButton";
import categoryInfo from "../constants/categoryInfo";

export default function ProductPageHeader({
  categories,
  selectedCategory,
  onSelectCategory,
}) {
  let title;
  let description;
  if (selectedCategory === null) {
    title = categoryInfo.all.title;
    description = categoryInfo.all.description;
  } else {
    title = categoryInfo[selectedCategory].title;
    description = categoryInfo[selectedCategory].description;
  }

  return (
    <header className="flex flex-col items-center gap-5">
      <h2 className="font-bold text-4xl">{title}</h2>
      <p>{description}</p>
      <div className="flex w-full justify-center gap-5">
        <CategoryButton
          label={"All"}
          onSelectCategory={onSelectCategory}
          selectedCategory={selectedCategory}
          category={null}
        />
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
