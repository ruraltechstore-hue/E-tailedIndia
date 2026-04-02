import emailjs from '@emailjs/browser';

export const EMAILJS_SERVICE_ID = 'service_0sllxnn';
export const EMAILJS_TEMPLATE_ID = 'template_2972wav';
export const EMAILJS_PUBLIC_KEY = '0US2toiL7LJ858X7n';

let initialized = false;

export function initEmailJs(): void {
  if (initialized) return;
  emailjs.init({ publicKey: EMAILJS_PUBLIC_KEY });
  initialized = true;
}

export interface SendTemplateEmailParams {
  name: string;
  email: string;
  title: string;
  message: string;
}

export async function sendTemplateEmail({
  name,
  email,
  title,
  message,
}: SendTemplateEmailParams): Promise<void> {
  initEmailJs();
  const time = new Date().toISOString();
  await emailjs.send(
    EMAILJS_SERVICE_ID,
    EMAILJS_TEMPLATE_ID,
    { name, email, title, message, time },
    { publicKey: EMAILJS_PUBLIC_KEY }
  );
}
