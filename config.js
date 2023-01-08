import getConfig from 'next/config';
import { publicRuntimeConfig } from './next.config';

export const API = publicRuntimeConfig.PRODUCTION ? 'http://seoblog.com' : 'http://localhost:8000';
