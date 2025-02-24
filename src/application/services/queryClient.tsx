import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";

/**
 * A configured instance of `QueryClient` for React Query.
 *
 * This client is pre-configured with default options for queries. Specifically:
 * - `refetchOnWindowFocus: false` disables automatic refetching when the window is focused.
 * - `staleTime: 24 * 60 * 60 * 1000` sets the cache to remain fresh for 24 hours.
 */
export const client = new QueryClient({
  defaultOptions: {
    queries: {
      refetchOnWindowFocus: false,
      staleTime: 24 * 60 * 60 * 1000,
    },
  },
});

/**
 * React component that provides the configured `QueryClient` to the app using React Query.
 *
 * This component wraps the application in a `QueryClientProvider` that supplies the `client` instance,
 * enabling React Query's functionality for fetching, caching, and synchronizing server data.
 *
 * @param children - The child components to render within the `QueryClientProvider`.
 *
 * @returns A provider component that passes down the `QueryClient` instance to the rest of the app.
 */
const RQProvider = ({ children }: { children: ReactNode }) => {
  return <QueryClientProvider client={client}>{children}</QueryClientProvider>;
};

export default RQProvider;
