import { createTRPCProxyClient, httpBatchLink } from '@trpc/client';
import { AppRouter } from '../../../my-server/src/main';

const trpc = createTRPCProxyClient<AppRouter>({
  links: [
    httpBatchLink({
      url: 'http://localhost:4444/trpc',
    }),
  ],
});
export default trpc;