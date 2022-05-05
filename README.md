# SoftwareVault-Main
Primary Repository for The Software Vault Project

![image](https://user-images.githubusercontent.com/30121656/143123731-cad005af-c1f1-4bf2-bd0a-e6ad8b749c00.png)



## Development

<u>**Checkout**</u>: [Software Vault - API Routes](https://documenter.getpostman.com/view/10544294/Uyr4LLUZ)<br></br>

#### Pre-requisites
[Environment Setup](https://reactnative.dev/docs/environment-setup) : Follow instructions for <u>**React Native CLI**</u> (_*NOT*_ Expo CLI)

## Instructions

## Running **Frontend** (Local Vs. AWS EC2) via android

0.) If using AWS _(ignore this step if you are running locally)_, login to the EC2 instance via ssh using the private key file (_swvault.pem_):

    $ssh -i key.pem ec2-user@YOUR-AWS-EC2-HOSTIP.compute-1.amazonaws.com

1.) Open the API files (`frontend/API/userRepository.js`, `frontend/API/messageRepository.js`, `frontend/API/appRepository.js`):

  - [_LOCAL_] In line 6, make sure `url = false ? ...` (if necessary, change http://localhost:8000, to match your local WiFi IP address)
  - [_AWS EC2_] In line 6, make sure `url = true ? ...`


2.) Install packages! (`$yarn install`)

  - [_LOCAL_] Run the following commands within the __*SoftwareVault-Main/frontend*__ directory, in seperate terminals<br>
      (PS: __**Linux**__ users, run `$chmod 755 android/gradlew`):
    
    - Start Metro Bundler: `$yarn react-native start`
    - Deploy to simulator/device: `$yarn react-native run-android` (or deploy via IDE: make sure to open project through _android_ folder)



## Running **Backend** (LOCAL DB Vs. AWS RDS DB) - <u>**USES YARN**</u>

0.) Opening MySQL console:

  - [_LOCAL_] :
    
    - [_Windows_] [Install MySQL](https://phoenixnap.com/kb/install-mysql-on-windows), then import initial database & tables
  
          "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" "--defaults-file=C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" "-uroot" "-p" < backend/sql/init.sql             "C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" "--defaults-file=C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" "-uroot" "-p" < backend/sql/swvault_schema.sql
        
    - [_Linux_] Install MySQL Server (`$sudo apt install mysql-server`), then import initial database & tables
    
          $ mysql -u root -p < backend/sql/init.sql
          $ mysql -u root -p < backend/sql/swvault_schema.sql

  - [_AWS RDS MySQL DB_] Login & open the RDS MySQL DB using any of the various MySQL programs: DataGrip, DBeaver, VSCode, or even a raw terminal.
    
    - Paste the contents of `backend/sql/init.sql` & `backend/sql/swvault_schema.sql` files into the console and execute the queries. Feel free to edit the username & password values within the _backend/sql/init.sql_ file. <br>**_What does the database look like?_ [➡ Checkout the Database Diagram here!](https://raw.githubusercontent.com/The-Software-Vault/SoftwareVault-Main/main/backend/sql/SWVault_DB-Diagram.png)

1.) Open `backend/node/connection.js` file

  - [_LOCAL_] Comment out lines 14-19, & uncomment lines 6-11.
  - [_AWS RDS_] Comment out lines 6-11, & uncomment lines 14-19.

2.) Navigate to the _backend/node_ folder, and create a file called **.env**.

  - Paste the code shown [here](https://github.com/luisegarduno/FullStack-Template/blob/master/backend/node/.env) into your file & make changes to the parameters accordingly ([local db] lines: 8,10,12, [cloud db] lines: 15,17,19)--> Note: Your username & password values should be the same as the ones included within your _/backend/sql/init.sql_ file.      

    ** Or feel free to contact any of the developers for a copy of their .env file.
