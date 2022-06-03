export interface BuildConfig {
  apiHost: string;
}

export const BuildConfig: BuildConfig = {
  apiHost: import.meta.env.BK_API_HOST,
};
