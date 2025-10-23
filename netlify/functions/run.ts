import { AsyncWorkloadsClient } from '@netlify/async-workloads'
import type { Config } from '@netlify/functions'

export default async function() {
  const client = new AsyncWorkloadsClient();
  await client.send('workload');

  return new Response(null, {
    status: 204
  })
}

export const config: Config = {
  path: '/run-workload'
}