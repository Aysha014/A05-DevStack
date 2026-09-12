import type { Technology } from "./technologies";

type SelectedItemsProps = {
  stack: Technology[];
  handleRemove: (id: string) => void;
  handleRemoveAll: () => void;
};

const SelectedItems = ({
  stack,
  handleRemove,
  handleRemoveAll,
}: SelectedItemsProps) => {
  return (
    <aside className="h-fit rounded-xl border border-[#E2E8F0] bg-white p-5">
      <h3 className="font-semibold text-[#0F172A]">
        Your Stack
      </h3>

      {/* Selected Count */}
      <p className="mt-1 text-xs text-[#94A3B8]">
        {stack.length === 0
          ? "No technologies selected yet."
          : `${stack.length} ${
              stack.length === 1
                ? "Technology"
                : "Technologies"
            } Selected`}
      </p>

      {/* Empty State */}
      {stack.length === 0 && (
        <div className="mt-5 rounded-lg border border-dashed border-[#CBD5E1] px-3 py-10 text-center text-xs text-[#94A3B8]">
          Your stack is empty.
        </div>
      )}

      {/* Selected Technologies */}
      {stack.length > 0 && (
        <div className="mt-4 space-y-2">
          {stack.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between rounded-md border border-[#E2E8F0] p-3"
            >
              <div className="flex items-center gap-3">
                <img
                  src={item.icon}
                  alt={item.name}
                  className="h-6 w-6 object-contain"
                />

                <div>
                  <p className="text-xs font-semibold text-[#0F172A]">
                    {item.name}
                  </p>

                  <p className="text-[9px] text-[#94A3B8]">
                    {item.category}
                  </p>
                </div>
              </div>

              <button
                onClick={() => handleRemove(item.id)}
                className="text-lg text-[#94A3B8] transition hover:text-red-500"
              >
                ×
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Remove All */}
      {stack.length > 0 && (
        <button
          onClick={handleRemoveAll}
          className="mt-5 w-full rounded-md border border-red-300 py-2 text-xs text-red-500 transition hover:bg-red-50"
        >
          Remove All
        </button>
      )}
    </aside>
  );
};

export default SelectedItems;