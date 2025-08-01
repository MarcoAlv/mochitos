const config = {
  API_URL: process.env.NEXT_PUBLIC_API_BASE_URL!,
  PROJECT_URL: process.env.NEXT_PUBLIC_BASE_URL!,
};

export const { PROJECT_URL, API_URL } = config;
export default config;