import { test } from "@playwright/test";
import { HomeApi } from "../../src/pom/homeApi";

test.describe('ARS Home Get Request using POM', () => {
    test('should return 200 and expected HTML Content', async ({ request }) => {
        const homeApi = new HomeApi(request);
        const response = await homeApi.getHomePage();
        await homeApi.expectHomePageResponse(response);
    });
});    