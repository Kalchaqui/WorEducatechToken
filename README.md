# Proyecto para presentar en EDUCATECH

Este proyecto implementa un contrato inteligente de token en la red Arbitrum Sepolia. El token está desarrollado en Solidity y utiliza Hardhat como entorno de desarrollo. Incluye pruebas unitarias para verificar la funcionalidad del contrato y scripts para facilitar el despliegue en la red de Arbitrum Sepolia.

Características principales:
Token ERC-20: Implementa un token estándar ERC-20 que permite transferencias de tokens entre direcciones.
Despliegue en Arbitrum Sepolia: Utiliza scripts para desplegar el contrato del token en la red Arbitrum Sepolia.
Pruebas unitarias: Incluye pruebas automatizadas para verificar el comportamiento del contrato.
Estructura del proyecto:
contracts/: Contiene los contratos Solidity, incluido el contrato del token.
scripts/: Scripts para tareas como despliegue del contrato.
test/: Directorio con pruebas unitarias para el contrato del token.
Requisitos previos:
Node.js y npm instalados localmente.
Configuración de variables de entorno para API keys y URLs de red (consultar .env.example).
Instrucciones para despliegue en Arbitrum Sepolia:
Configura las variables de entorno en el archivo .env con las claves API y URLs requeridas.
Ejecuta el comando npx hardhat run scripts/tokenDeploy.js --network arbitrumSepolia para desplegar el contrato en la red Arbitrum Sepolia.
Ejecución de pruebas unitarias:
Ejecuta npx hardhat test para correr las pruebas unitarias y asegurarte de que el contrato funciona como se espera.

```shell
npx hardhat help
npx hardhat test
REPORT_GAS=true npx hardhat test
npx hardhat node
npx hardhat run scripts/deploy.js
```
