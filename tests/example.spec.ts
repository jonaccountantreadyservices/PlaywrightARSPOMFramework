import { test, expect } from '@playwright/test';
import { text } from 'stream/consumers';

test('ARS Contact Get Request', async ({ request }) => {
  
  const response = await request.get('https://accountantreadyservices.com.au/contact/');
  const responseBody = await response.text();
  console.log(responseBody);

  expect(response.status()).toBe(200);
  expect(responseBody).toContain('Contact Us');

});

