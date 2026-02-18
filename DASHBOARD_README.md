# 📊 Dashboard Administrativo - Simulador de Votación Electoral

## 🚀 Acceso al Dashboard

### URL de acceso:
```
http://localhost:5173/admin
```

### Credenciales:
- **Contraseña temporal**: `admin2026`

## 📈 Funcionalidades del Dashboard

El dashboard administrativo proporciona análisis en tiempo real de cómo los usuarios interactúan con el simulador:

### 1. **Métricas Principales (KPIs)**
- ✅ **Total de Visitas**: Número total de sesiones iniciadas
- ✅ **Simulaciones Completadas**: Usuarios que finalizaron todo el proceso
- ✅ **Sesiones Abandonadas**: Usuarios que no completaron
- ✅ **Resultados Compartidos**: Cuántos usuarios compartieron su PDF

### 2. **Estadísticas Detalladas**
- 📍 **Por Distrito**: Top 10 distritos más visitados con porcentajes
- 🎯 **Por Partido**: Distribución de votos por partido político
- ⏱️ **Duración Promedio**: Tiempo que toman los usuarios en completar
- 📊 **Tasas de Conversión**: 
  - Tasa de finalización (completados/total)
  - Tasa de compartido (compartidos/completados)

### 3. **Análisis de Actividad**
- 🕐 **Actividad por Hora**: Gráfico de barras mostrando picos de uso
- 📅 **Actividad Diaria**: Tendencias de uso por día

### 4. **Funciones Adicionales**
- 🔄 **Actualizar**: Recargar datos en tiempo real
- 💾 **Exportar**: Descargar todos los datos en formato JSON

## 🔧 Sistema de Tracking

El sistema rastrea automáticamente los siguientes eventos:

### Eventos Capturados:
1. **session_start** - Cuando un usuario inicia la aplicación
2. **page_view** - Navegación entre páginas
3. **district_select** - Selección de distrito electoral
4. **vote_cast** - Cada voto emitido (por sección y partido)
5. **simulation_complete** - Finalización del simulador
6. **pdf_share** - Descarga o compartido del PDF
7. **session_abandon** - Usuario abandona sin completar

### Datos Capturados por Evento:
- ⏰ Timestamp (fecha y hora exacta)
- 🆔 Session ID (identificador único de sesión)
- 📍 Distrito seleccionado
- 🎯 Partido votado
- 📱 User Agent (navegador y dispositivo)
- 🖥️ Resolución de pantalla

## 💾 Almacenamiento Temporal

**Actualmente**: Los datos se almacenan en `localStorage` del navegador.

**Próximamente**: Se conectará con MongoDB para:
- Persistencia permanente de datos
- Análisis histórico
- Reportes avanzados
- Backup automático

### Estructura de Almacenamiento:
```javascript
localStorage.getItem('voto_digital_analytics') // Todos los eventos
```

## 🎨 Características del Dashboard

### Diseño:
- 🌈 Interfaz moderna con gradientes vibrantes
- 💎 Efectos glassmorphism
- 📊 Gráficos de barras interactivos
- 📱 Diseño responsive (móvil y desktop)

### Visualizaciones:
- Barras de progreso animadas
- Gráficos de actividad por hora
- Tarjetas de KPIs con iconos
- Código de colores intuitivo

## 🔒 Seguridad

### Protección Actual:
- Login con contraseña
- Ruta protegida `/admin`
- Validación en frontend

### Próximas Mejoras:
- Autenticación con backend
- JWT tokens
- Roles de usuario (admin, viewer)
- Logs de acceso al dashboard

## 📝 Cómo Usar

1. **Acceder al Dashboard**:
   ```
   Navega a: http://localhost:5173/admin
   Ingresa la contraseña: admin2026
   ```

2. **Ver Estadísticas**:
   - Las métricas se cargan automáticamente
   - Scroll para ver todas las secciones

3. **Actualizar Datos**:
   - Click en el botón "Actualizar" en la esquina superior derecha

4. **Exportar Datos**:
   - Click en "Exportar" para descargar un JSON con todos los datos
   - El archivo incluye eventos y resumen completo

5. **Salir**:
   - Click en "Salir" para volver a la página principal

## 🔮 Próximas Funcionalidades

- [ ] Conexión con MongoDB
- [ ] Filtros por fecha
- [ ] Gráficos más avanzados (Chart.js)
- [ ] Exportación a Excel/CSV
- [ ] Comparación entre períodos
- [ ] Alertas automáticas
- [ ] Dashboard en tiempo real (WebSockets)
- [ ] Análisis de embudo de conversión
- [ ] Heatmaps de interacción
- [ ] A/B testing

## 🛠️ Desarrollo

### Archivos Principales:
- `analytics.ts` - Servicio de tracking y análisis
- `components/AdminDashboard.tsx` - Interfaz del dashboard
- `components/AdminLogin.tsx` - Pantalla de login
- `App.tsx` - Integración de rutas y tracking

### Agregar Nuevos Eventos:
```typescript
// En analytics.ts
analytics.trackEvent('nuevo_evento', {
  customData: 'valor'
});
```

### Limpiar Datos (Desarrollo):
```javascript
// En la consola del navegador
localStorage.removeItem('voto_digital_analytics');
```

## 📞 Soporte

Para cualquier pregunta o problema con el dashboard administrativo, contacta al equipo de desarrollo.

---

**Versión**: 1.0.0  
**Última actualización**: Febrero 2026
