import { useState } from "react";

import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "@/components/ui/input-otp";
import { ComponentPage } from "@/docs/component-page";

const code = `import {
  InputOTP,
  InputOTPGroup,
  InputOTPSeparator,
  InputOTPSlot,
} from "sand/ui/input-otp";

<InputOTP maxLength={6} aria-label="Verification code">
  <InputOTPGroup>
    <InputOTPSlot index={0} />
    <InputOTPSlot index={1} />
    <InputOTPSlot index={2} />
  </InputOTPGroup>
  <InputOTPSeparator />
  <InputOTPGroup>
    <InputOTPSlot index={3} />
    <InputOTPSlot index={4} />
    <InputOTPSlot index={5} />
  </InputOTPGroup>
</InputOTP>`;

function OTPExample() {
  const [value, setValue] = useState("731842");
  return (
    <InputOTP
      maxLength={6}
      value={value}
      onChange={setValue}
      aria-label="Verification code"
    >
      <InputOTPGroup>
        <InputOTPSlot index={0} />
        <InputOTPSlot index={1} />
        <InputOTPSlot index={2} />
      </InputOTPGroup>
      <InputOTPSeparator />
      <InputOTPGroup>
        <InputOTPSlot index={3} />
        <InputOTPSlot index={4} />
        <InputOTPSlot index={5} />
      </InputOTPGroup>
    </InputOTP>
  );
}

export function InputOTPPage() {
  return (
    <ComponentPage
      title="Input OTP"
      lead="Collects a one-time code in separate visual slots."
      demo={<OTPExample />}
      code={code}
      sections={[
        {
          id: "mechanic",
          title: "Mechanic",
          children: (
            <p className="text-body text-muted-foreground">
              Input OTP uses the <code>input-otp</code> library for its
              one-time-code behavior and slot state.
            </p>
          ),
        },
      ]}
    />
  );
}
