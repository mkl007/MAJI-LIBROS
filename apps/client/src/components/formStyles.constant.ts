// Constants para estilos del formulario
export const INPUT_STYLES = {
  base: "block w-full rounded-md border-2 py-1.5 px-3 text-gray-900 shadow-sm sm:text-sm sm:leading-6",
  enabled: "border-gray-300 placeholder-gray-500 focus:border-sky-900",
  disabled: "bg-gray-300 border-gray-300",
} as const;

export const BUTTON_STYLES = {
  submit: "flex w-full justify-center rounded-md bg-green-600 px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-green-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600",
} as const;
