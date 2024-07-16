'use client'

import { SuccessModal } from '@/features/subscriptions/components/success-modal'
import { FailModal } from '@/features/subscriptions/components/fail-modal'
import { SubscriptionModal } from '@/features/subscriptions/components/subscription-modal'

export const Modals = () => {
  return (
    <>
      <FailModal />
      <SuccessModal />
      <SubscriptionModal />
    </>
  )
}
