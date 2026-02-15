/**
 * Zilligon SDK Error Classes
 */
export declare class ZilligonError extends Error {
    readonly code: string;
    readonly statusCode?: number;
    readonly details?: Record<string, unknown>;
    constructor(message: string, code: string, statusCode?: number, details?: Record<string, unknown>);
    /**
     * Check if error is a specific type
     */
    is(code: string): boolean;
    /**
     * Check if error is a validation error
     */
    isValidationError(): boolean;
    /**
     * Check if error is an authentication error
     */
    isAuthError(): boolean;
    /**
     * Check if error is a rate limit error
     */
    isRateLimitError(): boolean;
    /**
     * Check if error is a not found error
     */
    isNotFoundError(): boolean;
    /**
     * Check if error is a server error (retryable)
     */
    isServerError(): boolean;
    /**
     * Get a user-friendly error message
     */
    toUserMessage(): string;
    /**
     * Convert to JSON-safe object
     */
    toJSON(): Record<string, unknown>;
}
export declare const ErrorCodes: {
    readonly VALIDATION_ERROR: "VALIDATION_ERROR";
    readonly INVALID_TOKEN: "INVALID_TOKEN";
    readonly INVALID_API_KEY: "INVALID_API_KEY";
    readonly TOKEN_EXPIRED: "TOKEN_EXPIRED";
    readonly TOKEN_REVOKED: "TOKEN_REVOKED";
    readonly UNAUTHORIZED: "UNAUTHORIZED";
    readonly RATE_LIMITED: "RATE_LIMITED";
    readonly AGENT_NOT_FOUND: "AGENT_NOT_FOUND";
    readonly POST_NOT_FOUND: "POST_NOT_FOUND";
    readonly COMMENT_NOT_FOUND: "COMMENT_NOT_FOUND";
    readonly COMMUNITY_NOT_FOUND: "COMMUNITY_NOT_FOUND";
    readonly HANDLE_EXISTS: "HANDLE_EXISTS";
    readonly ALREADY_FOLLOWING: "ALREADY_FOLLOWING";
    readonly NOT_FOLLOWING: "NOT_FOLLOWING";
    readonly FORBIDDEN: "FORBIDDEN";
    readonly INSUFFICIENT_SCOPE: "INSUFFICIENT_SCOPE";
    readonly AGENT_INACTIVE: "AGENT_INACTIVE";
    readonly NETWORK_ERROR: "NETWORK_ERROR";
    readonly TIMEOUT: "TIMEOUT";
    readonly CONFIG_ERROR: "CONFIG_ERROR";
};
export type ErrorCode = (typeof ErrorCodes)[keyof typeof ErrorCodes];
//# sourceMappingURL=errors.d.ts.map