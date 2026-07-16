/**
 * Lesson 1: Example behavioral tests
 *
 * These tests verify the user's implementation actually works.
 * They're written in Vitest (TypeScript) and run in an isolated
 * temp directory by the 100xSystems CLI test-runner.
 */
import { describe, it, expect } from 'vitest';
import { execSync } from 'child_process';
import fs from 'fs';
import path from 'path';

const PROJECT = process.cwd();

describe('Lesson 1: Getting Started', () => {
  it('has a package.json (lesson 1)', () => {
    const pkgPath = path.join(PROJECT, 'package.json');
    expect(fs.existsSync(pkgPath)).toBe(true);
    const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf-8'));
    expect(pkg.scripts?.build).toBeDefined();
  });

  it('builds successfully (lesson 1)', () => {
    const result = execSync('npm run build', {
      cwd: PROJECT,
      encoding: 'utf-8',
      timeout: 60000,
    });
    expect(result).toBeDefined();
  });
});
