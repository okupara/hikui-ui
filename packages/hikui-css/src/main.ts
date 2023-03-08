import { button } from "./lib/button";
import { select } from "./lib/select";
// import "./style.css";
// import typescriptLogo from "./typescript.svg";
// import { setupCounter } from "./counter";

// document.querySelector<HTMLDivElement>("#app")!.innerHTML = `
//   <div>
//     <a href="https://vitejs.dev" target="_blank">
//       <img src="/vite.svg" class="logo" alt="Vite logo" />
//     </a>
//     <a href="https://www.typescriptlang.org/" target="_blank">
//       <img src="${typescriptLogo}" class="logo vanilla" alt="TypeScript logo" />
//     </a>
//     <h1 class="text-red-200">Vite + TypeScript</h1>
//     <div class="card">
//       <button id="counter" type="button"></button>
//     </div>
//     <p class="read-the-docs">
//       Click on the Vite and TypeScript logos to learn more
//     </p>
//   </div>
// `;

// setupCounter(document.querySelector<HTMLButtonElement>("#counter")!);

const buttons = window.document.querySelectorAll("[data-part=button]");
buttons.forEach((b) => (b.className = button()));
export {};

const { trigger } = select();
const html = String.raw;

const selectTemplate = html` <section id="select" class="p-4">
  <h2 class="font-bold">Select</h2>
  <div class="inline-flex flex-col gap-1 items-start">
    <button data-part="trigger" class="${trigger()} flex items-center">
      <span>アメリカ合衆国</span>
      <span class="w-4 h-4 flex items-center text-gray-400 ml-4 -mr-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M19.5 8.25l-7.5 7.5-7.5-7.5"
          />
        </svg>
      </span>
    </button>
    <div
      class="w-full items-self-stretch rounded-md p-2 bg-white border border-gray-100 shadow-md overflow-hidden"
    >
      長いテキスト長いテキスト長いテキスト長いテキスト長いテキスト
    </div>
  </div>
</section>`;
const div = document.createElement("div");
div.innerHTML = selectTemplate;
document.body.appendChild(div);
