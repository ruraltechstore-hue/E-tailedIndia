"""One-off migration: raw Tailwind palette classes -> semantic theme utilities."""
from pathlib import Path

ROOT = Path(__file__).resolve().parent.parent / "src"

# Per-file replacements applied first (path suffix -> list of (old, new))
FILE_SPECIFIC: dict[str, list[tuple[str, str]]] = {
    "components/pages/GPLMarketplacePage.tsx": [
        ("text-cyan-100", "text-white/80"),
        ("bg-cyan-100", "bg-vertical-marketplace-muted"),
        ("bg-cyan-50", "bg-vertical-marketplace-muted"),
        ("bg-cyan-600", "bg-vertical-marketplace"),
        ("text-cyan-600", "text-vertical-marketplace"),
    ],
    "components/pages/AutomationsCRMPage.tsx": [
        ("text-purple-100", "text-white/80"),
        ("bg-purple-100", "bg-vertical-crm-muted"),
        ("bg-purple-50", "bg-vertical-crm-muted"),
        ("bg-purple-600", "bg-vertical-crm"),
        ("text-purple-600", "text-vertical-crm"),
    ],
    "components/pages/SaaSSoftwarePage.tsx": [
        ("text-slate-100", "text-white/80"),
        ("bg-slate-100", "bg-vertical-saas-muted"),
        ("bg-slate-50", "bg-vertical-saas-muted"),
        ("bg-slate-600", "bg-vertical-saas"),
        ("text-slate-600", "text-vertical-saas"),
    ],
    "components/pages/EducationInternshipPage.tsx": [
        ("text-red-100", "text-white/80"),
        ("bg-red-100", "bg-vertical-education-muted"),
        ("bg-red-50", "bg-vertical-education-muted"),
        ("bg-red-600", "bg-vertical-education"),
        ("text-red-600", "text-vertical-education"),
    ],
    "components/pages/BrandingPrintingPage.tsx": [
        ("text-amber-100", "text-white/80"),
        ("bg-amber-100", "bg-vertical-branding-muted"),
        ("bg-amber-50", "bg-vertical-branding-muted"),
        ("bg-amber-600", "bg-vertical-branding"),
        ("text-amber-600", "text-vertical-branding"),
    ],
    "components/pages/BusinessSystemsPage.tsx": [
        ("text-indigo-100", "text-white/80"),
        ("bg-indigo-100", "bg-vertical-business-muted"),
        ("bg-indigo-50", "bg-vertical-business-muted"),
        ("bg-indigo-600", "bg-vertical-business"),
        ("text-indigo-600", "text-vertical-business"),
    ],
    "components/pages/SocialMediaServicesPage.tsx": [
        ("text-orange-100", "text-white/80"),
        ("bg-orange-100", "bg-vertical-social-muted"),
        ("bg-orange-50", "bg-vertical-social-muted"),
        ("bg-orange-600", "bg-vertical-social"),
        ("text-orange-600", "text-vertical-social"),
    ],
    "components/pages/WebsiteECommercePage.tsx": [
        ("text-green-100", "text-white/80"),
        ("bg-green-100", "bg-vertical-ecommerce-muted"),
        ("bg-green-50", "bg-vertical-ecommerce-muted"),
        ("bg-green-600", "bg-vertical-ecommerce"),
        ("text-green-600", "text-vertical-ecommerce"),
    ],
    "components/pages/AboutPage.tsx": [
        ("bg-purple-100", "bg-palette-purple-muted"),
        ("text-purple-600", "text-palette-purple"),
        ("bg-pink-100", "bg-palette-pink-muted"),
        ("text-pink-600", "text-palette-pink"),
    ],
    "components/pages/DigitalBusinessServicesPage.tsx": [
        ("text-purple-600", "text-vertical-crm"),
    ],
    "components/pages/Dashboard.tsx": [
        ("bg-purple-100", "bg-palette-purple-muted"),
        ("text-purple-600", "text-palette-purple"),
    ],
}

# Longest-first global replacements (after file-specific)
GLOBAL_ORDERED: list[tuple[str, str]] = [
    ("hover:bg-blue-800", "hover:bg-brand-active"),
    ("active:bg-blue-800", "active:bg-brand-active"),
    ("hover:bg-blue-700", "hover:bg-brand-hover"),
    ("hover:text-blue-700", "hover:text-brand-hover"),
    ("text-blue-800", "text-brand-active"),
    ("text-blue-700", "text-brand-on-muted"),
    ("text-blue-600", "text-brand"),
    ("border-blue-200", "border-brand-subtle"),
    ("border-blue-600", "border-brand"),
    ("bg-blue-100", "bg-brand-subtle"),
    ("bg-blue-50", "bg-brand-muted"),
    ("bg-blue-600", "bg-brand"),
    ("ring-blue-500", "ring-brand"),
    ("text-blue-500", "text-brand"),
    ("hover:bg-green-800", "hover:bg-accent-active"),
    ("hover:bg-green-700", "hover:bg-accent-hover"),
    ("active:bg-green-800", "active:bg-accent-active"),
    ("text-green-800", "text-accent-active"),
    ("text-green-700", "text-success-foreground"),
    ("text-green-600", "text-accent"),
    ("border-green-200", "border-success-border"),
    ("bg-green-100", "bg-accent-subtle"),
    ("bg-green-50", "bg-accent-muted"),
    ("bg-green-500", "bg-accent"),
    ("bg-green-600", "bg-accent"),
    ("text-green-500", "text-accent"),
    ("text-green-100", "text-accent-foreground/90"),
    ("bg-orange-100", "bg-warning-muted"),
    ("bg-orange-50", "bg-warning-muted"),
    ("text-orange-600", "text-warning-foreground"),
    ("border-orange-200", "border-warning-border"),
    ("border-red-200", "border-danger-border"),
    ("text-red-700", "text-danger-foreground"),
    ("bg-red-50", "bg-danger-muted"),
    ("text-red-600", "text-danger-foreground"),
    ("bg-red-600", "bg-danger"),
    ("border-amber-200", "border-warning-border"),
    ("text-amber-600", "text-warning-foreground"),
    ("bg-amber-50", "bg-warning-muted"),
]


def migrate_file(path: Path) -> bool:
    rel = str(path.relative_to(ROOT)).replace("\\", "/")
    text = path.read_text(encoding="utf-8")
    original = text

    if rel in FILE_SPECIFIC:
        for old, new in FILE_SPECIFIC[rel]:
            text = text.replace(old, new)

    for old, new in GLOBAL_ORDERED:
        if old == new:
            continue
        text = text.replace(old, new)

    if text != original:
        path.write_text(text, encoding="utf-8")
        return True
    return False


def main() -> None:
    changed = []
    for path in sorted(ROOT.rglob("*.tsx")):
        if migrate_file(path):
            changed.append(path)
    for path in sorted(ROOT.rglob("*.ts")):
        if path.suffix != ".ts":
            continue
        if "node_modules" in str(path):
            continue
        if migrate_file(path):
            changed.append(path)
    print(f"Updated {len(changed)} files")


if __name__ == "__main__":
    main()
