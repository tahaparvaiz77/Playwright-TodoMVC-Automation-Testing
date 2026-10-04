// @ts-check
import { defineConfig, devices } from '@playwright/test';

/**
 * @see https://playwright.dev/docs/test-configuration
 */
export default defineConfig({
  testDir: './tests',

  /* Max time one whole test can run (default was 30000) */
  timeout: 60 * 1000,

  /* Settings for expect() assertions */
  expect: {
    /* Max time each expect() waits for its condition */
    timeout: 10 * 1000,
  },

  /* Run tests in files in parallel */
  fullyParallel: true,

  /* Fail the build on CI if you accidentally left test.only in the source code. */
  forbidOnly: !!process.env.CI,

  /* Retry failed tests: 2 times on CI, 1 time locally */
  retries: process.env.CI ? 2 : 1,

  /* Fewer parallel workers = less load on your PC and the website */
  workers: process.env.CI ? 1 : 2,

  /* Reporter to use. See https://playwright.dev/docs/test-reporters */
  reporter: 'html',

  /* Shared settings for all the projects below. */
  use: {
    /* Max time for each action like click(), fill(), etc. */
    actionTimeout: 15 * 1000,

    /* Max time for page.goto() and other navigations */
    navigationTimeout: 30 * 1000,

    /* Collect trace when retrying the failed test. */
    trace: 'retain-on-failure',
    launchOptions: {
      /* Run tests in headless mode */
      slowMo: 200,
    },

    /* Extra help for finding the cause of failures */
    screenshot: 'only-on-failure',
    video: 'retain-on-failure',
  },

  /* Configure projects for major browsers */
  projects: [
    {
      name: 'chromium',
      use: { ...devices['Desktop Chrome'] },
    },

    {
      name: 'firefox',
      use: { ...devices['Desktop Firefox'] },
    },

    {
      name: 'webkit',
      use: { ...devices['Desktop Safari'] },
    },
  ],
});