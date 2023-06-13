import { relations } from 'drizzle-orm';
import {
  bigint,
  datetime,
  mysqlTable,
  serial,
  uniqueIndex,
  varchar,
} from 'drizzle-orm/mysql-core';

// tables:
//  - channels
//    - id
//    - name
//  - posts
//    - id
//    - channel_id
//    - title
//    - content
//    - created_at
//    - author_id

export const channels = mysqlTable(
  'channels',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', {
      length: 20,
    }).notNull(),
  },
  (channels) => ({
    nameIndex: uniqueIndex('name_idx').on(channels.name),
  })
);

export const posts = mysqlTable(
  'posts',
  {
    id: serial('id').primaryKey(),
    channelId: varchar('channel_id', {
      length: 20,
    }).notNull(),
    title: varchar('title', {
      length: 100,
    }).notNull(),
    content: varchar('content', {
      length: 5000,
    }).notNull(),
    createdAt: datetime('created_at').notNull(),
    authorId: bigint('author_id', {
      mode: 'number',
    }).notNull(),
  },
  (posts) => ({
    channelIdIndex: uniqueIndex('channel_id_idx').on(posts.channelId),
    authorIdIndex: uniqueIndex('author_id_idx').on(posts.authorId),
  })
);

export const channelsRelations = relations(channels, ({ many }) => ({
  posts: many(posts),
}));

export const postsRelations = relations(posts, ({ one }) => ({
  channel: one(channels, {
    fields: [posts.channelId],
    references: [channels.id],
  }),
}));