/// <reference types="vite/client" />

interface ImportMetaEnv {
  // Add you build environments here.
  readonly BK_DEBUG: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
