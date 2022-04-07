# SoftwareVault-Main
Primary Repository for The Software Vault Project

![image](https://user-images.githubusercontent.com/30121656/143123731-cad005af-c1f1-4bf2-bd0a-e6ad8b749c00.png)



## Development

### Frontend:

#### Pre-requisites
[Environment Setup](https://reactnative.dev/docs/environment-setup) : Follow instructions for <u>**React Native CLI**<u> (_*NOT*_ Expo CLI)

### Instructions

#### Running **Backend** (LOCAL DB Vs. AWS RDS DB) - <u.**USES YARN**</u>

  0. Opening MySQL console:
    0.a. LOCAL:
      0.a.1 Windows: [Install MySQL](https://phoenixnap.com/kb/install-mysql-on-windows)
      0.a.2 Windows: Import initial database & tables
        0.a.2.1 Windows: `"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" "--defaults-file=C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" "-uroot" "-p" < backend/sql/init.sql`
        0.a.2.2 Windows: `"C:\Program Files\MySQL\MySQL Server 8.0\bin\mysql.exe" "--defaults-file=C:\ProgramData\MySQL\MySQL Server 8.0\my.ini" "-uroot" "-p" < backend/sql/swvault_schema.sql`
      0.b.1 Linux: `sudo apt install mysql-server`
      0.b.2 Linux: Import initial database & tables
        0.b.2.1 `$ mysql -u root -p < backend/sql/init.sql`
        0.b.2.2 `$ mysql -u root -p < backend/sql/swvault_schema.sql`
    0.b AWS RDS MySQL DB: Login & open the RDS MySQL DB using any of the various MySQL programs: DataGrip,DBeaver,VSCode, or even a raw terminal. 
      0.b.1. Paste the contents of `backend/sql/init.sql` & `backend/sql/swvault_schema.sql` files into the console and execute the queries.

  1. Open `backend/node/connection.js` file
    1.a. LOCAL: Comment out lines 14-19, & uncomment lines 6-11.
    1.b. AWS RDS: Comment out lines 6-11, & uncomment lines 14-19.

  2. Navigate to the _backend/node_ folder, and create a file called **.env**.     
    2.1. Paste the code shown [here](https://github.com/luisegarduno/FullStack-Template/blob/master/backend/node/.env)
    into your file & make changes to the parameters accordingly.     
    ** Or feel free to contact any of the developers for a copy of their .env file.

#### Running **Frontend** (Local Vs. AWS EC2)

  0. If using AWS (ignore this step if you are running locally), login to the EC2 instance via ssh with the private key file (_swvault.pem_): `$ssh -i "swvault.pem" ec2-user@ec2-54-156-23-43.compute-1.amazonaws.com`

  1. Open `frontend/API/userRepository`
    1.a LOCAL: In line 6, make sure `url = false ? ...` (if necessary, change http://localhost:8000, to match your local WiFi IP address)
    1.b AWS EC2: In line 6, make sure `url = true ? ...`

  2. Install packages! (`$yarn install`)
    2.1 LOCAL: Run the following commands within the __*SoftwareVault-Main/frontend*__ directory, in seperate terminals (PS: __**Linux**__ users, run `chmod 755 android/gradlew`):
      2.1.1. Start Metro Bundler: `yarn react-native start`
      2.1.2 Deploy to simulator/device: `yarn react-native run-android` (or deploy via IDE: make sure to open project through `android` folder)

    2.2
