import type { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.mcphub.app',
  appName: 'MCPHub',
  webDir: 'dist',
  server: {
    url: 'https://run.app',
    cleartext: true
  }
};

export default config;
