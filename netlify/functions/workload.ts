import { type AsyncWorkloadConfig, type AsyncWorkloadEvent, asyncWorkloadFn } from '@netlify/async-workloads'

export default asyncWorkloadFn(async (event: AsyncWorkloadEvent) => {
  console.log('Workload started')
  await event.step.sleep('1 min delay', 60 * 1000)
  console.log('Workload finished')
})

export const asyncWorkloadConfig: AsyncWorkloadConfig = {
  events: ['workload']
}