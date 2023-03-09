import { button } from "./lib/button";
import { select } from "./lib/select";

const { trigger } = select();

export default function () {
  return (
    <main className="space-y-2 p-4">
      <h1>hikui-css development</h1>
      <section>
        <h1>Buttons</h1>
        <div>
          <button className={`${button()}`}>hello</button>
        </div>
      </section>
      <section>
        <h1>Select</h1>
        <div>
          <button className={`${trigger()} flex items-center`}>
            <span>アメリカ合衆国</span>
            <span className="ml-2 -mr-2 text-gray-400 cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-4 h-4"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                />
              </svg>
            </span>
          </button>
        </div>
      </section>
    </main>
  );
}
