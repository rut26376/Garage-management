## Garage Management

### Project Packages:

- GarageManagementClient:
   Contains the client side of the application in Angular 17.
- GarageManagementServer:
   Contains the server side of the application in .NET.
 - GarageManagementDB:
   Contains the database.
   
#### Run Instructions:  

###### clone the project: git clone https://github.com/rut26376/Garage-management.git
    
#### DB:
  - Restore the database:
       - open SQL server
       - Restore the backup file you downloaded.
  - Update the connection string in appsetting.json in your API according to your server
    to match the location and details of the restored DB file.

#### Sever:
  - Open the project folder
  - Run the project, very important! - The project must be run in HTTP protocol and not HTTPS ,
    Due to a security issue, the project was developed in this way.

#### Client:
  - Open the project folder and install all dependencies: npm install
  - Run the project: ng s -o

  

