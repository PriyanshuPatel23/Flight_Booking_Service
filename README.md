# Welcome to Booking Services

### Project Setup

- Clone the project on your local
- Execute `npm install` on the same path as of your root directory of the downloaded project
- Create a `.env` file in the root directory and add the following enviroment variables
  - `PORT=3002`
  - `DB_SYNC = true`
  - `FLIGHT_SERVICE_PATH = http://localhost:3000`
- Inside the `src/config` folder create a new config.json and the following piece of json.

### To initialize Sequelize

- `npx sequelize init`

```
{
  "development": {
    "username": "root",
    "password": null,
    "database": "Booking_DB_DEV",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "test": {
    "username": "root",
    "password": null,
    "database": "database_test",
    "host": "127.0.0.1",
    "dialect": "mysql"
  },
  "production": {
    "username": "root",
    "password": null,
    "database": "database_production",
    "host": "127.0.0.1",
    "dialect": "mysql"
  }
}


```

- Once you've added your db config as listed above go to src folder from your terminal and execute `npx sequelize db:create`

and then execute `npx sequelize db:migrate`

## DB Design

- Booking

- A Booking contains flightId, userId, noOfSeats so for that we've to connect to the Flight Serveice to get Flight data and calculate logic for remaining seats and also for the price

## Tables

### Booking -> id, flightId, userId, status, noOfSeats, totalCost, created_at, updated_at

- noOfSeats, totalCost added with migrations file after the creation of model

### Code to generate models

```
npx sequelize model:generate --name Booking --attributes flightId:integer, userId:integer, status:enum
```

### Code to generate Seeders file

```
npx sequelize seed:generate --name add-booking
```

```
npx sequelize db:seed:all
```
