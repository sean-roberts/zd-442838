import { type AsyncWorkloadConfig, type AsyncWorkloadEvent, asyncWorkloadFn } from '@netlify/async-workloads'

export default asyncWorkloadFn(async (event: AsyncWorkloadEvent<{
  eventData: {
    sleepMessage: string
  }
  eventName: 'workload'
}>) => {
  console.log(event.eventData.sleepMessage)
  await event.step.sleep('sleep_30_seconds', 30 * 1000)
  console.log('after 30 seconds sleeping')
  await event.step.sleep('sleep_60_seconds', 60 * 1000)
  console.log('after 60 seconds sleeping')
})

export const asyncWorkloadConfig: AsyncWorkloadConfig = {
  events: ['workload']
}