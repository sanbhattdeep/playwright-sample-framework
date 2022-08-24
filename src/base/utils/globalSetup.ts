import {FullConfig } from '@playwright/test';
import dotenv from 'dotenv';

async function globalSetup(config: FullConfig) {
   
    if(process.env.TEST_ENV) {
        
        const result = dotenv.config({
            path: `src/resources/.env.${process.env.TEST_ENV}`,
            override: true
        })

        if (result.error) {
            throw result.error
          }
    }
}

export default globalSetup;