import conf from "../conf/conf";
import { Client, Account } from "appwrite";

export class AuthService {
  client = new Client();
  account;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create({
        userId: "<USER_ID>",
        email: email,
        password: password,
        name: name,
      });

      if (userAccount) {
        return this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      console.error("Error occured at the createAccount.", error);
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const result = await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      return result;
    } catch (error) {
      console.error("Error while logging with user account", error);
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      return await this.account.get();
    } catch (error) {
      console.error("Error in getCurrentUser", error);
      // throw error;
    }
    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.error("Appwrite service :: logout :: error", error);
      throw error;
    }
  }
}

const authService = new AuthService();

export default authService;
