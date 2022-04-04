import { objectType } from 'nexus';
import { DateTime } from './types';

export const User = objectType({
  name: 'User',
  definition(t) {
    t.id('id');
    t.string('name');
    t.string('password');
    t.string('email');
    t.string('phone');
    t.field('createdAt', {
      type: DateTime,
    });
    t.field('updatedAt', {
      type: DateTime,
    });
  },
});

export const Account = objectType({
  name: 'Account',
  definition(t) {
    t.string('id');
    t.string('name');
    t.field('user', {
      type: User,
    });
    t.field('createdAt', {
      type: DateTime,
    }),
      t.field('updatedAt', {
        type: DateTime,
      });
  },
});
