// can be used in future projects that require auth setup using appwrite or another service
// please read the officail documentation regarding changes which are highly possible
// also we used the conf object for environment varibles regarding details of account url, project id and many more
// for live implementation, please go to project -> mega-blog-appwrite

import conf from "../conf/conf";
import { Client, Account, ID } from "appwrite";

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
        userId: ID.unique(),
        email: email,
        password: password,
        name: name,
      });
      if (userAccount) {
        this.login({ email, password });
      } else {
        return userAccount;
      }
    } catch (error) {
      throw error;
    }
  }

  async login({ email, password }) {
    try {
      const session = await account.createEmailPasswordSession({
        email: email,
        password: password,
      });
      return session;
    } catch (error) {
      throw error;
    }
  }

  async getCurrentUser() {
    try {
      const user = await this.account.get();
      return user;
      // Logged in
    } catch (err) {
      // Not logged in
      console.log("Appwrite service error :: getCurrentUser -> ", err);
    }

    return null;
  }

  async logout() {
    try {
      await this.account.deleteSessions();
    } catch (error) {
      console.log("Appwrite service error :: logout -> ", err);
    }
  }
}

const authService = new AuthService();

export default authService;
