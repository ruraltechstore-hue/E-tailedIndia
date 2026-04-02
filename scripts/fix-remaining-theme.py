from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "src"

REPLACEMENTS: list[tuple[str, str]] = [
    ("text-blue-100", "text-brand-foreground/85"),
    ("text-blue-200", "text-brand-foreground/70"),
    ("focus:border-blue-500", "focus:border-brand"),
    ("focus:ring-blue-200", "focus:ring-brand-subtle"),
    ("focus:ring-2 focus:ring-brand-subtle", "focus:ring-2 focus:ring-brand-subtle"),  # no-op
    ("border-red-500", "border-danger"),
    ("focus:border-red-600", "focus:border-danger"),
    ("focus:ring-red-200", "focus:ring-danger/25"),
    ("text-red-500", "text-danger"),
    ("bg-green-400", "bg-accent/80"),
    ("hover:border-blue-300", "hover:border-brand-subtle"),
    ("text-green-300", "text-accent-subtle"),
    ("text-green-900", "text-accent-active"),
    ("bg-red-100", "bg-danger-muted"),
    ("text-red-900", "text-danger-foreground"),
    ("text-red-800", "text-danger-foreground/90"),
    ("bg-yellow-50", "bg-warning-muted"),
    ("border-yellow-200", "border-warning-border"),
    ("text-yellow-900", "text-warning-foreground"),
    ("text-yellow-800", "text-warning-foreground/90"),
    ("text-yellow-700", "text-warning-foreground"),
    ("text-yellow-600", "text-warning-foreground"),
    ("bg-yellow-100", "bg-warning-muted"),
    ("text-orange-700", "text-warning-foreground"),
    ("text-orange-500", "text-warning-foreground"),
    ("bg-orange-600", "bg-vertical-social"),
    ("border-emerald-500", "border-tier-premium-badge"),
    ("border-green-500", "border-accent"),
    ("ring-orange-400", "ring-warning/60"),
    ("ring-red-400", "ring-danger/50"),
]

REPLACEMENTS = [(a, b) for a, b in REPLACEMENTS if a != b]


def main() -> None:
    for path in sorted(ROOT.rglob("*.tsx")):
        text = path.read_text(encoding="utf-8")
        orig = text
        for old, new in REPLACEMENTS:
            text = text.replace(old, new)
        if text != orig:
            path.write_text(text, encoding="utf-8")
            print(path.relative_to(ROOT))


if __name__ == "__main__":
    main()
