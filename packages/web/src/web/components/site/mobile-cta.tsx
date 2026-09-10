import { MessageCircle, Phone } from "lucide-react";
import { site, whatsappLink } from "../../lib/site";

/** Barra fixa de contato — só no mobile. */
export function MobileCta() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-line bg-paper/95 px-3 py-3 pb-[max(0.75rem,env(safe-area-inset-bottom))] backdrop-blur-xl md:hidden">
      <div className="flex gap-2.5">
        <a
          href={site.phoneHref}
          className="font-display flex flex-1 items-center justify-center gap-2 rounded-full border border-ink/20 py-3.5 text-sm tracking-wide text-ink"
        >
          <Phone className="h-4 w-4" strokeWidth={1.6} />
          Ligar
        </a>
        <a
          href={whatsappLink()}
          target="_blank"
          rel="noreferrer"
          className="font-display flex flex-[1.4] items-center justify-center gap-2 rounded-full bg-brand py-3.5 text-sm tracking-wide text-white"
        >
          <MessageCircle className="h-4 w-4" strokeWidth={1.6} />
          Falar no WhatsApp
        </a>
      </div>
    </div>
  );
}
