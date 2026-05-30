import { jest, describe, test, expect } from '@jest/globals';
import { getReports } from './reportEngine.js';

jest.setTimeout(10000);

describe('CityFix - Supabase E2E', () => {
  test('Debe obtener reportes desde Supabase', async () => {
    const reports = await getReports();

    console.log('Reportes obtenidos:', reports);

    expect(Array.isArray(reports)).toBe(true);
    expect(reports.length).toBeGreaterThan(0);

    expect(reports[0]).toHaveProperty('id');
    expect(reports[0]).toHaveProperty('title');
    expect(reports[0]).toHaveProperty('category');
    expect(reports[0]).toHaveProperty('votes');
  });
});