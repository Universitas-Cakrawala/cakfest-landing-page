# Dockerfile

# Gunakan gambar resmi Node.js sebagai basis
FROM node:20-alpine

# Buat direktori kerja
WORKDIR /app

# Salin package.json dan package-lock.json
COPY package*.json ./

# Instal dependensi
RUN npm install

# Salin sumber daya aplikasi 
COPY . .

# Bangun aplikasi 
RUN npm run build 

# Expose port 8266 
EXPOSE 8266 

# Jalankan aplikasi
CMD ["npm", "run", "preview"]
