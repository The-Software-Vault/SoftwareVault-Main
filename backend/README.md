Instructions for running/testing backend (<u>**USES YARN**</u>):
  
  1. Import initial database & tables into MySQL:
  
    $ mysql -u root -p < backend/sql/init.sql
    $ mysql -u root -p < backend/sql/swvault_schema.sql
  
  2. Navigate to the _backend/node_ folder, and create a file called **.env**. 
    
  - Paste the code shown [here](https://github.com/luisegarduno/FullStack-Template/blob/master/backend/node/.env)
    into your file & make changes to the parameters accordingly.     
    ** Or just let me know if you'd like for me to send you a copy of mine.
  
  3. Install packages & deploy backend! (`$ yarn install; yarn run dev`)
