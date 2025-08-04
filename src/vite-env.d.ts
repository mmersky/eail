/// <reference types="vite/client" />

declare module '*.md' {
  export const frontmatter: any
  export const html: string
  const content: { frontmatter: any; html: string }
  export default content
}

declare module '*.md?raw' {
  const content: string
  export default content
}