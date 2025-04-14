import { ErrorReporting } from '@google-cloud/error-reporting';

const errorsClient = new ErrorReporting({
  projectId: process.env.GCP_PROJECT_ID,
  credentials: {
    client_email: process.env.GCP_CLIENT_EMAIL,
    private_key: process.env.GCP_PRIVATE_KEY?.replace(/\\n/g, '\n'),
  },
});

export const reportError = (error: Error, context: Record<string, any> = {}) => {
  console.error(error, context);
  
  if (process.env.NODE_ENV === 'production') {
    errorsClient.report(error, context);
  }
};

export class AppError extends Error {
  constructor(
    message: string,
    public readonly code: string,
    public readonly details?: any
  ) {
    super(message);
    this.name = 'AppError';
  }
}