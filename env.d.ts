declare namespace NodeJS {
  interface ProcessEnv {
    NEXT_PUBLIC_SERVER_URL: string;
    DATABASE_URI: string;
    PAYLOAD_SECRET: string;
  }
}
