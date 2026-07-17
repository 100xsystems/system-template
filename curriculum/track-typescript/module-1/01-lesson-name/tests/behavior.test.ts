/**
 * Lesson 1: [Lesson Name]
 *
 * Behavioral tests that verify the user's implementation.
 * Uses @100xsystems/test-suite-typescript for shared test helpers.
 */
import { describe, it, expect, fileExists, readJson, expectBuildSucceeds } from '@100xsystems/test-suite-typescript';

describe('Lesson 1: [Lesson Name]', () => {

  it('has a package.json with build script', () => {
    expect(fileExists('package.json')).toBe(true);
    const pkg = readJson('package.json');
    expect(pkg.scripts?.build).toBeDefined();
  });

  it('builds successfully with npm run build', () => {
    expectBuildSucceeds();
  });
});
