# AnantNetra-Website-

## 🛠️ Developer Notes & Dependencies

### React 19 Peer Dependency Overrides
This project is built using **Next.js 16** and **React 19**. 

Currently, a few third-party libraries (e.g., `react-simple-maps`, `@react-three/fiber`) have peer dependencies strictly looking for React 18 (`react@^18.0.0`). 

To keep the project stable without runtime crashes:
1. **`overrides`** block is added in `package.json` to force these packages to use React 19.
2. **`.npmrc`** (`legacy-peer-deps=true`) is included for seamless CI/CD and Vercel deployments.

> **Note for Future Maintainers:** Once `react-simple-maps` and `@react-three/fiber` release official updates with React 19 peer support, test removing the `overrides` block from `package.json` and the `.npmrc` configuration.