import React from 'react';
import { useEditor, EditorContent } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import TaskList from "@tiptap/extension-task-list";
import TaskItem from "@tiptap/extension-task-item";
import TextStyle from "@tiptap/extension-text-style";
import Color from "@tiptap/extension-color";
import Toolbar from './Toolbar';

// Your initial content
const initialContent = `
<h2>Informed Consent Form</h2>
<h3>Study Title: Impact of Diet on Wellness</h3>

<p>This Informed Consent Form is provided to ensure that you understand the nature, benefits, risks, and procedures of the study in which you are about to participate. Your participation is entirely voluntary, and you may withdraw at any time without penalty.</p>

<h3>Researcher Contact Information</h3>
<p><strong>Dr. Jane Doe</strong><br>
Email: jane.doe@example.com<br>
Phone: (123) 456-7890</p>

<h3>Purpose of the Study</h3>
<p>The purpose of this study is to investigate the effects of a plant-based diet on overall wellness and energy levels in adults aged 18-65.</p>

<h3>Procedures</h3>
<p>Participants will be asked to follow a specific plant-based diet plan for 12 weeks and complete weekly online surveys about their energy levels and general well-being.</p>

<h3>Potential Risks and Discomforts</h3>
<p>Some participants may experience initial discomforts such as changes in digestion or food cravings when adjusting to a new diet. Any significant adverse reactions should be reported immediately.</p>

<h3>Potential Benefits</h3>
<p>Participants may experience improvements in energy levels, general wellness, and potentially, weight loss. The results will contribute to a broader understanding of diet impacts on health.</p>

<h3>Confidentiality</h3>
<p>Your responses and data will be kept confidential and only used for research purposes. Identifiable information will not be disclosed without your consent.</p>

<h3>Consent</h3>
<p>By signing below, you acknowledge that you have read and understood this consent form and agree to participate in the study.</p>

<blockquote>
  I consent to participate in the study and have had any questions about my participation answered to my satisfaction.<br>
  <strong>Participant's Signature:</strong> _____________________________ <br>
  <strong>Date:</strong> _____________________________
</blockquote>

`;

const Tiptap = ({ onChange }) => {
  const handleChange = (newContent: string) => {
    onChange(newContent);
  };

  const editor = useEditor({
    extensions: [
      StarterKit,
      TextStyle,
      Color,
      TaskList.configure({
        HTMLAttributes: {
          class: "not-prose pl-2",
        },
      }),
      TaskItem.configure({
        HTMLAttributes: {
          class: "flex items-start my-4",
        },
        nested: true,
      }),
    ],
    editorProps: {
      attributes: {
        class: 'editor-background prose dark:prose-invert prose-sm sm:prose-base lg:prose-lg xl:prose-2xl m-5 focus:outline-none',
      },
    },
    content: initialContent, // Use the initialContent for the editor's initial content
    onUpdate: ({ editor }) => {
      handleChange(editor.getHTML());
    },
  });

  if (!editor) return null;

  return (
    <div className='editor-container space-x-4'>
      <Toolbar editor={editor}/>
      <EditorContent editor={editor}/>
    </div>
  );
};

export default Tiptap;
