---
title: "Crafting an interpreter"
date: "07/11/2023"
draft: false
---

> **THIS WRITING IS WIP. SORRY FOR TYPOS AND THAT KIND OF STUFF**

> This document is going to be a collection of personal notes about interpreters, compilers and some reflections on the code that is being implemented in this [repo](https://github.com/slingercode/rlox)

Last year I started reading the book called [Crafting Interpreters](https://craftinginterpreters.com) and just a couple of days retake this project. After all this months I forgot about some topics and started to rewrite the code (with improvements) and creating this notes as a documentation in which i can refer if I forgot the development.

Just because I wanted to retake the book I planned to rewrite some parts in order to remind some topics and also verify the process that I was doing. I'm not and experienced Rust developer but is a language that I keep updated on and step by step I keep learning about it.

So with that background let's start with a couple of topics (in order) about the development process of the interpreter:

1. Read a file and parse all the content in a single string. 2. The goal of the project is to run a file or an interpreter on the console
2. Create a `Scanner` instance and start the process `scan_tokens`
3. Get the current `char` and match with the available `Tokens`

Until this point every step is very straight forward but I tweak a little bit of processes for readability and a better semantic (in my opinion)

First, the book uses a function called `advance` and for some reason it returns a char but in the _current position + 1_, this means that this function actually returns the next character instead of the current one. Actually I don't know if there's something that I'm missing, but I think that we should be using the current char and also retrieve that from a function called `get_current_char` (which makes more sense to me) and use the `advance` function for that propose... advance in the current buffer. So, this is a change in my process and this is the example of the functions:

```rust
fn get_current_char(&self) -> char {
	self.source.chars().nth(self.current).unwrap_or('\0')
}

fn advance(&mut self) {
	self.current += 1;
	self.line_block += 1;
}
```

A quick overview is, the `get_current_char` function retrieves the char in the current position in the source code string and if is not a valid char (`EOF`) return a empty char. The `advance` function increments the current position but I'm also using a custom variable called `line_block` that represents the position in the editor, for example, the first char in the line is always 1 so i would read line 1 at position 1, if that makes sense.

Now, what would do with the match character process?, well, I've created some handler functions that serves that purpose. There are a couple of functions but I don't want to explain all of them so I'm going to pick the basic function for single token scanning, this means for tokens that doesn't depend on a sequence, for example the `}` char only indicates a right brace.
**Note: remember that currently we are in a lexical analysis not semantical, so we need to identify only the tokens**

Example of the handler function for a single token:

```rust
fn handle_single_token_scan(&mut self, token_type: TokenType) {
	self.create_token(token_type);
	self.advance();
}
```

The reason for me to explain this kind of functions in my code it's the use of the `advance` function. Sure, the function creates a token but I can discus that later but the goal is the advance function. I'm calling that function because I'm retrieving the current char and after the match char statement finishes the next char is required, so maybe there is a unique advance conditional that could happen when creating a new token. In this point I'm creating single tokens (`+`, `*`) and also _"multiple"_ tokens (`=` or `==`) but the comment or the identifiers need an special advance condition.
