export default function ErrorMsg({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 p-6">
      <div>
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
          className="icon icon-tabler icons-tabler-outline icon-tabler-exclamation-circle"
        >
          <path stroke="none" d="M0 0h24v24H0z" fill="none" />
          <path d="M3 12a9 9 0 1 0 18 0a9 9 0 1 0 -18 0" />
          <path d="M12 9v4" />
          <path d="M12 16v.01" />
        </svg>
      </div>

      <div className="text-center">
        <h3 className="text-sm font-medium text-neutral-900">
          Something went wrong
        </h3>

        <p className="mt-1 text-sm text-neutral-500">{message}</p>
      </div>

      {onRetry && (
        <button
          onClick={onRetry}
          className="mt-2 self-start text-sm font-medium text-neutral-800 underline underline-offset-4 hover:text-neutral-500 transition-colors"
        >
          Try again
        </button>
      )}
    </div>
  );
}
