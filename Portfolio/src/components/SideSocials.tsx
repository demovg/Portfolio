import { Github, Linkedin, Mail } from "lucide-react";

function TelegramIcon({ size = 18 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="currentColor">
      <path d="M11.944 0A12 12 0 0 0 0 12a12 12 0 0 0 12 12 12 12 0 0 0 12-12A12 12 0 0 0 12 0a12 12 0 0 0-.056 0zm4.962 7.224c.1-.002.321.023.465.14a.506.506 0 0 1 .171.325c.016.093.036.306.02.472-.18 1.898-.962 6.502-1.36 8.627-.168.9-.499 1.201-.82 1.23-.696.065-1.225-.46-1.9-.902-1.056-.693-1.653-1.124-2.678-1.8-1.185-.78-.417-1.21.258-1.91.177-.184 3.247-2.977 3.307-3.23.007-.032.014-.15-.056-.212s-.174-.041-.249-.024c-.106.024-1.793 1.14-5.061 3.345-.48.33-.913.49-1.302.48-.428-.008-1.252-.241-1.865-.44-.752-.245-1.349-.374-1.297-.789.027-.216.325-.437.893-.663 3.498-1.524 5.83-2.529 6.998-3.014 3.332-1.386 4.025-1.627 4.476-1.635z" />
    </svg>
  );
}

const items = [
  { icon: Github, href: "https://github.com/demovg", label: "GitHub" },
  { icon: Linkedin, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: TelegramIcon, href: "https://t.me/Abrham_Habtamu", label: "Telegram" },
  { icon: Mail, href: "mailto:abrhamhabtamumoges@gmail.com", label: "Email" },
];

export function SideSocials() {
  return (
    <aside
      aria-label="Social links"
      className="fixed left-4 top-1/2 z-40 hidden -translate-y-1/2 lg:block"
    >
      <ul className="flex flex-col items-center gap-3">
        {items.map((s) => (
          <li key={s.label}>
            <a
              href={s.href}
              target="_blank"
              rel="noreferrer"
              aria-label={s.label}
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-border bg-card/70 text-muted-foreground backdrop-blur transition-all hover:-translate-y-0.5 hover:border-primary hover:text-primary hover:glow-primary"
            >
              <s.icon size={18} />
            </a>
          </li>
        ))}
        <li aria-hidden className="mt-2 h-20 w-px bg-border" />
      </ul>
    </aside>
  );
}
