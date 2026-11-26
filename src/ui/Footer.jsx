const categories = [
  "Electronics",
  "Jewelery",
  "Men's clothing",
  "Women's clothing",
];

const socialMedia = ["Instagram", "Facebook", "Pinterest", "TikTok"];

export default function Footer() {
  return (
    <footer className="border-t border-neutral-200 px-5 py-12 sm:px-8">
      <div className="mx-auto grid max-w-7xl grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3 lg:gap-16">
        <div className="flex min-w-0 flex-col items-center gap-5 text-center md:col-span-2 lg:col-span-1 lg:items-start lg:text-left">
          <h2 className="text-2xl font-bold tracking-tight">My Shop</h2>

          <p className="max-w-sm text-sm leading-relaxed text-neutral-500">
            Get updates for upcoming products and the best discounts on all
            items.
          </p>

          <form className="mx-auto flex w-full max-w-md flex-col gap-3 min-[420px]:flex-row lg:mx-0">
            <label htmlFor="footer-email" className="sr-only">
              Your email
            </label>

            <input
              type="email"
              id="footer-email"
              placeholder="Enter your email"
              className="min-w-0 flex-1 rounded-full border border-neutral-300 px-4 py-2.5 text-sm outline-none transition focus:border-neutral-900"
            />

            <button
              type="submit"
              className="shrink-0 cursor-pointer rounded-full bg-black px-6 py-2.5 text-sm text-white transition hover:bg-neutral-700"
            >
              Subscribe
            </button>
          </form>
        </div>

        <div className="grid grid-cols-2 gap-6 md:col-span-2 lg:col-span-2 lg:gap-12">
          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Categories</h3>

            <ul className="flex flex-col gap-3 text-sm text-neutral-500">
              {categories.map((category) => (
                <li key={category}>
                  <a href="/shop" className="transition hover:text-black">
                    {category}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="font-semibold">Our Social Media</h3>

            <ul className="flex flex-col gap-3 text-sm text-neutral-500">
              {socialMedia.map((social) => (
                <li key={social}>
                  <a href="#" className="transition hover:text-black">
                    {social}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="mx-auto mt-12 max-w-7xl border-t border-neutral-200 pt-6">
        <p className="text-center text-xs text-neutral-400">
          © {new Date().getFullYear()} My Shopping. All rights reserved.
        </p>
      </div>
    </footer>
  );
}
