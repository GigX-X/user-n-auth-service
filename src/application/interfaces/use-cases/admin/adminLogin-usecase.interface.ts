export interface IAdminLoginUseCase {
  execute(email: string, password: string): Promise<string | null>;
}
