interface ServerRespone<T> {
    parse?: T;
    error?: ErrorResponse;
}

interface ErrorResponse {
    number: string;
    message: string;
}