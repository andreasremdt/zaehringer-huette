declare namespace NodeJS {
  interface ProcessEnv {
    DATABASE_URI: string;
    DATABASE_NAME: string;
    DATABASE_APP_NAME: string;
    NEXT_PUBLIC_SERVER_URL: string;
    BLOB_READ_WRITE_TOKEN: string;
    EMAIL_SMTP_HOST: string;
    EMAIL_SMTP_USER: string;
    EMAIL_SMTP_PASSWORD: string;
  }
}
