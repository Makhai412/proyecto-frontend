import { useState } from "react";
import { controlTexts } from "../data/controlTexts";

type SectionId = keyof typeof controlTexts;

type InputType = "radio" | "text" | "subtitle" | "conditional";

type BaseInput = {
  id: string;
  type: InputType;
  label: string;
};

type RadioInput = BaseInput & {
  type: "radio";
  options: string[];
};

type SubtitleInput = BaseInput & {
  type: "subtitle";
};

type ConditionalInput = BaseInput & {
  type: "conditional";
  condition: string;
  inputs: (RadioInput | SubtitleInput)[];
};

type ControlInput = RadioInput | SubtitleInput | ConditionalInput;

type Control = {
  title: string;
  description: string;
  inputs: ControlInput[];
};

type ControlrendererProps = {
  controlId: SectionId;
};

export default function Controlrenderer({ controlId }: ControlrendererProps) {
  const defaultControlId: SectionId = "seccionA";
  const rawControl = controlTexts[controlId] || controlTexts[defaultControlId];
  const control = rawControl as Control;
  const [answers, setAnswers] = useState<Record<string, string>>({});

  const handleChange = (id: string, value: string) => {
    setAnswers(prev => ({ ...prev, [id]: value }));
  };

  const evaluateCondition = (condition: string) => {
    const expressions = condition.split("||").map(exp => exp.trim());
    return expressions.some(expression => {
      const [id, expectedValueRaw] = expression.split("==").map(s => s.trim());
      const expectedValue = expectedValueRaw?.replace(/['"]/g, "");
      return answers[id] === expectedValue;
    });
  };

  const renderInputs = (inputs: ControlInput[], prefix = "") => {
    return inputs.map((input, i) => {
      const fullId = prefix ? `${prefix}.${input.id}` : input.id;
  
      switch (input.type) {
        case "subtitle":
          return (
            <div key={fullId} className="mb-4">
              <h3 className="text-lg font-semibold">{input.label}</h3>
            </div>
          );
  
        case "radio":
          return (
            <div key={fullId} className="mb-4">
              <label className="block font-semibold mb-1">{input.label}</label>
              {input.options.map((opt, idx) => (
                <div key={idx}>
                  <label className="inline-flex items-center gap-2">
                    <input
                      type="radio"
                      name={fullId}
                      value={opt}
                      onChange={() => handleChange(fullId, opt)}
                      checked={answers[fullId] === opt}
                    />
                    {opt}
                  </label>
                </div>
              ))}
            </div>
          );
  
        case "conditional":
          if (evaluateCondition(input.condition)) {
            return (
              <div key={fullId} className="pl-4 border-l-2 border-gray-300 ml-2">
                {renderInputs(input.inputs, fullId)}
              </div>
            );
          }
          return null;
  
        default:
          return null;
      }
    });
  };

  return (
    <div className="flex flex-col overflow-y-auto p-6 bg-white rounded-lg shadow-md text-black text-left m-4 border border-opacity-30 border-gray-300">
      <h2 className="text-xl font-bold mb-2">{control.title}</h2>
      <p className="text-sm mb-4 text-gray-600">{control.description}</p>
      {renderInputs(control.inputs)}
    </div>
  );
}

export { Controlrenderer };
