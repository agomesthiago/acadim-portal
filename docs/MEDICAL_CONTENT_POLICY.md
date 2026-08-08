# Política de Conteúdo Médico ACADIM

## Princípio Fundamental
**Distinção clara: Informação Médica ≠ Certificação Clínica.**
O papel da ACADIM é orientar e disseminar o conhecimento. Nenhuma publicação, artigo da enciclopédia de distrofias ou notícia deve ser interpretada ou promovida como "certificação", "diagnóstico", "prescrição" ou "segunda opinião médica".

## Fontes Primárias Aceitas
Para qualquer conteúdo da taxonomia médica (enciclopédia de distrofias) e publicações do núcleo de ciências, as fontes aceitas são obrigatoriamente oficiais ou peer-reviewed, tais como:
- NIH (National Institutes of Health) / GARD
- GeneReviews
- Orphanet
- OMIM
- PubMed (Estudos controlados ou revisões sistemáticas)
- FDA / EMA / ANVISA (Agências regulatórias)
- Ministério da Saúde / CONITEC

## Classificação de Afirmações (Taxonomia de Revisão)
Para garantir o rigor técnico, afirmações presentes na plataforma devem ser classificadas no processo de curadoria:
- **VALIDATED**: Possui citação explícita ou rastreável de uma das fontes primárias (ex: gene DMD mapeado, herança cromossômica comprovada).
- **NEEDS_REVIEW**: Termos absolutos como "nunca", "sempre", ou "é o mais comum" que não apresentem um estudo de prevalência recente com citação. 
- **BLOCKED**: O que não pode ser publicado. Fóruns de pacientes como prova científica, curas anedóticas ou opiniões desqualificadas.

## O que a ACADIM NÃO FAZ
- Diagnóstico clínico ou telemedicina não qualificada.
- Prescrição de órteses, remédios ou terapias isoladas.
- Segunda opinião médica definitiva sem exame presencial e molecular.

## Aviso Legal Padrão
Toda página médica deve herdar ou exibir indiretamente o disclaimer:
> "Conteúdo apenas informativo. Não substitui consulta médica."

## Avaliação da Enciclopédia (Track N)
- A taxonomia das doenças difere entre `lib/distrofias-data.ts` (Dados de doenças mestras como Duchenne, Becker, com características aprofundadas como tipo de herança e gene afetado) e `lib/conditions-data.ts` (Subtipos detalhados e graus de gravidade das síndromes).
- Foram mapeados genes, heranças, descrições, e padrões sintomáticos nos arquivos. 
- *Aviso:* Uma auditoria completa (linha a linha) por um especialista geneticista ainda é recomendada (NEEDS_REVIEW para garantir que não haja alegações absolutas).
