import {ICommonConfig} from '../models/common-config.interface';

export let config: ICommonConfig = {};
let isConfigSet = false;

export function setCommonConfig(commonConfig: ICommonConfig) {
  if (!isConfigSet) {
    config = commonConfig;
    isConfigSet = true;
  } else {
    console.warn('CommonConfig data has already been set. Ignoring subsequent calls to setCommonConfig.');
  }
}
