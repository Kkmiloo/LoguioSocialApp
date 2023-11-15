# LoguioSocialApp

## Instalación

1. **Clonar el Repositorio:**

   ```bash
   git clone https://github.com/Kkmiloo/LoguioSocialApp.git
   cd LoguioSocialApp
   ```

2. **Instalar Dependencias:**

   ```bash
   npm install
   ```

3. **Configurar el archivo .env:**

   - Copia en archivo **`.env.example`** y renómbralo a **`.env`**
   - Completa las variables de entorno con la información necesaria. Estas variables se encuentran en Firebase

   ```js
   #.env

   #Firebase
   FIREBASE_API_KEY=your_api_key
   FIREBASE_AUTH_DOMAIN=your_auth_domain
   FIREBASE_PROJECT_ID=your_project_id
   FIREBASE_STORAGE_BUCKET=your_storage_bucket
   FIREBASE_MESSAGING_SENDER_ID=your_messaging_sender_id
   FIREBASE_APP_ID=your_app_id

   ```

4. **Iniciar la Aplicación:**
   ```bash
   npm start
   ```
