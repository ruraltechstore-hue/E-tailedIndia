/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        brand: {
          DEFAULT: 'var(--color-brand)',
          hover: 'var(--color-brand-hover)',
          active: 'var(--color-brand-active)',
          muted: 'var(--color-brand-muted)',
          subtle: 'var(--color-brand-subtle)',
          foreground: 'var(--color-brand-foreground)',
          'on-muted': 'var(--color-brand-on-muted)',
        },
        accent: {
          DEFAULT: 'var(--color-accent)',
          hover: 'var(--color-accent-hover)',
          active: 'var(--color-accent-active)',
          muted: 'var(--color-accent-muted)',
          subtle: 'var(--color-accent-subtle)',
          foreground: 'var(--color-accent-foreground)',
          'on-muted': 'var(--color-accent-on-muted)',
        },
        surface: {
          DEFAULT: 'var(--color-surface)',
          elevated: 'var(--color-surface-elevated)',
          muted: 'var(--color-surface-muted)',
        },
        border: {
          DEFAULT: 'var(--color-border)',
          strong: 'var(--color-border-strong)',
        },
        success: {
          DEFAULT: 'var(--color-success)',
          muted: 'var(--color-success-muted)',
          border: 'var(--color-success-border)',
          foreground: 'var(--color-success-foreground)',
        },
        danger: {
          DEFAULT: 'var(--color-danger)',
          muted: 'var(--color-danger-muted)',
          border: 'var(--color-danger-border)',
          foreground: 'var(--color-danger-foreground)',
        },
        warning: {
          DEFAULT: 'var(--color-warning)',
          muted: 'var(--color-warning-muted)',
          border: 'var(--color-warning-border)',
          foreground: 'var(--color-warning-foreground)',
        },
        vertical: {
          crm: {
            DEFAULT: 'var(--color-vertical-crm)',
            muted: 'var(--color-vertical-crm-muted)',
          },
          marketplace: {
            DEFAULT: 'var(--color-vertical-marketplace)',
            muted: 'var(--color-vertical-marketplace-muted)',
          },
          saas: {
            DEFAULT: 'var(--color-vertical-saas)',
            muted: 'var(--color-vertical-saas-muted)',
          },
          education: {
            DEFAULT: 'var(--color-vertical-education)',
            muted: 'var(--color-vertical-education-muted)',
          },
          branding: {
            DEFAULT: 'var(--color-vertical-branding)',
            muted: 'var(--color-vertical-branding-muted)',
          },
          business: {
            DEFAULT: 'var(--color-vertical-business)',
            muted: 'var(--color-vertical-business-muted)',
          },
          social: {
            DEFAULT: 'var(--color-vertical-social)',
            muted: 'var(--color-vertical-social-muted)',
          },
          ecommerce: {
            DEFAULT: 'var(--color-vertical-ecommerce)',
            muted: 'var(--color-vertical-ecommerce-muted)',
          },
        },
        palette: {
          purple: {
            DEFAULT: 'var(--color-palette-purple)',
            muted: 'var(--color-palette-purple-muted)',
          },
          pink: {
            DEFAULT: 'var(--color-palette-pink)',
            muted: 'var(--color-palette-pink-muted)',
          },
        },
        tier: {
          retailer: 'var(--color-tier-retailer)',
          distributor: 'var(--color-tier-distributor)',
          super: 'var(--color-tier-super)',
          'white-label': 'var(--color-tier-white-label)',
          pincode: 'var(--color-tier-pincode)',
          'pincode-5': 'var(--color-tier-pincode-5)',
          enterprise: 'var(--color-tier-enterprise)',
          'admin-ns': 'var(--color-tier-admin-ns)',
          'admin-src': 'var(--color-tier-admin-src)',
          logistics: 'var(--color-tier-logistics)',
          'premium-badge': 'var(--color-tier-premium-badge)',
        },
      },
    },
  },
  plugins: [],
};
