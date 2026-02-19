export type CreatePaymentInput = {
  amount: number;
  email: string;
  phone: string;
  description: string;
};

export type CreatePaymentOutput = {
  redirectUrl: string;
  paymentId: string;
};

export interface PaymentsProvider {
  createPayment(input: CreatePaymentInput): Promise<CreatePaymentOutput>;
  handleWebhook(payload: unknown): Promise<{ status: string; paymentId?: string }>;
}

export class MockPaymentsProvider implements PaymentsProvider {
  async createPayment(): Promise<CreatePaymentOutput> {
    return {
      redirectUrl: 'https://mock-payments.local/redirect/mock-payment-id',
      paymentId: 'mock-payment-id'
    };
  }

  async handleWebhook(): Promise<{ status: string; paymentId?: string }> {
    return { status: 'SUCCEEDED', paymentId: 'mock-payment-id' };
  }
}

export class TBankProvider implements PaymentsProvider {
  async createPayment(): Promise<CreatePaymentOutput> {
    // TODO: integrate with T-Bank Init endpoint using terminal key/password from env
    throw new Error('TBankProvider.createPayment is not implemented');
  }

  async handleWebhook(): Promise<{ status: string; paymentId?: string }> {
    // TODO: validate signature according to T-Bank webhook spec and map statuses
    throw new Error('TBankProvider.handleWebhook is not implemented');
  }
}
