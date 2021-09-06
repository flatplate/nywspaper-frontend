type Story = {
  id: number;
  title: string;
  description: string;
  image: string | null;
  importance: number;
  articles: number[];
};

export type {Story};
