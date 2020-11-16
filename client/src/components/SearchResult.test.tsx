import React from 'react';
import { MockedProvider, MockedResponse } from '@apollo/client/testing';
import SearchResult, { ARTICLE_QUERY } from './SearchResult';
import { render, findByTestId, queryAllByTestId, findByText, queryAllByAltText, findByDisplayValue } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect'

test('It must render without Exeception when article is null', () => {
  const mockObject: ReadonlyArray<MockedResponse<Record<string, ArticleViewModel | null>>> = [
    {
      request: {
        query: ARTICLE_QUERY,
        variables: {
          page: 'Test',
        },
      },
      result: {
        data: {
          article: null,
        },
      }
    },
  ];

  render(
    <MockedProvider mocks={mockObject} >
      <SearchResult page="Test" />
    </MockedProvider>
  );
});

test('It must render when article just have title', async () => {
  const mockObject: ReadonlyArray<MockedResponse<Record<string, ArticleViewModel | null>>> = [
    {
      request: {
        query: ARTICLE_QUERY,
        variables: {
          page: 'Test',
        },
      },
      result: {
        data: {
          article: {
            title: "Test",
            sections: [],
            categories: []
          },
        },
      }
    },
  ];

  const { container } = render(
    <MockedProvider mocks={mockObject}>
      <SearchResult page="Test" />
    </MockedProvider>
  );
  const articleElement = await findByTestId(container, 'article');
  expect(articleElement).toBeInTheDocument();

  const title = findByText(container, 'Test');
  expect(title).toBeTruthy();
});

test('It must not render any Category when category array is empty', async () => {
  const mockObject: ReadonlyArray<MockedResponse<Record<string, ArticleViewModel>>> = [
    {
      request: {
        query: ARTICLE_QUERY,
        variables: {
          page: 'Test',
        },
      },
      result: {
        data: {
          article: {
            title: 'Test',
            sections: [],
            categories: []
          },
        },
      }
    },
  ];
  const { container } = render(
    <MockedProvider mocks={mockObject}>
      <SearchResult page="Test" />
    </MockedProvider>
  );

  const articleElement = await findByTestId(container, 'article');
  const CategoryElement = await queryAllByTestId(articleElement, 'category')
  expect(CategoryElement).toHaveLength(0);
})

test('It must render  two categories', async () => {
  const mockObject: ReadonlyArray<MockedResponse<Record<string, ArticleViewModel>>> = [
    {
      request: {
        query: ARTICLE_QUERY,
        variables: {
          page: 'Test',
        },
      },
      result: {
        data: {
          article: {
            title: 'Test',
            sections: [],
            categories: ['Category 1', 'Category 2']
          },
        },
      }
    },
  ];
  const { container } = render(
    <MockedProvider mocks={mockObject}>
      <SearchResult page="Test" />
    </MockedProvider>
  );

  const categoryElement = await findByTestId(container, 'category');
  expect(categoryElement).toBeInTheDocument();

  const title =await findByText(container, 'Test');
  expect(title).toBeTruthy();

  const category1 =await findByText(container, 'Category 1');
  expect(category1).toBeTruthy();

  const category2 = await findByText(container, 'Category 2');
  expect(category2).toBeTruthy();

})

test('It must render three sections and two titles because title also use in Component Tree', async () => {
  const mockObject: ReadonlyArray<MockedResponse<Record<string, ArticleViewModel>>> = [
    {
      request: {
        query: ARTICLE_QUERY,
        variables: {
          page: 'Test',
        },
      },
      result: {
        data: {
          article: {
            title: 'Test',
            sections: [{
              id: '1',
              title: 'Section1',
              indentLevel: 1
            },
            {
              id: '2',
              title: 'Section2',
              indentLevel: 2
            },
            {
              id: '3',
              title: 'Section1',
              indentLevel: 3
            }],
            categories: []
          },
        },
      }
    },
  ];
  const { container } = render(
    <MockedProvider mocks={mockObject}>
      <SearchResult page="Test" />
    </MockedProvider>
  );

  const categoryElement = await findByTestId(container, 'ContentTree');
  expect(categoryElement).toBeTruthy()

  const title =await queryAllByAltText(container, 'Test');
  expect(title).toBeTruthy();

  const section1 =await queryAllByAltText(container, 'Section1');
  expect(section1).toBeTruthy();

  const section2 =await queryAllByAltText(container, 'Section2');
  expect(section2).toBeTruthy();

  const section3 =await queryAllByAltText(container, 'Section3');
  expect(section3).toBeTruthy();

})

test('It must not render any Section when section array is empty', async () => {
  const mocks: ReadonlyArray<MockedResponse<Record<string, ArticleViewModel>>> = [
    {
      request: {
        query: ARTICLE_QUERY,
        variables: {
          page: 'Test',
        },
      },
      result: {
        data: {
          article: {
            title: 'Test',
            sections: [],
            categories: ['Category 1', 'Category 2']
          },
        },
      }
    },
  ];
  const { container } = render(
    <MockedProvider mocks={mocks}>
      <SearchResult page="Test" />
    </MockedProvider>
  );

  const articleElement = await findByTestId(container, 'article');
  const ContentTreeElement = await queryAllByTestId(articleElement, 'ContentTree')
  expect(ContentTreeElement).toHaveLength(0);
})