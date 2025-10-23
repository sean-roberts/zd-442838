import { AsyncWorkloadsClient } from '@netlify/async-workloads'
import type { Config } from '@netlify/functions'

export default async function() {
  await new AsyncWorkloadsClient().send('workload', {
    data: {
      sleepMessage: 'starting sleep sequence'
    }
  })

  return new Response(null, {
    status: 204
  })
}

export const config: Config = {
  path: '/run-workload'
}