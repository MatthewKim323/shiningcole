import { MENU_HOME } from "./menu-home";
import { MENU_STATE } from "./menu-state";

/** Menu item classes for a route: WordPress marks the current page on its li / a, the shell reads that here. */
export function menuFor(path: string) {
  const st = MENU_STATE[path] ?? {};
  const get = (id: string) => st[id] ?? MENU_HOME[id];
  return {
    li: (id: string) => get(id)?.[0] ?? "",
    a: (id: string) => {
      const v = get(id);
      const out: { className?: string; "aria-current"?: "page" } = {};
      if (v && v[1]) out.className = v[1];
      if (v && v[2] === "page") out["aria-current"] = "page";
      return out;
    },
  };
}
