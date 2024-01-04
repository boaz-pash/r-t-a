import { publicProcedure, router } from '.';

const queriesRouter = router({
  myEvents: publicProcedure.query(() => {
    return "should return user's events";
  }),
});
export default queriesRouter;
