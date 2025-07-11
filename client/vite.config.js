import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     port: 3002,
//     proxy: {
//       "/api": "http://localhost:8000",
//     },
//   },
// });
export default defineConfig({
  plugins: [react()],
  server: {
    port: 3002,
    proxy: {
      "/api": "http://localhost:8000",
    },
  },
});
