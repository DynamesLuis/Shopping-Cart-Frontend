export default function ProductSkeleton() {
  return (
    <div className="animate-pulse space-y-3">
      {/* Image */}
      <div className="aspect-square rounded-lg bg-neutral-200" />

      {/* Product information */}
      <div className="h-4 w-3/4 rounded bg-neutral-200" />
      <div className="h-3 w-1/2 rounded bg-neutral-200" />
      <div className="h-4 w-1/4 rounded bg-neutral-200" />
    </div>
  );
}
