import { useState } from "react";
import { controlTexts } from "../data/controlTexts";

type ControlrendererProps = {
  controlId: string;
};

export default function Controlrenderer({ controlId }: ControlrendererProps) {
  const control = controlTexts[controlId];
  const [answers, setAnswers] = useState<Record<string, string>>({});

  if (!control) return <p className="text-gray-500">Seleccione un control.</p>;

  const handleChange = (label: string, value: string) => {
    setAnswers(prev => ({ ...prev, [label]: value }));
  };

  const evaluateCondition = (condition: string): boolean => {
    try {
      // Evalúa condiciones tipo "B.4.4 == 'Sí' || B.4.4 == 'Parcialmente'"
      return new Function(
        "answers",
        `return ${condition.replace(/([A-Za-z0-9_.-]+)/g, "answers['$1']")}`
      )(answers);
    } catch {
      return false;
    }
  };

  return (
    <div className="flex flex-col overflow-y-auto p-6 bg-white rounded-lg shadow-md text-black text-left overflow-y-auto m-4 border border-opacity-30 border-gray-300">
      <h2 className="text-xl font-bold mb-2">{control.title}</h2>
      <p className="text-sm mb-4 text-gray-600">{control.description}</p>

      {control.inputs.map((input, i) => {
        if (input.type === "subtitle") {
          return (
            <h3 key={i} className="text-lg font-semibold mt-6 mb-2">
              {input.label}
            </h3>
          );
        }

        if (input.type === "radio") {
          return (
            <div key={i} className="mb-4">
              <label className="block font-semibold mb-1">{input.label}</label>
              {input.options?.map((opt: string, idx: number) => (
                <div key={idx}>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name={input.label}
                      value={opt}
                      checked={answers[input.label] === opt}
                      onChange={() => handleChange(input.label, opt)}
                    />
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          );
        }

        if (input.type === "conditional") {
          if (!evaluateCondition(input.condition)) return null;

          return (
            <div key={i} className="ml-4 border-l-2 pl-4 border-gray-300">
              {input.inputs.map((subInput: any, j: number) => (
                <div key={j} className="mb-4">
                  <label className="block font-semibold mb-1">{subInput.label}</label>
                  {subInput.type === "radio" &&
                    subInput.options?.map((opt: string, k: number) => (
                      <div key={k}>
                        <label className="inline-flex items-center gap-2">
                          <input
                            type="radio"
                            name={subInput.label}
                            value={opt}
                            checked={answers[subInput.label] === opt}
                            onChange={() => handleChange(subInput.label, opt)}
                          />
                          {opt}
                        </label>
                      </div>
                    ))}
                </div>
              ))}
            </div>
          );
        }

        return null;
      })}
    </div>
  );
}

export { Controlrenderer };
