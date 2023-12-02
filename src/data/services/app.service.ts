import { AuthService } from "./auth.service";
export class AppService {
  authService: AuthService;
  constructor() {
    this.authService = new AuthService();
  }
}
export default new AppService();
