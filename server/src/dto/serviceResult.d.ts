interface ServerResponse<T> {
  parse: T;
}

interface ErrorResponse {
  error: {
    code: string;
    info: string;
    docref: string;
  },
  servedby?: string;
}