import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const rootDir = path.resolve(__dirname, '..');
const clientDir = path.join(rootDir, 'dist', 'client');
const distDir = path.join(rootDir, 'dist');

if (fs.existsSync(clientDir)) {
  console.log('[sync-dist] Sincronizando arquivos de dist/client para a raiz de dist/ para máxima compatibilidade com Cloudflare Pages...');
  const items = fs.readdirSync(clientDir);
  for (const item of items) {
    if (item === 'client' || item === 'server') continue;
    const srcPath = path.join(clientDir, item);
    const destPath = path.join(distDir, item);
    fs.cpSync(srcPath, destPath, { recursive: true, force: true });
  }
  console.log('[sync-dist] Concluído! Agora tanto "dist" quanto "dist/client" contêm os arquivos estáticos compilados.');
}
