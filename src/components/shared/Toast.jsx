import { useEffect } from "react";

export default function Toast({ message, onClose, type }) {
  useEffect(() => {
    const timeoutId = setTimeout(onClose, 3000);

    return () => clearTimeout(timeoutId);
  }, [onClose, message]);

  return (
    <div
      role="status"
      aria-live="polite"
      className="fixed right-5 top-5 z-50 flex items-center gap-3 rounded-lg border border-neutral-200 bg-white px-5 py-4 shadow-md"
    >
      <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-neutral-100">
        {type === "add" ? (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-plus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M12.5 17h-6.5v-14h-2" />
            <path d="M6 5l14 1l-.86 6.017m-2.64 .983h-10.5" />
            <path d="M16 19h6" />
            <path d="M19 16v6" />
          </svg>
        ) : (
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#000000"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="icon icon-tabler icons-tabler-outline icon-tabler-shopping-cart-minus"
          >
            <path stroke="none" d="M0 0h24v24H0z" fill="none" />
            <path d="M4 19a2 2 0 1 0 4 0a2 2 0 0 0 -4 0" />
            <path d="M12.5 17h-6.5v-14h-2" />
            <path d="M6 5l14 1l-1 7h-13" />
            <path d="M16 19h6" />
          </svg>
        )}
      </div>

      <p className="text-sm font-medium text-neutral-800">{message}</p>
    </div>
  );
}
