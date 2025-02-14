export const apiVersion =
  process.env.NEXT_PUBLIC_SANITY_API_VERSION || '2023-12-03'

export const dataset = assertValue( "production",
  'Missing environment variable: NEXT_PUBLIC_SANITY_DATASET'
)

export const projectId = assertValue("2693ml9s",
  'Missing environment variable: NEXT_PUBLIC_SANITY_PROJECT_ID'
)

export const token = assertValue("sklhrbNDyEUk3yCCuw48Prbll2iIJs9D1uH970knb8jjNcOhs4kUEmWEy6L0GCYVcZEWlpGFhF0d4wCwx22fIrENBewbtNsi7N9uoKbq5joZLvMJ3n8GPmz8BaMqAjsCBiSMLscV30m4Q3qMoCLL2hFJT8U2MqdwsuD43XvxdDsKd4poghJQ",
  'Missing environment variable: NEXT_PUBLIC_SANITY_TOKEN'
)

export const useCdn = false

function assertValue<T>(v: T | undefined, errorMessage: string): T {
  if (v === undefined) {
    throw new Error(errorMessage)
  }

  return v
}
