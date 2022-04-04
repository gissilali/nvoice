import { inputObjectType } from 'nexus';

export const CreateUserInput = inputObjectType({
  name: 'CreateUserInput',
  definition(t) {
    t.string('name');
    t.string('email');
    t.string('password');
  },
});

export const FindUserInput = inputObjectType({
  name: 'FindUserInput',
  definition(t) {
    t.nonNull.int('id');
  },
});

export const FindAccountInput = inputObjectType({
  name: 'FindAccountInput',
  definition(t) {
    t.nonNull.int('id');
  },
});
