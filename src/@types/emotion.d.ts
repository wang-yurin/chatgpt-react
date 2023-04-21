import { SerializedStyles } from '@emotion/react';

interface ColorsType {
  [key: string]: string;
}

type FlexType = Record<'row' | 'column', SerializedStyles>;

interface MqType {
  laptop: string;
  tablet: string;
  mobile: string;
}

declare module '@emotion/react' {
  export interface Theme {
    colors: ColorsType;
    flex: FlexType;
    mq: MqType;
  }
}
