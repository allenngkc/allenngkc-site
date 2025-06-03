import matter from 'gray-matter';

export interface Note {
  id: string;
  title: string;
  content: string;
  frontmatter: Record<string, any>;
  links: string[];
}

export function parseMarkdownFiles(files: Record<string, string>): Record<string, Note> {
  const notes: Record<string, Note> = {};
  
  Object.entries(files).forEach(([filename, content]) => {
    const { data: frontmatter, content: markdownContent } = matter(content);
    const id = filename.replace(/\.md$/, '');
    const title = frontmatter.title || id;
    
    // Extract wiki-style links [[Link Name]]
    const linkRegex = /\[\[([^\]]+)\]\]/g;
    const links: string[] = [];
    let match;
    
    while ((match = linkRegex.exec(markdownContent)) !== null) {
      links.push(match[1]);
    }
    
    notes[id] = {
      id,
      title,
      content: markdownContent,
      frontmatter,
      links
    };
  });
  
  return notes;
}

export function createNoteLinks(content: string, onLinkClick: (noteId: string) => void): React.ReactNode {
  const linkRegex = /\[\[([^\]]+)\]\]/g;
  const parts = [];
  let lastIndex = 0;
  let match;
  
  while ((match = linkRegex.exec(content)) !== null) {
    // Add text before the link
    if (match.index > lastIndex) {
      parts.push(content.slice(lastIndex, match.index));
    }
    
    // Add the clickable link
    const linkText = match[1];
    parts.push(
      <button
        key={match.index}
        onClick={() => onLinkClick(linkText)}
        style={{
          color: '#646cff',
          textDecoration: 'underline',
          background: 'none',
          border: 'none',
          cursor: 'pointer',
          padding: 0,
          font: 'inherit'
        }}
      >
        {linkText}
      </button>
    );
    
    lastIndex = match.index + match[0].length;
  }
  
  // Add remaining text
  if (lastIndex < content.length) {
    parts.push(content.slice(lastIndex));
  }
  
  return parts;
}