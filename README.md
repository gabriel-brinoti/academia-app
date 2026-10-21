# Academia Funcional — Trabalho de Desenvolvimento Mobile

## Descrição
Aplicativo acadêmico para visualizar, pesquisar e cadastrar alunos de uma academia funcional. Versão simplificada e independente do sistema original, desenvolvida com React Native e Expo.

## Aluno
Nome: Gabriel Henrique de Castro Brinoti
RGM: 43435769

## Telas
- **Início:** lista de alunos e filtro de pesquisa.
- **Detalhes:** mostra dados do aluno escolhido.
- **Cadastro:** formulário para adicionar aluno.

## Fonte de dados
Dados locais iniciais em `data/alunos.js`; novos cadastros ficam em memória enquanto o aplicativo estiver aberto.

## Onde estão os requisitos
- Componentes: `components/Cabecalho.js`, `components/Botao.js`, `components/CardAluno.js`.
- Props com callback: `Botao` (`aoPressionar`) e `CardAluno` (`aoPressionar`).
- useState: `App.js`, `screens/Home.js`, `screens/Cadastro.js`.
- useEffect: `screens/Home.js`, atualiza a contagem conforme busca e lista.
- Navegação com parâmetros: `screens/Home.js` envia `{ aluno }` para `screens/Detalhes.js`, que lê `route.params`.
- Navegação e cabeçalho: `App.js`, `NavigationContainer` e `createNativeStackNavigator`.

## Como executar
```bash
npm install
npx expo start
```
Abra no Expo Go compatível com SDK 54 ou em emulador.

## Vídeo de demonstração
Adicionar `demo/demo.mp4` (até 30 segundos) antes de entregar. Mostrar busca, detalhes e cadastro.

## Observações
Este aplicativo não se conecta ao backend do sistema comercial. Os dados de exemplo são fictícios.

