import { PrismaClient, User } from '@prisma/client';
import { ExpressContext } from 'apollo-server-express';
import { Request, Response } from 'express';
import { prismaClient } from './clients';

export interface Context {
  request: Request;
  response: Response;
  prisma: PrismaClient;
  user: User | null;
}

export async function createContext(
  request: ExpressContext
): Promise<Partial<Context>> {
  const context: Context = {
    ...request,
    response: request.res,
    request: request.req,
    prisma: prismaClient,
    user: null,
  };

  return context;
}
