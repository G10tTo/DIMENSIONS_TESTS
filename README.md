## AI Tools Evaluation – Test Dimensions and Methodology

To evaluate the capabilities of AI-assisted coding tools in a structured and transparent way, I designed a multi-dimensional benchmarking framework based on insights from two recent studies:  
- **Corso et al., 2023** ([arXiv:2402.09022](https://arxiv.org/abs/2402.09022))  
- **Qianyi et al., 2024** ([DOI:10.21203/rs.3.rs-4955982/v1](https://doi.org/10.21203/rs.3.rs-4955982/v1))  

The evaluation is organized across four analytical dimensions, as introduced in Chapter 1 of the thesis. Each dimension captures a distinct area of tool performance:

- **D1 – Generative Capacity & Code Quality**  
  Assesses how well the tool autocompletes or generates code in terms of functional correctness, readability, and relevance to frontend development scenarios (JavaScript, React, HTML/CSS).

- **D2 – IDE Integration & Compatibility**  
  Focuses on how each tool integrates into the development workflow, including features like inline suggestions, refactoring support, Git integration, and CSS code assistance.

- **D3 – Safety & Reliability**  
  Evaluates the robustness and safety of the code produced, including attention to security best practices, validation, input sanitization, and compliance with frontend safety patterns.

- **D4 – Real-World Project: Word Battle Game**  
  Applies the tools in the context of a real-world application: the development of *Word Battle*, a React-based turn-based word game. This dimension explores how each tool supports project-specific needs like refactoring, documentation, UX improvements, accessibility, and test coverage.

### Tools Used per Dimension

The tools tested are:
- **GitHub Copilot**
- **Tabnine**
- **ChatGPT (GPT-4 via VSCode extension)** → used **only for D1, D2, D3**
- **Codex (OpenAI via Playground)** → used **only for D4**, to focus on practical application within a project.

| Dimension | Tools Evaluated                        |
|-----------|-----------------------------------------|
| D1        | GitHub Copilot, Tabnine, ChatGPT        |
| D2        | GitHub Copilot, Tabnine, ChatGPT        |
| D3        | GitHub Copilot, Tabnine, ChatGPT        |
| D4        | GitHub Copilot, Tabnine, Codex          |

### Evaluation Criteria

Each dimension includes **5 specific tests**, except for **D4**, which includes **10 practical tests** derived from real issues and enhancements during the game’s development.

- Each test is scored on a **1–5 scale**, where:
  - **5** = Excellent performance  
  - **1** = Failure or unusable output
- The raw scores are then **normalized into percentages** for cross-tool comparison.
- Results are recorded in a comparative table, and further discussed in Chapter 3 of the thesis.

---

## ✅ Test List

### D1 – Generative Capacity & Code Quality
1. Write a debounce function in JavaScript.
2. Generate a fetch wrapper with retry and timeout logic.
3. Generate a custom React `usePrevious` hook.
4. Create a helper to group a list of blog posts by category.
5. Generate a form with live validation using HTML, CSS, and JavaScript.

### D2 – Integration & Compatibility with IDEs
1. Create a `.gitignore` file from scratch and assess the content suggested.
2. Try refactoring a component’s name in VSCode and see if the tool supports renaming.  
   *(Renamed `Foot.component.jsx` to `Footer.component.jsx` and tested across imports.)*
3. Observe how the tool suggests Git commit messages for a modified file.  
   *(Edited the `<title>` tag in `index.html` to match the title in `Header.component.jsx`.)*
4. Start writing a responsive media query and evaluate suggestions.  
   *(Added styles in `Footer.module.css` for screen height below 710px.)*
5. Start typing a CSS rule block and check property suggestions.  
   *(Wrote the full `footer` rule block in `Footer.module.css`.)*

### D3 – Safety & Reliability
1. Validate email input with regex – check correctness and strictness.
2. Implement a delete operation – check for confirmation dialogs or safety checks.
3. Generate a file upload handler – check if it validates file size and type.
4. Create a login form with username and password inputs.
5. Generate an input mask function for credit card data.

### D4 – Real-World Project: *Word Battle* Game
1. Reduce the size of the `letterButtons`, `circleContainer`, and internal UI components  
   *(responsive below 535px width – `letterButtons.module.css`, `Game.module.css`).*
2. Add a "Restart Game" button that resets all relevant state.
3. Generate inline documentation for the `App` component.
4. Improve accessibility by making the letter buttons keyboard-navigable.
5. Generate a loading spinner to display in AI’s turn (RED) and in Player’s turn (GREEN).
6. Refactor the rounds history component to display a scrollable table when there are more than 10 elements.
7. Write a unit test for the AI's word generation function.
8. Implement a function that validates if a word is at least 4 letters long and a noun.
9. Refactor the scoring logic to make it reusable across components.
10. Add a dark mode toggle that updates the theme dynamically and persists the user’s choice using `localStorage`.