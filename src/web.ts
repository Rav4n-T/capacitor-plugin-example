import { WebPlugin } from '@capacitor/core';

import type { ExamplePlugin, OpenMapOptions } from './definitions';

export class ExampleWeb extends WebPlugin implements ExamplePlugin {
  async echo(options: { value: string }): Promise<{ value: string }> {
    console.log('ECHO', options);
    return options;
  }
  async openMap(location: OpenMapOptions): Promise<void> {
    console.log('openMap', location);
    return;
  }
}
