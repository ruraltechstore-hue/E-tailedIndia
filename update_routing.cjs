const fs = require('fs');
const path = require('path');

const walkSync = (dir, filelist = []) => {
  fs.readdirSync(dir).forEach(file => {
    const filePath = path.join(dir, file);
    if (fs.statSync(filePath).isDirectory()) {
      filelist = walkSync(filePath, filelist);
    } else if (filePath.endsWith('.tsx')) {
      filelist.push(filePath);
    }
  });
  return filelist;
};

const files = walkSync(path.join(__dirname, 'src'));

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');

  if (content.includes('window.location.hash')) {
    // Determine the component name to inject navigate
    const componentMatch = content.match(/export default function ([A-Za-z0-9_]+)\s*\(/);
    if (!componentMatch) {
        // Just use window.location.href as fallback
        content = content.replace(/window\.location\.hash\s*=\s*'#([^']+)'/g, (match, hashRoute) => {
            let route = hashRoute.replace('-page', '');
            if (route === 'home') route = '';
            return `window.location.href = '/${route}'`;
        });
        fs.writeFileSync(file, content);
        return;
    }

    const componentName = componentMatch[1];
    
    // Add import if not present
    if (!content.includes('useNavigate')) {
        content = `import { useNavigate } from 'react-router-dom';\n` + content;
    }

    // Add const navigate = useNavigate(); right after the function declaration
    const funcDeclRegex = new RegExp(`(export default function ${componentName}\\s*\\([^)]*\\)\\s*\\{)`);
    if (!content.includes('const navigate = useNavigate();')) {
        content = content.replace(funcDeclRegex, `$1\n  const navigate = useNavigate();\n`);
    }

    // Replace onClick={() => window.location.hash = '#route'} with onClick={() => navigate('/route')}
    content = content.replace(/window\.location\.hash\s*=\s*'#([^']+)'/g, (match, hashRoute) => {
        let route = hashRoute.replace('-page', '');
        if (route === 'home') route = '';
        return `navigate('/${route}')`;
    });

    // Replace category.href which might be dynamic
    content = content.replace(/window\.location\.hash\s*=\s*([a-zA-Z0-9_.]+)/g, (match, variable) => {
        return `navigate((${variable} || '').replace('#', '/').replace('-page', ''))`;
    });

    fs.writeFileSync(file, content);
    console.log(`Updated routing in ${file}`);
  }
});
