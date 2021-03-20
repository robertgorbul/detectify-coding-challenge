# Detectify Coding Challenge

[![Build Status](https://builds.probablyweb.dev/api/badges/robertgorbul/detectify-coding-challenge/status.svg)](https://builds.probablyweb.dev/robertgorbul/detectify-coding-challenge)

## Notes App

Build a web-based note-taking app

### Requirements

- The user should be able to create a new note
- The user should be able to edit and delete a note
- The user should be able to navigate through multiple notes
- Search function to find notes

### Bonus features

- Create notes in different categories
- Move notes trough categories
- Markdown editor
- Persist notes in some way, either with a backend database, local storage or whatever

### Result

- Requirements are implemented
- Categories support
- localStorage support
- Dark theme support via prefers-color-scheme
- Demo https://notesapp.probablyweb.dev/

### Configuration

Create `.env` file at project root:

```dotenv
# NodeJS
NODE_VER=14-buster-slim

# Project
## Your Host user UID
PROJECT_UID=1000
## Your Host user GID
PROJECT_GID=1000
## Name of the project
COMPOSE_PROJECT_NAME=notes
```

Add this lines to `/etc/hosts`:

```
127.0.0.1 notesapp.docker
127.0.0.1 dev.notesapp.docker
127.0.0.1 traefik.notesapp.docker
```
