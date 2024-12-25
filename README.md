
# **NestJS Vehicle Location**

A project to manage and track vehicle locations using a MySQL database, NestJS framework, and TypeORM.

---

## **Setup Instructions**

### **1. Create MySQL Database**

1. Create a MySQL database and set credentials in `config.ts`:
   ```ts
   // config.ts
   module.exports = {
     db: {
       host: 'localhost',
       port: 3306,
       user: 'your_username',
       password: 'your_password',
       database: 'vehicle_location',
     },
   };
   ```

2. Use the following MySQL script to create the database:
   ```sql
   CREATE DATABASE vehicle_location;
   ```

3. Make sure the MySQL server is running and accessible.

---

### **2. Install Dependencies**

Run the following command to install all required Node.js dependencies:
```bash
npm install
```

---

### **3. Start the Application**

Run the NestJS application:
```bash
npm run start:dev
```

The server will run at `http://localhost:3000`.

---

### **4. Test the Endpoints**

Use `curl` to test the endpoints. Example requests are available in `contoh.curl`.

#### **Example Curl Command:**

Test the **Location History** endpoint:
```bash
curl -X POST http://localhost:3000/api/location-history \
-H "Content-Type: application/json" \
-d '{
  "vehicleId": 1,
  "location": {"x": 30, "y": 10},
  "speed": 60.5,
  "direction": 90.0,
  "timestamp": "2024-12-24T00:00:00Z"
}'
```

Test the **Vehicle** endpoint:
```bash
curl -X GET http://localhost:3000/api/vehicle
```

---
 

### **Database Configuration Notes**

Ensure that the MySQL credentials in `config.ts` match your local MySQL setup. Update `database.host`, `database.port`, `database.user`, and `database.password` as needed.

--- 
