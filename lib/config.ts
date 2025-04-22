const config = {
  env: {
    clerk: {
      publishableKey: process.env.NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY,
      secretKey: process.env.CLERK_SECRET_KEY,
      signInUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_IN_URL,
      signUpUrl: process.env.NEXT_PUBLIC_CLERK_SIGN_UP_URL,
    },
    vapi: {
      workflowId: process.env.NEXT_PUBLIC_VAPI_WORKFLOW_ID,
      apiKey: process.env.NEXT_PUBLIC_VAPI_API_KEY
    },
    convex: {
      deployment: process.env.CONVEX_DEPLOYMENT,
      url: process.env.NEXT_PUBLIC_CONVEX_URL,
    },
  }
}
export default config


