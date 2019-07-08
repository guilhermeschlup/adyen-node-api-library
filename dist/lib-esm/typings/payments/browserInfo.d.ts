/**
 * Adyen Payment Service
 * A set of API endpoints that allow you to initiate, settle, and modify payments on the Adyen payments platform. You can use the API to accept card payments (including One-Click and 3D Secure), bank transfers, ewallets, and many other payment methods.  To learn more about the API, visit [Classic integration](https://docs.adyen.com/classic-integration).  ## Authentication To connect to the Payments API, you must use your basic authentication credentials. For this, create your web service user, as described in [How to get the WS user password](https://docs.adyen.com/user-management/how-to-get-the-web-service-ws-user-password). Then use its credentials to authenticate your request, for example:  ``` curl -U \"ws@Company.YourCompany\":\"YourWsPassword\" \\ -H \"Content-Type: application/json\" \\ ... ``` Note that when going live, you need to generate new web service user credentials to access the [live endpoints](https://docs.adyen.com/development-resources/live-endpoints).  ## Versioning Payments API supports versioning of its endpoints through a version suffix in the endpoint URL. This suffix has the following format: \"vXX\", where XX is the version number.  For example: ``` https://pal-test.adyen.com/pal/servlet/Payment/v46/authorise ```
 *
 * OpenAPI spec version: 46
 * Contact: support@adyen.com
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
export interface BrowserInfo {
    /**
     * The accept header value of the shopper's browser.
     */
    acceptHeader: string;
    /**
     * The color depth of the shopper's browser in bits per pixel. This should be obtained by using the browser's `screen.colorDepth` property. Accepted values: 1, 4, 8, 15, 16, 24, 32 or 48 bit color depth.
     */
    colorDepth: number;
    /**
     * Boolean value indicating if the shopper's browser is able to execute Java.
     */
    javaEnabled: boolean;
    /**
     * Boolean value indicating if the shopper's browser is able to execute JavaScript. A default 'true' value is assumed if the field is not present.
     */
    javaScriptEnabled?: boolean;
    /**
     * The `navigator.language` value of the shopper's browser (as defined in IETF BCP 47).
     */
    language: string;
    /**
     * The total height of the shopper's device screen in pixels.
     */
    screenHeight: number;
    /**
     * The total width of the shopper's device screen in pixels.
     */
    screenWidth: number;
    /**
     * Time difference between UTC time and the shopper's browser local time, in minutes.
     */
    timeZoneOffset: number;
    /**
     * The user agent value of the shopper's browser.
     */
    userAgent: string;
}