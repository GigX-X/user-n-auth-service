export interface ISignupUseCase {
  execute(email: string, username: string, password: string): Promise<void>;
}
