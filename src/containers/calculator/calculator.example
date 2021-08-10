import { useState } from "react";

export function Calculator() {
  const [base, setBase] = useState();
  const [exponent, setExponent] = useState();
  const [result, setResult] = useState();

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();

        setResult(Math.pow(base, exponent));
      }}
      onReset={(e) => {
        e.preventDefault();

        setResult();
      }}
      className="space-y-5"
    >
      <div className="flex flex-col gap-2">
        <label htmlFor="a">Base</label>
        <input
          id="a"
          name="a"
          value={base}
          onChange={(e) => {
            setBase(e.target.value);
          }}
          className="p-1 border-2 border-gray-900 rounded"
        />
      </div>
      <div className="flex flex-col gap-2">
        <label htmlFor="b">Exponent</label>
        <input
          id="b"
          name="b"
          value={exponent}
          onChange={(e) => {
            setExponent(e.target.value);
          }}
          className="p-1 border-2 border-gray-900 rounded"
        />
      </div>
      <div className="flex gap-2">
        <button
          type="submit"
          className="bg-gray-900 text-gray-100 rounded p-2 w-full"
        >
          Calculate
        </button>
        <button
          type="reset"
          className="border-gray-900 border-2 rounded p-2 w-full"
        >
          Reset
        </button>
      </div>
      <output
        htmlFor="a b"
        className="flex border-4 border-dashed text-2xl p-5 border-gray-900"
        name="result"
      >
        Result: {result}
      </output>
    </form>
  );
}
