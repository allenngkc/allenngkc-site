import React, { useState, useEffect } from 'react';
import { 
  Box, 
  Text, 
  Heading, 
  Button, 
  VStack, 
  HStack, 
  Input,
  Container,
  List,
  ListItem
} from '@chakra-ui/react';
import ReactMarkdown from 'react-markdown';
import { Note, parseMarkdownFiles, createNoteLinks } from '../components/utils/notesParser/parseMarkdownFiles';

const Notes: React.FC = () => {
  const [notes, setNotes] = useState<Record<string, Note>>({});
  const [currentNote, setCurrentNote] = useState<string | null>(null);
  const [searchTerm, setSearchTerm] = useState('');
  const [noteHistory, setNoteHistory] = useState<string[]>([]);

  // Load your markdown files - you'll need to implement this based on how you store them
  useEffect(() => {
    loadMarkdownFiles();
  }, []);

  const loadMarkdownFiles = async () => {
    // This is where you'd load your Obsidian markdown files
    // You could use a file input, or pre-import them into your project
    const exampleNotes = {
      'welcome': `# Welcome to My Notes

This is my personal knowledge base! Check out my thoughts on [[Programming]] and [[Life Philosophy]].

## Quick Links
- [[Daily Notes]]
- [[Project Ideas]]
- [[Learning Resources]]`,
      
      'programming': `# Programming Notes

I love coding! Here are some key concepts:

## Languages I Use
- JavaScript/TypeScript
- Python
- Java

Related: [[Web Development]], [[Algorithms]]`,
      
      'web-development': `# Web Development

Building for the web is exciting!

## Technologies
- React (like this site!)
- Chakra UI
- Vite

Back to [[Programming]]`
    };

    const parsedNotes = parseMarkdownFiles(exampleNotes);
    setNotes(parsedNotes);
    
    // Set the first note as current if none selected
    if (!currentNote && Object.keys(parsedNotes).length > 0) {
      setCurrentNote(Object.keys(parsedNotes)[0]);
    }
  };

  const handleNoteClick = (noteId: string) => {
    const normalizedId = noteId.toLowerCase().replace(/\s+/g, '-');
    
    if (notes[normalizedId]) {
      // Add to history if it's a different note
      if (currentNote && currentNote !== normalizedId) {
        setNoteHistory(prev => [...prev, currentNote]);
      }
      setCurrentNote(normalizedId);
    }
  };

  const goBack = () => {
    if (noteHistory.length > 0) {
      const previousNote = noteHistory[noteHistory.length - 1];
      setNoteHistory(prev => prev.slice(0, -1));
      setCurrentNote(previousNote);
    }
  };

  const filteredNotes = Object.values(notes).filter(note =>
    note.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    note.content.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const renderMarkdownWithLinks = (content: string) => {
    return (
      <ReactMarkdown
        components={{
          p: ({ children }) => {
            const processedContent = createNoteLinks(
              children?.toString() || '', 
              handleNoteClick
            );
            return <Text mb={4}>{processedContent}</Text>;
          },
          h1: ({ children }) => <Heading as="h1" size="xl" mb={4}>{children}</Heading>,
          h2: ({ children }) => <Heading as="h2" size="lg" mb={3}>{children}</Heading>,
          h3: ({ children }) => <Heading as="h3" size="md" mb={2}>{children}</Heading>,
          ul: ({ children }) => <List.Root mb={4}>{children}</List.Root>,
          li: ({ children }) => <ListItem>{children}</ListItem>,
        }}
      >
        {content}
      </ReactMarkdown>
    );
  };

  return (
    <Container maxW="container.xl" p={4}>
      <HStack align="start" gap={6}>
        {/* Sidebar */}
        <Box w="300px" borderRight="1px solid" borderColor="gray.200" pr={4}>
          <VStack align="stretch" gap={4}>
            <Heading size="md">My Notes</Heading>
            
            <Input
              placeholder="Search notes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            
            <VStack align="stretch" gap={2}>
              {filteredNotes.map(note => (
                <Button
                  key={note.id}
                  variant={currentNote === note.id ? "solid" : "ghost"}
                  justifyContent="flex-start"
                  onClick={() => handleNoteClick(note.id)}
                  size="sm"
                >
                  {note.title}
                </Button>
              ))}
            </VStack>
          </VStack>
        </Box>

        {/* Main content */}
        <Box flex={1}>
          {noteHistory.length > 0 && (
            <Button onClick={goBack} mb={4} size="sm" variant="outline">
              ← Back
            </Button>
          )}
          
          {currentNote && notes[currentNote] ? (
            <Box>
              {renderMarkdownWithLinks(notes[currentNote].content)}
              
              {/* Show backlinks */}
              {Object.values(notes).some(note => 
                note.links.some(link => 
                  link.toLowerCase().replace(/\s+/g, '-') === currentNote
                )
              ) && (
                <Box mt={8} pt={4} borderTop="1px solid" borderColor="gray.200">
                  <Heading size="sm" mb={2}>Referenced by:</Heading>
                  <VStack align="start" gap={1}>
                    {Object.values(notes)
                      .filter(note => 
                        note.links.some(link => 
                          link.toLowerCase().replace(/\s+/g, '-') === currentNote
                        )
                      )
                      .map(note => (
                        <Button
                          key={note.id}
                          variant="link"
                          size="sm"
                          onClick={() => handleNoteClick(note.id)}
                        >
                          {note.title}
                        </Button>
                      ))
                    }
                  </VStack>
                </Box>
              )}
            </Box>
          ) : (
            <Text>Select a note to view</Text>
          )}
        </Box>
      </HStack>
    </Container>
  );
};

export default Notes;