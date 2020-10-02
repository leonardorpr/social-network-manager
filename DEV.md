# Decisões Técnicas

Este arquivo trará alguns aspectos referentes ao desenvolvimento do desafio proposto e as decisões técnicas tomadas para a conclusão do mesmo.

## Arquitetura

O projeto foi desenvolvido utilizando a arquitetura Flux mesmo que qualquer Context API, Atom ou o State seguido pela API do Local Storage resolveriam tranquilamente o problema, mas com o pensamento de que se fosse uma aplicação de longa vida, aplicar o Redux tornaria a aplicação mais tranquila de escalar no futuro. Além disso, montei uma arquitetura de pastas que escala bem ao longo de projetos grandes que necessitam de bastante reúso de componentes e helpers. Configurei ESLint, CommitLint, Husky e o Prettier para manter um padrão de código e commits.

## Melhorias no geral

- Diminuiria o tamanho das imagens, passando ela em um Tiny da vida. Acabou que quando peguei no Figma elas vieram um pouco grandes
- Vi também que dava pra melhorar a acessibilidade da página de criar agendamento adicionando `aria-label` nos botões para deixá-los mais descritivos
- Teste unitários e e2e
- Documentação de components utilizando o Storybook
- No `screens/SchedulePost/SchedulePost.tsx` iria passar algumas responsabilidades pro Redux, principalmente o parser dos responses no GET e POST e tirar essa responsabilidade de dentro do component, para o mesmo ficar mais enxuto. Resolvi manter assim já que não tinha integração com a alguma API, no máximo o GET nos JSONs, aí resolvi só acrescentar este ponto aqui.
- Se fosse uma aplicação de longa vida, também veria de utilizar alguma lib de gerenciamento de formulários como React Hook Form, para facilitar um pouco mais esse gerenciamento e usar um pouco mais de uncontrolled inputs

## Débito

Por conta das minhas últimas semanas de trabalho estarem bem corridas e eu não estar 100% produtivo nas horas que tinha para desenvolver o projeto e o prazo do mesmo, acabou que não apliquei os testes unitários, mesmo sabendo de sua importância e por ser algo que também faço no meu dia a dia no trabalho, para compensar deixarei um link para um repositório de uma talk ([clicando aqui](https://github.com/leonardorpr/talk-react-testing)) sobre testes que dei para meus colegas de time a pouco mais de 1 ano, onde fiz exemplos de testes unitários, integração e e2e.

## Disclaimer

Fique à vontade para sugerir alterações ou algum ponto do projeto que não curtiu tanto, não tenho problema algum com isso e me motiva a me manter sempre evoluindo. Tamo junto, valeu 😁
