import { declarativeWrappingPlugin, makeSchema } from 'nexus';
import * as path from 'path';
import { applyMiddleware } from 'graphql-middleware';
import * as types from './resolvers';
import { __currentAppDir } from '../utils';

export const getSchema = applyMiddleware(
  makeSchema({
    types,
    plugins: [declarativeWrappingPlugin({ disable: true })],
    outputs: {
      schema: path.join(__currentAppDir, 'schema.graphql'),
      typegen: path.join(__currentAppDir, 'schema-typegen.ts'),
    },
  })
);
