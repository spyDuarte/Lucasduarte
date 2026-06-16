# Site Profissional — Médico(a)

Site estático (HTML/CSS/JS puro), sem dependências de build, pronto para publicar em qualquer serviço de hospedagem estática (Vercel, Netlify, GitHub Pages, etc.).

## Estrutura

- `index.html` — conteúdo e estrutura das seções (Início, Sobre, Serviços, Atendimento Online, Localizações, Contato)
- `css/style.css` — estilos (paleta neutra cinza/dourado)
- `js/script.js` — menu mobile e formulário de contato

## O que personalizar antes de publicar

1. **Nome e CRM**: substitua todas as ocorrências de `[Seu Nome]`, `[UF]` e `[00000]` em `index.html`.
2. **Foto**: troque os blocos `.hero-photo-placeholder` / `.about-photo-placeholder` por `<img>` reais.
3. **Endereços e horários**: seção "Localizações" — preencha endereço e horários de Teresópolis e Balneário Camboriú.
4. **Contato**: atualize WhatsApp (`https://wa.me/55...`), e-mail e Instagram na seção de contato.
5. **Formulário**: o formulário atual apenas simula envio. Para receber as mensagens, integre com um serviço como Formspree, EmailJS, ou um backend próprio.

## Como visualizar localmente

Abra `index.html` diretamente no navegador, ou rode um servidor simples:

```bash
python3 -m http.server 8000
```

e acesse `http://localhost:8000`.
