export function otpEmailHtml(code: string): string {
  return `
    <div style="font-family: sans-serif; max-width: 400px; margin: 0 auto; padding: 24px;">
      <h2 style="color: #1a1d2e;">Bill Buddy</h2>
      <p>Your verification code is:</p>
      <div style="font-size: 32px; font-weight: bold; letter-spacing: 8px; text-align: center; padding: 16px; background: #f0f4ff; border-radius: 8px; margin: 16px 0;">
        ${code}
      </div>
      <p style="color: #666; font-size: 14px;">This code expires in 10 minutes. If you did not request this, you can safely ignore this email.</p>
    </div>
  `;
}
