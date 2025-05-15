export type Hook = () => void | Promise<void>;

export type Plugin = {
  onStart?: Hook;
  onSuccess?: Hook;
  onFailure?: Hook;
};

export type Step = {
  run: string;
  onStart?: Hook;
  onSuccess?: Hook;
  onFailure?: Hook;
  plugins?: Plugin[];
};

export type Flow = {
  name: string;
  description?: string;
  steps: Step[];
};

export type Config = {
  flows: Flow[];
};

