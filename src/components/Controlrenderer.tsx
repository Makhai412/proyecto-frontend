import { controlTexts } from "../data/controlTexts";

type ControlrendererProps = {
  controlId: string;
};

export default function Controlrenderer({ controlId }: ControlrendererProps) {
  const control = controlTexts[controlId];
  if (!control) return <p className="text-gray-500">Seleccione un control.</p>;

  return (
    <div className="flex flex-col min-h-[calc(100vh-8rem)]  h-60 overflow-y-auto p-6 bg-white rounded-lg shadow-md text-black text-left overflow-y-auto m-4 border border-opacity-30 border-gray-300">
      <h2 className="text-xl font-bold mb-2">{control.title}</h2>
      <p className="text-sm mb-4 text-gray-600">{control.description}</p>

      {control.inputs.map((input, i) => (
        <div key={i} className="mb-4">
          <label className="block font-semibold mb-1">{input.label}</label>
          {input.type === "text" && (
            <input type="text" className="border p-2 rounded w-full" />
          )}
          {input.type === "radio" && input.options?.map((opt, idx) => (
            <div key={idx}>
              <label className="inline-flex items-center gap-2">
                <input type="radio" name={input.label} />
                {opt}
              </label>
            </div>
          ))}
        </div>
      ))}
    </div>
  );
}

export { Controlrenderer };