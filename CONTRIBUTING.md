
# Contributing

## Requirements

- Ruby 2.3.1
  - RubyGem
    - Bundler
- NodeJS 8.x.x

## Setup

Installs all the needed dependencies

```bash
bundle install && npm install
```

## Develop Locally

This starts jekyll and webpack in watch mode and livereload. You can open the site on localhost:8080
```bash
npm run dev
```


## Build
Runs jekyll & webpack:

```bash
npm run build
```

## Adding Sheets

Add a sheet in the folder `data/{Category}/{{your-title}}.md`.

### Cryptocurrency

```yml
---
title: Ethereum
updated: 2018-01-04
category: Cryptocurrency
layout: 2018/cryptocurrency
primary_color: 4A90E2          # Primary Color of the Coin. Use hex-colors without '#'
secondary_color:               # Secondary Color of the Coin (optional). Use hex-colors without '#'
technology: Blockchain         # The underlying technology
short_form: ETH                # The short form of the currency
---

# tl;dr
```

### Article

```yml
---
title: Bitfinex
category: Exchange
updated: 2018-01-04
layout: 2018/detail
primary_color: 678e2f           # Primary Color of the Coin. Use hex-colors without '#'
secondary_color: 0B1A25         # Secondary Color of the Coin (optional). Use hex-colors without '#'
---

# tl;dr
```