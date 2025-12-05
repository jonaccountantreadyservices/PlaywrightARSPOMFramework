import { APIRequest, expect, APIResponse, test, APIRequestContext } from "@playwright/test";

export class ContactApi {
    private readonly contactPath = '/contact/';

    constructor(private readonly request: APIRequestContext) { }

    async getContactPage(): Promise<APIResponse> {
        // baseURL from playwright.config.ts is applied automatically
        console.log(`GET ${this.contactPath}`);
        const response = await this.request.get(this.contactPath);
        console.log(`Status: ${response.status()}`);
        return response;
    }

    async expectContactPageResponse(response: APIResponse): Promise<void> {
        console.log('Validating contact page response...');

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        
        const contentType = response.headers()['content-type'];
        expect(contentType).toContain('text/html');

        const body = await response.text();
        console.log('Body preview:', body.slice(0, 200));
        expect(body).toContain('Contact Us');
    }

}