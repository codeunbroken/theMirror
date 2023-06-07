/* tslint:disable */
/* eslint-disable */
import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse, HttpContext } from '@angular/common/http';
import { BaseService } from '../base-service';
import { ApiConfiguration } from '../api-configuration';
import { StrictHttpResponse } from '../strict-http-response';
import { RequestBuilder } from '../request-builder';
import { Observable } from 'rxjs';
import { map, filter } from 'rxjs/operators';



/**
 * Apis for making Payments
 */
@Injectable({
  providedIn: 'root',
})
export class PaymentService extends BaseService {
  constructor(
    config: ApiConfiguration,
    http: HttpClient
  ) {
    super(config, http);
  }

  /**
   * Path part for operation paystackCallback
   */
  static readonly PaystackCallbackPath = '/paystack/{paystackId}/callback';

  /**
   * Verify Payment.
   *
   * Verify Paystack Payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paystackCallback()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackCallback$Response(params: {
    paystackId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.PaystackCallbackPath, 'get');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Verify Payment.
   *
   * Verify Paystack Payment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paystackCallback$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackCallback(params: {
    paystackId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.paystackCallback$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation registerPaystackPayment
   */
  static readonly RegisterPaystackPaymentPath = '/paystack/{paystackId}/process';

  /**
   * Register Payment.
   *
   * Register Paystack Payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `registerPaystackPayment()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerPaystackPayment$Response(params: {
    paystackId: string;
    body?: {
'payId'?: string;
'courseIds'?: Array<any>;
'lernerId'?: string;
'method'?: 'paystack' | 'paypal';
'referrer'?: string;
'paymentCode'?: number;
'amount'?: number;
}
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.RegisterPaystackPaymentPath, 'post');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
      rb.body(params.body, 'application/json');
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Register Payment.
   *
   * Register Paystack Payment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `registerPaystackPayment$Response()` instead.
   *
   * This method sends `application/json` and handles request body of type `application/json`.
   */
  registerPaystackPayment(params: {
    paystackId: string;
    body?: {
'payId'?: string;
'courseIds'?: Array<any>;
'lernerId'?: string;
'method'?: 'paystack' | 'paypal';
'referrer'?: string;
'paymentCode'?: number;
'amount'?: number;
}
  },
  context?: HttpContext

): Observable<void> {

    return this.registerPaystackPayment$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation paystackProcess
   */
  static readonly PaystackProcessPath = '/paystack/{paystackId}/process';

  /**
   * Process Payment.
   *
   * Process and Verify Paystack Payment
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `paystackProcess()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackProcess$Response(params: {
    paystackId: string;
  },
  context?: HttpContext

): Observable<StrictHttpResponse<void>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.PaystackProcessPath, 'patch');
    if (params) {
      rb.path('paystackId', params.paystackId, {});
    }

    return this.http.request(rb.build({
      responseType: 'text',
      accept: '*/*',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return (r as HttpResponse<any>).clone({ body: undefined }) as StrictHttpResponse<void>;
      })
    );
  }

  /**
   * Process Payment.
   *
   * Process and Verify Paystack Payment
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `paystackProcess$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  paystackProcess(params: {
    paystackId: string;
  },
  context?: HttpContext

): Observable<void> {

    return this.paystackProcess$Response(params,context).pipe(
      map((r: StrictHttpResponse<void>) => r.body as void)
    );
  }

  /**
   * Path part for operation getPaystackKey
   */
  static readonly GetPaystackKeyPath = '/paystack/key';

  /**
   * Get Paystack Key.
   *
   * Get paystack public key
   *
   * This method provides access to the full `HttpResponse`, allowing access to response headers.
   * To access only the response body, use `getPaystackKey()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaystackKey$Response(params?: {
  },
  context?: HttpContext

): Observable<StrictHttpResponse<{
'key'?: string;
}>> {

    const rb = new RequestBuilder(this.rootUrl, PaymentService.GetPaystackKeyPath, 'get');
    if (params) {
    }

    return this.http.request(rb.build({
      responseType: 'json',
      accept: 'application/json',
      context: context
    })).pipe(
      filter((r: any) => r instanceof HttpResponse),
      map((r: HttpResponse<any>) => {
        return r as StrictHttpResponse<{
        'key'?: string;
        }>;
      })
    );
  }

  /**
   * Get Paystack Key.
   *
   * Get paystack public key
   *
   * This method provides access only to the response body.
   * To access the full response (for headers, for example), `getPaystackKey$Response()` instead.
   *
   * This method doesn't expect any request body.
   */
  getPaystackKey(params?: {
  },
  context?: HttpContext

): Observable<{
'key'?: string;
}> {

    return this.getPaystackKey$Response(params,context).pipe(
      map((r: StrictHttpResponse<{
'key'?: string;
}>) => r.body as {
'key'?: string;
})
    );
  }

}
