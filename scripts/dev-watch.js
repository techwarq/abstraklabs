#!/usr/bin/env node
// Auto-restart Next dev if it crashes (CSS 404 / cache corrupt)
// Usage: npm run dev:watch
const { spawn } = require("child_process");

function start() {
  const proc = spawn("npm", ["run", "dev"], { stdio: "inherit", shell: true });
  proc.on("exit", (code) => {
    if (code !== 0) {
      console.log(`\n[dev-watch] dev exited with ${code} — restarting in 2s...\n`);
      setTimeout(start, 2000);
    }
  });
}
console.log("[dev-watch] starting Next.js dev with auto-restart...");
start();
