import { Layout, Theme } from "@coccoc-hometest/shared/components";
import { ReactNode } from "react";
import { CookiesProvider } from "react-cookie";

export interface ProviderProps {
  children: ReactNode;
}

export function Provider({ children }: ProviderProps) {
  return (
    <CookiesProvider>
      <Theme>
        <Layout>{children}</Layout>
      </Theme>
    </CookiesProvider>
  );
}

export default Provider;
