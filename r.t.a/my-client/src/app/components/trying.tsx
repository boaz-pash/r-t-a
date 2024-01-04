// import { trpc } from '../utils/trpc';
// export default function IndexPage() {
//  const helloQuery = trpc.hello.useQuery({ name: 'Bob' });
//  const goodbyeMutation = trpc.goodbye.useMutation();
//  return (
//   <div>
//    <p>{helloQuery.data?.greeting}</p>
//    <button onClick={() => goodbyeMutation.mutate()}>Say Goodbye</button>
//   </div>
//  );
// }