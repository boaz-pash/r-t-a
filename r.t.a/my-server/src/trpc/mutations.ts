import { publicProcedure, router } from '.';

const mutationsRouter = router({
  createEvent: publicProcedure.mutation(() => {
    return 'should create an event';
  }),
});
export default mutationsRouter;
