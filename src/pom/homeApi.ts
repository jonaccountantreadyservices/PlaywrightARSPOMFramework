import { APIResponse, expect, APIRequestContext } from "@playwright/test";

export class HomeApi {
    private readonly homePath = '/';

    constructor(private readonly request: APIRequestContext) { }

    async getHomePage(): Promise<APIResponse> {
        // baseURL from playwright.config.ts is applied automatically
        console.log(`GET ${this.homePath}`);
        const response = await this.request.get(this.homePath);
        console.log(`Status: ${response.status()}`);
        return response;
    }

    async expectHomePageResponse(response: APIResponse): Promise<void> {
        console.log('Validating home page response...');

        expect(response.ok()).toBeTruthy();
        expect(response.status()).toBe(200);
        const contentType = response.headers()['content-type'];
        expect(contentType).toContain('text/html');
        const body = await response.text();
        console.log('Body preview:', body.slice(0, 200));
      
        expect(body).toContain('Accountant Ready Services');
        expect(body).toContain("Bookkeeping & Business Support To Suit Your Business' Needs");
        expect(body).toContain('What We Do');
    }

}