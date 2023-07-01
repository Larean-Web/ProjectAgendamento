/// <reference types="vite/client" />

interface ImportMetaEnv {
    readonly VITE_APP_TITLE: string;
    readonly VITE_APP_API: string;

    // mais variáveis de ambiente...
}
interface ImportMeta {
    readonly env: ImportMetaEnv;
}
