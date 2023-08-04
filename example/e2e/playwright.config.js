import Config from '@internals/playwright-config'
import { defineConfig, devices } from '@playwright/test';
  
export default defineConfig(Config({
  testDir: '../docs',
  port: 7126
}))
