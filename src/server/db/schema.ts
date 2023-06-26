import { relations } from "drizzle-orm";
import {
  int,
  mysqlTable,
  primaryKey,
  timestamp,
  varchar,
} from "drizzle-orm/mysql-core";
import { AdapterAccount } from "next-auth/adapters";

export const users = mysqlTable("users", {
  id: varchar("id", { length: 255 }).notNull().primaryKey(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  name: varchar("name", { length: 255 }),
  email: varchar("email", { length: 255 }).notNull(),
  emailVerified: timestamp("emailVerified", { mode: "date" }),
  image: varchar("image", { length: 255 }),
});

export const accounts = mysqlTable(
  "accounts",
  {
    userId: varchar("userId", { length: 255 }).notNull(),
    type: varchar("type", { length: 255 })
      .$type<AdapterAccount["type"]>()
      .notNull(),
    provider: varchar("provider", { length: 255 }).notNull(),
    providerAccountId: varchar("providerAccountId", { length: 255 }).notNull(),
    refresh_token: varchar("refresh_token", { length: 255 }),
    access_token: varchar("access_token", { length: 255 }),
    expires_at: int("expires_at"),
    refresh_token_expires_in: int("refresh_token_expires_in"),
    token_type: varchar("token_type", { length: 255 }),
    scope: varchar("scope", { length: 255 }),
    id_token: varchar("id_token", { length: 255 }),
    session_state: varchar("session_state", { length: 255 }),
  },
  (account) => ({
    compoundKey: primaryKey(account.provider, account.providerAccountId),
  })
);

export const sessions = mysqlTable("sessions", {
  sessionToken: varchar("sessionToken", { length: 255 }).notNull().primaryKey(),
  userId: varchar("userId", { length: 255 }).notNull(),
  expires: timestamp("expires", { mode: "date" }).notNull(),
});

export const verificationTokens = mysqlTable(
  "verificationToken",
  {
    identifier: varchar("identifier", { length: 255 }).notNull(),
    token: varchar("token", { length: 255 }).notNull(),
    expires: timestamp("expires", { mode: "date" }).notNull(),
  },
  (vt) => ({
    compoundKey: primaryKey(vt.identifier, vt.token),
  })
);

export const posts = mysqlTable("posts", {
  id: int("id").notNull().primaryKey().autoincrement(),
  createdAt: timestamp("created_at").defaultNow(),
  updatedAt: timestamp("updated_at").onUpdateNow(),
  message: varchar("message", { length: 255 }).notNull(),
  userId: varchar("userId", { length: 255 }).notNull(),
  responseTo: int("response_to"),
  repostOf: int("repost_of"),
});

export const postRelations = relations(posts, ({ one }) => ({
  userId: one(users, { fields: [posts.userId], references: [users.id] }),
  responseTo: one(posts, {
    fields: [posts.responseTo],
    references: [posts.id],
  }),
  repostOf: one(posts, { fields: [posts.repostOf], references: [posts.id] }),
}));
