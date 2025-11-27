# 🚀 Guía de Deployment en Hostinger

Esta guía detalla los pasos necesarios para desplegar la aplicación DateNova en Hostinger.

## 📋 Pre-requisitos

- Cuenta de Hostinger con acceso a cPanel
- Acceso FTP o File Manager en cPanel
- Node.js instalado localmente (para generar el build)

## 🔧 Preparación del Build

### 1. Instalar dependencias (si no lo has hecho)

```bash
npm install
```

### 2. Generar el build de producción

```bash
npm run build
```

Este comando generará una carpeta `dist/` con todos los archivos optimizados para producción.

### 3. Verificar el build

Asegúrate de que la carpeta `dist/` contenga:
- `index.html`
- Carpeta `assets/` con archivos JS y CSS optimizados
- `.htaccess` (archivo crítico para el routing)

## 📤 Subir archivos a Hostinger

### Opción A: Usando File Manager de cPanel

1. **Accede a cPanel** de tu cuenta Hostinger
2. **Abre File Manager**
3. **Navega a la carpeta `public_html`**
4. **Elimina el contenido existente** (si hay archivos de ejemplo)
5. **Sube TODOS los archivos** de la carpeta `dist/`:
   - Arrastra y suelta todos los archivos
   - O usa el botón "Upload" para subirlos

### Opción B: Usando FTP (FileZilla, WinSCP, etc.)

1. **Configura tu cliente FTP** con las credenciales de Hostinger:
   - Host: Tu dominio o IP del servidor
   - Usuario: Tu usuario FTP
   - Contraseña: Tu contraseña FTP
   - Puerto: 21 (normalmente)

2. **Conecta al servidor**

3. **Navega a `public_html`**

4. **Sube todos los archivos** de la carpeta `dist/`

## ✅ Verificación Post-Deployment

### 1. Archivo .htaccess

**MUY IMPORTANTE**: Verifica que el archivo `.htaccess` esté presente en la raíz de `public_html/`

Este archivo es CRÍTICO para que funcione el routing de la aplicación. Sin él:
- ❌ Las rutas directas (`/servicios`, `/contacto`) darán error 404
- ❌ Al refrescar la página en una ruta que no sea `/` dará error
- ✅ Con el archivo, todas las rutas funcionarán correctamente

### 2. Permisos de archivos

Asegúrate de que los permisos sean correctos:
- Archivos: `644`
- Carpetas: `755`
- `.htaccess`: `644`

Para cambiar permisos en cPanel File Manager:
1. Clic derecho en el archivo/carpeta
2. "Change Permissions"
3. Establece los permisos apropiados

### 3. Prueba las rutas

Visita tu sitio y prueba:
- ✅ `tudominio.com/` (página principal)
- ✅ `tudominio.com/servicios` (debe cargar)
- ✅ `tudominio.com/contacto` (debe cargar)
- ✅ Navega entre secciones y refresca la página

## 🔍 Solución de Problemas

### Error 404 en rutas

**Problema**: Al acceder directamente a `/servicios` o `/contacto` obtienes error 404.

**Solución**:
1. Verifica que el archivo `.htaccess` esté en la raíz de `public_html/`
2. Verifica que el archivo `.htaccess` tenga el contenido correcto
3. Verifica que `mod_rewrite` esté habilitado en Apache (normalmente ya lo está en Hostinger)

### Estilos no cargan correctamente

**Problema**: La página se ve sin estilos o mal formateada.

**Solución**:
1. Verifica que la carpeta `assets/` se haya subido correctamente
2. Limpia la caché del navegador (Ctrl + Shift + R)
3. Revisa la consola del navegador (F12) para ver errores

### Imágenes no cargan

**Problema**: Las imágenes no se ven.

**Solución**:
1. Verifica que las rutas de las imágenes sean correctas
2. Si usas URLs externas (como en este proyecto), verifica la conexión a internet
3. Revisa la consola del navegador para errores de CORS

### Error 500 - Internal Server Error

**Problema**: El sitio muestra un error 500.

**Solución**:
1. Verifica que el archivo `.htaccess` no tenga errores de sintaxis
2. Revisa los logs de error en cPanel (Error Log)
3. Temporalmente renombra `.htaccess` a `.htaccess.bak` para ver si el problema es ese archivo

## 🔄 Actualizaciones Futuras

Para actualizar el sitio después de hacer cambios:

1. **Realiza cambios en tu código local**
2. **Genera nuevo build**: `npm run build`
3. **Sube archivos actualizados** a `public_html/`
4. **Limpia caché** del navegador

## 📝 Notas Importantes

### Estructura de archivos en Hostinger

```
public_html/
├── .htaccess          ← CRÍTICO para routing
├── index.html
└── assets/
    ├── index-[hash].js
    └── [otros archivos]
```

### Optimizaciones aplicadas

✅ **Tailwind optimizado**: Ya no usa CDN, los estilos están compilados y minificados
✅ **Compresión Gzip**: El `.htaccess` habilita compresión para mejor performance
✅ **Browser Caching**: El `.htaccess` configura caché para recursos estáticos
✅ **Security Headers**: Headers de seguridad configurados en `.htaccess`

### Variables de entorno

Este proyecto NO usa variables de entorno sensibles. Todas las configuraciones están en el código.

Si en el futuro necesitas variables de entorno:
- Crea un archivo `.env` en la raíz del proyecto
- Añade `.env` al `.gitignore`
- Usa `import.meta.env.VITE_NOMBRE_VARIABLE` en el código
- Reconstruye con `npm run build`

## 🆘 Soporte

Si tienes problemas:
1. Revisa los logs de error en cPanel
2. Consulta la documentación de Hostinger
3. Contacta el soporte de Hostinger si el problema persiste

## ✨ Checklist Final

Antes de considerar el deployment completo, verifica:

- [ ] Build generado sin errores (`npm run build`)
- [ ] Todos los archivos de `dist/` subidos a `public_html/`
- [ ] Archivo `.htaccess` presente en la raíz
- [ ] Ruta principal (`/`) funciona
- [ ] Rutas directas (`/servicios`, `/contacto`) funcionan
- [ ] Navegación entre secciones funciona
- [ ] Refresh en cualquier ruta funciona
- [ ] Estilos cargan correctamente
- [ ] Imágenes cargan correctamente
- [ ] Formulario de contacto funciona (si aplica)
- [ ] No hay errores en la consola del navegador

---

**¡Listo!** Tu aplicación DateNova debería estar funcionando perfectamente en Hostinger. 🎉
