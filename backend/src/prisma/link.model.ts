import { Prisma } from '@prisma/client';

export interface LinkCreateInput extends Prisma.LinkCreateInput {
  urlEncurtada: string;
  urlOriginal: string;
}