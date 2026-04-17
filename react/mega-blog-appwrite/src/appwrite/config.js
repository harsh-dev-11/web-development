import conf from "../conf/conf";
import { Client, Databases, Storage, Query } from "appwrite";

export class Service {
  client = new Client();
  databases;
  bucket;

  constructor() {
    this.client
      .setEndpoint(conf.appwriteUrl)
      .setProject(conf.appwriteProjectId);

    this.databases = new Databases(this.client);
    this.bucket = new Storage(this.client);
  }

  async createPost({ title, slug, featuredImage, content, status, userId }) {
    try {
      return await this.databases.createDocument({
        databaseId: conf.appwriteDatabaseId,
        collectionId: conf.appwriteCollectionId,
        documentId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.error("Appwrite service createPost :: error", error);
      throw error;
    }
  }

  async updatePost(slug, { title, featuredImage, content, status, userId }) {
    try {
      return await this.databases.updateDocument({
        databaseId: conf.appwriteDatabaseId,
        collectionId: conf.appwriteCollectionId,
        documentId: slug,
        data: {
          title,
          content,
          featuredImage,
          status,
          userId,
        },
      });
    } catch (error) {
      console.error("Appwrite service :: updatePost :: error ", error);
      throw error;
    }
  }

  async deletePost(slug) {
    try {
      const result = await this.databases.deleteDocument({
        databaseId: conf.appwriteDatabaseId,
        collectionId: conf.appwriteCollectionId,
        documentId: slug,
      });

      result ? true : false;
    } catch (error) {
      console.error("Appwrite service :: deletePost :: error ", error);
      throw error;
    }
  }

  async getPost(slug) {
    try {
      return await databases.getDocument({
        databaseId: conf.appwriteDatabaseId,
        collectionId: conf.appwriteCollectionId,
        documentId: slug,
      });
    } catch (error) {
      console.error("Appwrite service :: getPost :: error ", error);
      throw error;
    }
  }

  async getPosts(queries = [Query.equal("status", "active")]) {
    try {
      return await this.databases.listDocuments({
        databaseId: conf.appwriteDatabaseId,
        collectionId: conf.appwriteCollectionId,
        queries,
      });
    } catch (error) {
      console.error("Appwrite service :: getPosts :: error ", error);
      return false;
    }
  }

  async uploadFile(file) {
    try {
      return await this.bucket.createFile({
        bucketId: conf.appwriteBucketId,
        fileId: ID.unique(),
        file,
      });
    } catch (error) {
      console.error("Appwrite service :: uploadFile :: error ", error);
      return false;
    }
  }

  async deleteFile(fileId) {
    try {
      await this.bucket.deleteFile({
        bucketId: conf.appwriteBucketId,
        fileId,
      });

      return true;
    } catch (error) {
      console.error("Appwrite service :: deleteFile :: error ", error);
      return false;
    }
  }

  getFilePreview(fileId) {
    this.bucket.getFilePreview({
      bucketId: conf.appwriteBucketId,
      fileId,
    });
  }
}

const service = new Service();

export default service;
