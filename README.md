# SoftwareVault-Main
Primary Repository for The Software Vault Project

![image](https://user-images.githubusercontent.com/30121656/143123731-cad005af-c1f1-4bf2-bd0a-e6ad8b749c00.png)



## Development

### Frontend:

#### Pre-requisites
[Environment Setup](https://reactnative.dev/docs/environment-setup) : Follow instructions for <u>**React Native CLI**<u> (_*NOT*_ Expo CLI)

#### Instructions
1. Clone Repository: `git clone https://github.com/The-Software-Vault/SoftwareVault-Main.git`
2. Change directory & install packages: `cd SoftwareVault-Main/frontend && yarn install`     
  2.1. __**Linux**__ users, run `chmod 755 android/gradlew`
3. Lastly, run the following commands within the __*SoftwareVault-Main/frontend*__ directory, in seperate terminals:     
  3.1. Start Metro Bundler: `yarn react-native start`     
  3.2. Deploy to simulator/device: `yarn react-native run-android` (or deploy via IDE: make sure to open project through `android` folder)

### Backend:
Instructions for running/testing backend (<u>**USES YARN**</u>):
  
  1. Import initial database & tables into MySQL:
  
    $ mysql -u root -p < backend/sql/init.sql
    $ mysql -u root -p < backend/sql/swvault_schema.sql
  
  2. Navigate to the _backend/node_ folder, and create a file called **.env**.     
    2.1. Paste the code shown [here](https://github.com/luisegarduno/FullStack-Template/blob/master/backend/node/.env)
    into your file & make changes to the parameters accordingly.     
    ** Or feel free to contact any of the developers for a copy of their .env file.
  
  3. Install packages & deploy backend! (`$ yarn install; yarn run dev`)
