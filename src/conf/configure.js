// is se fayda itna hoga ki, const se appwriteUrl lega aur string value ayegi

const conf = {
  
  appwriteUrl:          String(import.meta.env.VITE_APPWRITE_URL),
  appwriteProjectId:    String(import.meta.env.VITE_APPWRITE_PROJECT_ID),    
  appwriteDatabaseId:   String(import.meta.env.VITE_APPWRITE_DATABASE_ID),  
  appwriteCollectionId: String(import.meta.env.VITE_APPWRITE_COLLECTION_ID),
  appwriteBucketId:     String(import.meta.env.VITE_APPWRITE_BUCKET_ID),      

};

console.log("Appwrite config:", conf);

export default conf