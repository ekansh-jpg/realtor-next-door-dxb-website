type DL = { dataLayer?: Record<string, unknown>[] };

export const pushEvent = (event: string, data: Record<string, unknown> = {}) => {
  const w = window as unknown as DL;
  w.dataLayer = w.dataLayer || [];
  w.dataLayer.push({ event, page_path: window.location.pathname, ...data });
};

/** Call from any future form's submit handler (also fired automatically for native submits). */
export const trackFormSubmit = (form_name: string) => pushEvent("form_submit", { form_name });

let installed = false;
export const installTracking = () => {
  if (installed) return;
  installed = true;
  document.addEventListener(
    "click",
    (e) => {
      const a = (e.target as Element | null)?.closest?.("a[href]") as HTMLAnchorElement | null;
      if (!a) return;
      const href = a.getAttribute("href") || "";
      if (/wa\.me|api\.whatsapp\.com|whatsapp:/i.test(href)) pushEvent("whatsapp_click", { link_url: href.split("?")[0] });
      else if (href.startsWith("tel:")) pushEvent("call_click", { link_url: href });
    },
    true,
  );
  document.addEventListener(
    "submit",
    (e) => {
      const f = e.target as HTMLFormElement;
      trackFormSubmit(f.getAttribute("name") || f.id || window.location.pathname);
    },
    true,
  );
};
