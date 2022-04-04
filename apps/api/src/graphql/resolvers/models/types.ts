import { Kind } from 'graphql';
import { scalarType } from 'nexus';

export const DateTime = scalarType({
  name: 'DateTime',
  asNexusMethod: 'date',
  description: 'DateTime custom scalar type',
  parseValue(value) {
    return new Date(value);
  },
  serialize(value) {
    return value.getTime();
  },
  parseLiteral(ast) {
    if (ast.kind === Kind.INT) {
      return new Date(ast.value);
    }
    return null;
  },
});
