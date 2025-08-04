import { Plugin } from 'vite'
import matter from 'gray-matter'
import { marked } from 'marked'

export function markdownPlugin(): Plugin {
  return {
    name: 'vite-plugin-markdown',
    transform(code: string, id: string) {
      if (id.endsWith('.md')) {
        // Configure marked
        marked.setOptions({
          breaks: true,
          gfm: true
        })

        // Parse frontmatter and content
        const { data, content } = matter(code)
        
        // Convert markdown content to HTML
        const html = marked(content)
        
        // Return as ES module
        return {
          code: `export const frontmatter = ${JSON.stringify(data)};
export const html = ${JSON.stringify(html)};
export default { frontmatter, html };`,
          map: null
        }
      }
    }
  }
}