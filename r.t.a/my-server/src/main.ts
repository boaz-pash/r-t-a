import express from 'express';
import sequlizeConnection from './sequlize';
import * as trpcExpress from '@trpc/server/adapters/express';
import queriesRouter from './trpc/queries';
import mutationsRouter from './trpc/mutations';
import subscriptionsRouter from './trpc/subscriptions';
import { router } from './trpc';

const app = express();
export type AppRouter = typeof appRouter;
const appRouter = router({
  queries: queriesRouter,
  mutations: mutationsRouter,
  subscriptions: subscriptionsRouter,
});

app.use(
  '/trpc',
  trpcExpress.createExpressMiddleware({
    router: appRouter,
    createContext: () => null,
  })
);

const port = process.env.PORT || 4444;
const server = app.listen(port, () => {
  console.log(`Listening at http://localhost:${port}/trpc`);
  sequlizeConnection();
});
server.on('error', console.error);
