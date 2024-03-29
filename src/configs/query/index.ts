import { QueryClient } from "@tanstack/react-query";

const globalQueryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // TODO: GlobalErrorBoundary에 감지 되면 안되는 에러 조건 처리
      useErrorBoundary: (error) => true,
      suspense: true,
    },
  },
});

export function getGlobalQueryClient(): QueryClient {
  return globalQueryClient;
}
