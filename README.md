# 🚀 Next.js Quickstart Template

A production-ready Next.js 15+ starter template with shadcn/ui, CI/CD, and modern development tools. Perfect for quickly bootstrapping new projects with best practices built-in.

## ✨ Features

### 🎨 Frontend

- ⚡ Next.js 15+ with App Router
- 🎨 shadcn/ui + Tailwind CSS
- 🎭 Radix UI primitives
- 🎨 Lucide React icons
- 📱 Fully responsive design

### 🛠 Development

- 🛠 TypeScript
- 🔍 ESLint + Prettier
- 🐶 Husky Git hooks
- � Renovate for dependency updates
- 📦 pnpm (with npm/yarn support)

### 🚀 DevOps

- ✅ GitHub Actions CI/CD
- 🧪 Automated testing setup
- 🔄 Auto-formatting on commit
- 📦 Zero-config deployments

## 🏗 Project Structure

```
.
├── .github/
│   └── workflows/         # GitHub Actions workflows
├── app/                   # App Router
│   └── (public)/          # Public routes
│       └── users/         # Example feature
├── components/            # Reusable components
│   ├── ui/                # shadcn/ui components
│   └── user-card.tsx      # Example component
├── lib/                   # Utility functions
└── types/                 # TypeScript types
```

## 🚀 Quick Start

1. **Clone the repository**

   ```bash
   git clone https://github.com/alphajoop/quickstart-nextjs.git
   cd quickstart-nextjs
   pnpm install
   ```

2. **Start developing**
   ```bash
   pnpm dev
   ```
   Open [http://localhost:3000](http://localhost:3000)

## 🛠 Development Workflow

### Code Quality

- **Lint**: `pnpm lint`
- **Format**: `pnpm format`
- **Type Check**: `pnpm type-check`

### Git Hooks (via Husky)

- Pre-commit: Runs lint-staged
- Pre-push: Runs type checking

### Automated Updates

- **Renovate**: Automatically updates dependencies
- **GitHub Actions**: Runs on every push/pull request
  - Linting
  - Type checking
  - Build verification

## 🚀 Deployment

### Vercel (Recommended)

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https%3A%2F%2Fgithub.com%2Falphajoop%2Fquickstart-nextjs)

### Other Platforms

- [Netlify](https://www.netlify.com/with/nextjs/)
- [AWS](https://aws.amazon.com/amplify/)
- [Railway](https://railway.app/)

## 📚 Documentation

- [Next.js](https://nextjs.org/docs)
- [shadcn/ui](https://ui.shadcn.com/)
- [Tailwind CSS](https://tailwindcss.com/)
- [Radix UI](https://www.radix-ui.com/)

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

Distributed under the MIT License. See `LICENSE` for more information.

---

Built with ❤️ by [Alpha Diop](https://github.com/alphajoop)
