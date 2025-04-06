# 📺 smarttv-simulator — Simulador de Controle para Smart TV via CLI

**smarttv-simulator** é um projeto simples e didático desenvolvido com **TypeScript**, utilizando **Programação Orientada a Objetos (POO)** para simular o funcionamento de uma Smart TV, incluindo funcionalidades como controle de volume, troca de canal, conexão à internet, gerenciamento de aplicativos e mais — tudo isso via interface de linha de comando (CLI).

---
![propósito: educacional](https://img.shields.io/badge/propósito-educacional-blueviolet)
![prática: POO](https://img.shields.io/badge/prática-POO-important)
![estudo pessoal](https://img.shields.io/badge/tipo-estudo%20pessoal-yellow)
![terminal: node](https://img.shields.io/badge/terminal-Node.js-lightgrey)
![execução: ts-node](https://img.shields.io/badge/execução-ts--node-blue)
![dependência: prompt-sync](https://img.shields.io/badge/dependência-prompt--sync-informational)
![sem interface gráfica](https://img.shields.io/badge/GUI-nenhuma-red)
![language: TypeScript](https://img.shields.io/badge/language-TypeScript-3178c6)
![estilo: OOP](https://img.shields.io/badge/estilo-OOP-red)
![interface: CLI](https://img.shields.io/badge/interface-CLI-blue)
![input: prompt-sync](https://img.shields.io/badge/input-prompt--sync-lightgrey)
![simulação](https://img.shields.io/badge/simulador-SmartTV-green)
![feito por: Luana](https://img.shields.io/badge/feito%20por-Luana%20Cristina%20da%20Silva-critical)
[![License: MIT](https://img.shields.io/badge/License-MIT-green.svg)](LICENSE)


---

## 🧠 Objetivo

Demonstrar de forma prática o uso de conceitos de POO, como:
- Encapsulamento
- Métodos públicos/privados
- Construtores
- Interação entre classes (`SmartTV` e `ControleRemoto`)
- Lógica de estado interno e respostas condicionais

---

## 🕹️ Funcionalidades Simuladas

| Ação                  | Descrição                             |
|-----------------------|----------------------------------------|
| Ligar/Desligar TV     | Alterna o estado ligado/desligado     |
| Mudar canal           | Troca o canal atual                   |
| Aumentar/Diminuir volume | Controle do volume de 0 a 100         |
| Adicionar aplicativo  | Simula instalação de apps na TV       |
| Verificar conexão     | Exibe status da internet              |
| Conectar/Desconectar  | Gerencia status da internet           |
| Criar usuário         | Adiciona usuários à TV                |
| Ver status            | Mostra todas as informações atuais    |

---

## ▶️ Como Executar

1. Clone o projeto:
```bash
git clone https://github.com/Luanacsilva/SMARTTV
cd SMARTTV
```

2. Instale as dependências:
```bash
npm install
```
3. Execute com ts-node:
```bash
npx ts-node src/index.ts
```
Certifique-se de ter ts-node e TypeScript instalados globalmente ou via devDependencies.

---
## 💻 Estrutura do Projeto
 ```bash
SMARTTV/
├── node_modules/
├── src/
│   ├── SmartTV.ts             # Classe principal da TV
│   └── ControleRemoto.ts      # Classe que controla a TV via CLI
├── package.json
└── tsconfig.json
```

---

## 🧑‍💻 Desenvolvido por

Luana Cristina da Silva

---

## ⚖️ Licença

Este projeto está sob a Licença MIT.

---

Esse projeto foi criado para simular e testar o comportamento de uma Smart TV com base em comandos digitados pelo usuário.
Ideal para estudos de lógica, POO e interação com terminal.




