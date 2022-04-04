import { declarativeWrappingPlugin, makeSchema } from 'nexus';
import { Query } from './Query';
import * as path from 'path';
import { applyMiddleware } from 'graphql-middleware';

export const getSchema = applyMiddleware(
  makeSchema({
    types: [Query],
    plugins: [declarativeWrappingPlugin({ disable: true })],
    outputs: {
      schema: path.join(process.cwd(), 'schema.graphql'),
      typegen: path.join(process.cwd(), 'schema-typegen.ts'),
    },
  })
);
