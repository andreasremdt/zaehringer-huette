declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URI: string;
    DATABASE_NAME: string;
    DATABASE_APP_NAME: string;
    NEXT_PUBLIC_SERVER_URL: string;
    PAYLOAD_SECRET: string;
  }
}
