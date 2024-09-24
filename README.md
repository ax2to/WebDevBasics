# WebDevBasics
Español:
"WebDevBasics: Un Curso Introductorio de Desarrollo Web para Novatos. Este repositorio contiene todos los materiales, ejemplos de código y recursos necesarios para aprender los fundamentos del desarrollo web. Diseñado especialmente para principiantes, cada módulo está estructurado para guiar a los estudiantes a través de los conceptos básicos del HTML, CSS y JavaScript, proporcionando una base sólida para su viaje en la programación web."

Inglés:
"WebDevBasics: An Introductory Web Development Course for Beginners. This repository houses all the materials, code examples, and resources needed to master the basics of web development. Specially tailored for beginners, each module is structured to guide students through the foundational aspects of HTML, CSS, and JavaScript, providing a solid grounding for their web programming journey."

- [Algoritmos](00-Algorithm/index.md)
- [HTML](01-HTML/docs/index.md)
- CSS
- [Javascript](03-Javascript/docs/index.md)

## Git commands
### 1. **Discard Tracked Changes**
For the tracked files that have been modified, you can run the following command to restore them to the state of the last commit:
```bash
git restore .
```
This will restore all modified tracked files (`build.gradle.kts`, `AndroidManifest.xml`, etc.) back to the state they were in your last commit on the `master` branch.

### 2. **Remove Untracked Files**
To remove the untracked files (new files or directories that Git hasn't yet tracked), you can use the following command:
```bash
git clean -fd
```

- `-f` forces the clean operation (required).
- `-d` removes untracked directories (like `res/layout/`, `res/navigation/`, etc.).
