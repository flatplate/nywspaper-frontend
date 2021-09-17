import { Publisher } from './Publisher';

export type ArticleSummary = {
  image: string;
  title: string;
  description: string;
  id: number; // TODO this might be changed for a string id
  publisher: Publisher;
  publishTime: string; // TODO change this;
}