import ReactQuill from 'react-quill';
import { formats, redoChange, undoChange, EditorToolbar } from './EditorBar';
import { Stylesheet } from '@mirowsky/sx-stylesheet';
import { Box } from '@mui/material';

export default function QuillEditor({
  id,
  error,
  value,
  onChange,
  simple = false,
  sx,
  ...other
}: QuillEditorProps) {
  const modules = {
    toolbar: {
      container: `#${id}`,
      handlers: {
        undo: undoChange,
        redo: redoChange,
      },
    },
    history: {
      delay: 500,
      maxStack: 100,
      userOnly: true,
    },
    syntax: true,
    clipboard: {
      matchVisual: false,
    },
  };

  return (
    <Box sx={stylesheet.root}>
      <EditorToolbar id={id} isSimple={simple} />
      <ReactQuill
        value={value}
        onChange={onChange}
        modules={modules}
        formats={formats}
        placeholder="Write something awesome..."
        {...other}
      />
    </Box>
  );
}

interface QuillEditorProps {
  id: string;
  value: string;
  onChange: (...args: unknown[]) => void;
  error: boolean;
  simple: boolean;
  sx: Record<string, unknown>;
}

const stylesheet = Stylesheet.create({
  root: {
    borderRadius: (theme) => theme.shape.borderRadius,
    border: (theme) => `solid 1px ${theme.palette.grey[500]}`,
    '& .ql-container.ql-snow': {
      borderColor: 'transparent',
      ...(theme) => {
        return theme.typography.body1;
      },
      fontFamily: (theme) => theme.typography.fontFamily,
    },
    '& .ql-editor': {
      minHeight: 200,
      '&.ql-blank::before': {
        fontStyle: 'normal',
        color: (theme) => theme.palette.text.disabled,
      },
      '& pre.ql-syntax': {
        ...(theme) => theme.typography.body2,
        padding: (theme) => theme.spacing(2),
        borderRadius: (theme) => theme.shape.borderRadius,
        backgroundColor: (theme) => theme.palette.grey[900],
      },
    },
  },
});
