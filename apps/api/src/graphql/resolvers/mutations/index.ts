import { mutationField, nonNull, nullable } from 'nexus';
import { CreateUserInput } from '../inputs';
import { User } from '../models';

export const UserMutation = mutationField('user', {
  type: nullable(User),
  args: {
    input: nonNull(CreateUserInput),
  },
  resolve: async (_root, args, ctx) => {
    return ctx.prisma.user.create({
      data: {
        ...args.input,
      },
    });
  },
});
