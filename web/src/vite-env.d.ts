/// <reference types="vite/client" />
/// <reference types="vite-plugin-pages/client-react" />

interface ImportMetaEnv {
  // The backend API server witten in Go.
  readonly BK_API_HOST: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
