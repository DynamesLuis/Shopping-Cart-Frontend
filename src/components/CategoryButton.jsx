export default function CategoryButton({
  label,
  onSelectCategory,
  selectedCategory,
  category,
}) {
  const isSelected = category === selectedCategory;

  return (
    <button
      onClick={() => onSelectCategory(category)}
      className={`cursor-pointer w-28 border-solid border-2 border-slate-500 rounded-full p-2 hover:bg-black hover:text-white hover:border-black transition-all duration-300 ease ${isSelected ? "bg-black text-white border-black" : "border-slate-500"}`}
    >
      {label}
    </button>
  );
}
