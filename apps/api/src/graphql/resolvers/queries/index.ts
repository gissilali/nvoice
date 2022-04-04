import { list, nonNull, nullable, queryField, queryType } from 'nexus';
import { FindAccountInput, FindUserInput } from '../inputs';
import { Account, User } from '../models';
export const HelloWorld = queryType({
  definition(t) {
    t.string('hello', {
      resolve: () => 'Are niggas in paris?',
    });
  },
});

export const UserQuery = queryField('user', {
  type: User,
  args: {
    input: nonNull(FindUserInput),
  },
  resolve: (_root, args: { input }, ctx) => {
    console.log({ args });
    return ctx.prisma.user.findUnique({
      where: {
        ...args.input,
      },
    });
  },
});

export const AccountQuery = queryField('account', {
  type: Account,
  args: {
    input: nonNull(FindAccountInput),
  },
  resolve: (_root, args: { input }, ctx) => {
    return ctx.prisma.account.findUnique({
      where: {
        ...args.input,
      },
    });
  },
});

export const UserAccountQuery = queryField('userAccounts', {
  type: nonNull(list(nonNull(Account))),
  resolve: (_root, args, ctx) => {
    return ctx.prisma.account.findMany({});
  },
});
