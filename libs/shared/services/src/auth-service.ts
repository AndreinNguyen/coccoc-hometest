import { requestInstance } from "@coccoc-hometest/shared/config";
import { AxiosResponse } from "axios";

export type LoginResponse = {
  accessToken: string;
  name: string;
};

export class AuthService {
  static welcome() {
    return requestInstance({
      method: "GET",
      url: "/",
    });
  }

  static login(
    email: string,
    password: string
  ): Promise<AxiosResponse<LoginResponse>> {
    return requestInstance<LoginResponse>({
      method: "POST",
      url: "/login",
      params: { email, password },
    });
  }
}
