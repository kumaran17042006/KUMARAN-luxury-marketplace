
import React, { Component, ErrorInfo, ReactNode } from 'react';

interface Props {
    children: ReactNode;
}

interface State {
    hasError: boolean;
    error?: Error;
}

class ErrorBoundary extends Component<Props, State> {
    public state: State = {
        hasError: false
    };

    public static getDerivedStateFromError(error: Error): State {
        return { hasError: true, error };
    }

    public componentDidCatch(error: Error, errorInfo: ErrorInfo) {
        console.error("Uncaught error:", error, errorInfo);
    }

    public render() {
        if (this.state.hasError) {
            return (
                <div className="min-h-screen bg-black flex flex-col items-center justify-center p-6 text-white text-center">
                    <h1 className="font-serif text-4xl mb-4 text-red-500">Something went wrong</h1>
                    <p className="max-w-md mb-8 text-gray-400">
                        We apologize for the inconvenience. Our engineering team has been notified.
                    </p>
                    <button
                        onClick={() => window.location.reload()}
                        className="px-6 py-3 bg-white text-black text-sm font-bold uppercase tracking-widest hover:bg-gray-200"
                    >
                        Reload Page
                    </button>

                    {process.env.NODE_ENV === 'development' && this.state.error && (
                        <pre className="mt-8 p-4 bg-gray-900 rounded text-left overflow-auto max-w-2xl text-xs text-red-300">
                            {this.state.error.toString()}
                        </pre>
                    )}
                </div>
            );
        }

        return this.props.children;
    }
}

export default ErrorBoundary;
