import { extractVariablesFromUrl } from '../src/urlParser.js';

describe('extractVariablesFromUrl', () => {
  it('format and instance provided returns expected object', () => {
    const result = extractVariablesFromUrl(
      '/:version/api/:collection/:id',
      '/6/api/listings/3?sort=desc&limit=10',
    );

    expect(result).toMatchObject({
      version: 6,
      collection: 'listings',
      id: 3,
      sort: 'desc',
      limit: 10,
    });
  });

  it('instance with variables in url but with no params returns object with variables', () => {
    const result = extractVariablesFromUrl('/:version/api/:collection/:id', '/6/api/listings/3');
    expect(result).toMatchObject({
      version: 6,
      collection: 'listings',
      id: 3,
    });
  });

  it('instance with params but with no variables in url returns object with params', () => {
    const result = extractVariablesFromUrl(
      '/version/api/collection/id',
      '/version/api/collection/id?sort=desc&limit=10',
    );
    expect(result).toMatchObject({
      sort: 'desc',
      limit: 10,
    });
  });

  it('no format and instance only with params returns object with params', () => {
    const result = extractVariablesFromUrl('', '?sort=desc&limit=10');
    expect(result).toMatchObject({
      sort: 'desc',
      limit: 10,
    });
  });

  it('no format and no instance returns empty object', () => {
    const result = extractVariablesFromUrl('', '');
    expect(result).toMatchObject({});
  });
});
