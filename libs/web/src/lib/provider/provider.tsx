import { Layout, Theme } from "@coccoc-hometest/shared/components";
import { ReactNode } from "react";

export interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <Theme>
      <Layout>{children}</Layout>
    </Theme>
  );
}

export default Provider;
