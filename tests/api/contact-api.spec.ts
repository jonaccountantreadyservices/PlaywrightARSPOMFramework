import {test } from '@playwright/test';
import { ContactApi } from '../../src/pom/contactApi';

test.describe('ARS Contact Get Request using POM', () => {
    test('should return 200 and expected HTML Content', async ({ request }) => {
        
        const contactApi = new ContactApi(request);
        const response = await contactApi.getContactPage();
        await contactApi.expectContactPageResponse(response);

    });
});