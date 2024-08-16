export interface ISignupUseCase {
  execute(email: string, username: string, password: string, otp: string): Promise<void | string>;
}
