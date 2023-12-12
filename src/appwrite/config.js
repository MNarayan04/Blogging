import conf from "../config/confi";
import {Client , ID , Databases ,Storage,Query} from "appwrite";


export class Service{
    client = new Client();
    databases;
    bucket;

    constructor(){
        this.client 
        .setEndpoint(conf.appwriteUrl)
        .setProject(conf.appwriteProjectID)
        this.databases =  new Databases(this.client)
        this.bucket = new Storage(this.client);

    }
    
    //Post Services
    async createPost({title,slug,content,featuredImage,status,userID}){

        try {
            return await this.databases.createDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,{
                    title,
                    content,
                    featuredImage,
                    status,
                    userID,
                }
            )
            
        } catch (error) {
            console.log("Appwrite Service Error",error);
        }

    }



    async updatePost(slug ,{title,content,featuredImage,status}){

        try {
            return await this.databases.updateDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }
            )

        } catch (error) {
            console.log("Appwrite Service Update Post",error);
        }
    }


    async deletePost({title,slug}){
        try {
            await this.databases.deleteDocument(
            conf.appwriteCollectionID,
            conf.appwriteDatabaseID,
            slug
        )
        return true

        } catch (error) {
            console.log("Appwrite Service Delete Post Error",error);
            return false;
        }
    }


    async getPost({slug}){
        try {
            return await this.databases.getDocument(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                slug
            )
        } catch (error) {
            console.log("Appwrite service  Error in GetPost",error);
            return false;
        }
    }



    async getPosts(queries=[Query.equal("status","active")]){
        
        try {
            return await this.databases.listDocuments(
                conf.appwriteDatabaseID,
                conf.appwriteCollectionID,
                queries,
            )
        } catch (error) {
            console.log("Appwrite Service Error In Get all post",error);
            return false
        }
    }


    //file uploading services

    async uploadFile(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketID,
                ID.unique(),
                file               
            )

        } catch (error) {
            console.log("Appwrite Servies Error in Upload file",error);
            return false;
        }
    }


    async deleteFiles(fileId){
        try {
         await this.bucket.deleteFile(
            conf.appwriteBucketID,
            fileId
         )
         return true    

        } catch (error) {
            console.log("Appwrite Service Error in DeleteFile",error);
            return false;
        }
    }


    getfilePreview(fileId){
        return this.bucket.getFilePreview(
            conf.appwriteBucketID,
            fileId
        )
    }


}




const service = new Service()
export default service