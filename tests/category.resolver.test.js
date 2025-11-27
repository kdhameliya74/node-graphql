import { makeExecutableSchema } from '@graphql-tools/schema';
import Category from '../src/schema/resolvers/category.resolver.js';
import typeDefs from '../src/schema/typeDefs/index.js';
import { graphql } from 'graphql';

jest.mock('../src/data/categories.js', () => ({
  CATEGORIES: [
    { id: 1, name: 'Mock Category 1' },
    { id: 2, name: 'Mock Category 2' },
    { id: 3, name: 'Mock Category 3' },
  ],
}));

jest.mock('../src/data/posts.js', () => ({
  POSTS: [
    { id: 1, title: 'Post 1', categoryId: 1 },
    { id: 2, title: 'Post 2', categoryId: 1 },
    { id: 3, title: 'Post 3', categoryId: 2 },
  ],
}));

const schema = makeExecutableSchema({
  typeDefs,
  resolvers: { Query: Category.Query, Category: Category.Category },
});

describe('category resolver', () => {
  it('returns paginated categories with total and hasNext', async () => {
    const query = `
      query {
        categories(limit: 2, page: 1) {
          items { id name }
          total
          hasNext
        }
      }
    `;
    const result = await graphql({ schema, source: query });
    expect(result.data.categories.total).toBe(3);
    expect(result.data.categories.items.length).toBe(2);
    expect(result.data.categories.hasNext).toBe(true);
  });

  it('returns a single category with posts', async () => {
    const query = `
      query {
        category(id: 1) {
          items {
            id
            name
            posts { id title }
          }
        }
      }
    `;
    const result = await graphql({ schema, source: query });
    expect(result.data.category.items[0].id).toBe('1');
    expect(result.data.category.items[0].posts.length).toBe(2);
    expect(result.data.category.items[0].posts[0].title).toBe('Post 1');
  });

  it('returns empty items array for non-existent category', async () => {
    const query = `
      query {
        category(id: 99) {
          items { id name }
        }
      }
    `;
    const result = await graphql({ schema, source: query });
    expect(result.data.category.items).toEqual([]);
  });
});
