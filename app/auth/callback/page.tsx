import { Suspense } from "react"
import AuthCallbackClient from "./callback-client"

export default function CallbackPageWrapper() {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <AuthCallbackClient />
    </Suspense>
  )
}